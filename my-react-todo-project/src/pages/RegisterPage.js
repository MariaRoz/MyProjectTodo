import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {register} from "../actions/UserAction";
import {connect} from 'react-redux'



class RegisterPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                firstname:'',
                lastname:'',
                email:'',
                dateOfBirthday:'',
                phone:'',
                familyStatus:'',
                username: '',
                password: '',

            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }
    handleSubmit(event) {
        event.preventDefault();
        const { user } = this.state;
        localStorage.setItem('username', user.username);
        localStorage.setItem('pw', user.password);
        if ( user.username && user.password) {
            this.props.register(user);
        }
    }
    render() {
        const {user} = this.state;
        return (
            <div className="RegisterPage">
                <div className="form">
                    <form onSubmit={this.handleSubmit}>
                        <label>Firstname</label>
                        <input type="text" name="firstname" value={user.firstname} onChange={this.handleChange} />
                        <label>Lastname</label>
                        <input type="text" name="lastname" value={user.lastname} onChange={this.handleChange} />
                        <label>Email</label>
                        <input type="text" name="email" value={user.email} onChange={this.handleChange} />
                        <label>Date of birthday</label>
                        <input type="date" name="bday" min="1918-01-01" max="2018-12-31" />
                        <label>Username</label>
                        <input type="text" name="username" value={user.username} onChange={this.handleChange} />
                        <label>Password</label>
                        <input type="password" name="password" value={user.password} onChange={this.handleChange} />
                        <button>Register</button>
                        <Link className="message" to="/login">Already registered? Sign In</Link>
                    </form>
                </div>
            </div>
        );
    }
}
const mapDispatchToProps = {
    register
};

RegisterPage = connect(null, mapDispatchToProps)(RegisterPage);

export default RegisterPage