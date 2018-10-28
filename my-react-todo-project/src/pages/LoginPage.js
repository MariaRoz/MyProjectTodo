import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {login} from "../actions/UserAction";


class LoginPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        // this.setState({ submitted: true });
        const { username, password } = this.state;
        if (username && password) {
            this.props.login(username, password);
        }
    }

    render() {
        const { username, password} = this.state;
        return (
            <div className="LoginPage">
                <div className="form">
                    <form onSubmit={this.handleSubmit}>
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" value={username} onChange={this.handleChange} />
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" value={password} onChange={this.handleChange} />
                        <button>Login</button>
                        <Link className="message" to="/register">Not registered? Create an account</Link>
                        <p>{this.props.error}</p>
                    </form>
                </div>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        error: state.authentication.error
    }
}
const mapDispatchToProps ={
    login
}


LoginPage = connect(mapStateToProps,mapDispatchToProps)(LoginPage);
export default LoginPage;