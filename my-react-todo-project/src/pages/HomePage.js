import React, { Component } from 'react'
import TodoList from "./component/TodoList";
class HomePage extends Component {
    render() {
        return (
            <div className="HomePage">
                <TodoList/>
            </div>
        )
    }
}
export default HomePage