import React, {Component} from "react";
import {history} from "../../helpers/history";

class Logout extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }n

    handleSubmit(e) {
        e.preventDefault();
        localStorage.removeItem('username');
        localStorage.removeItem('pw');
        history.push('/login');
    }


    render() {
        return (
            <div className="Logout">
                <form onSubmit={this.handleSubmit}>
                    <button className="logout">LOGOUT</button>
                </form>
            </div>

        );
    }
}
export default Logout;