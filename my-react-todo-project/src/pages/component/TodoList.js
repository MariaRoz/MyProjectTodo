import React, { Component } from 'react'
import {itemsData} from "../../actions/ItemAction";
import {connect} from "react-redux";
import {AddItems} from "../../actions/AddItemsAction";
import store from "../../helpers/store";


store.dispatch(AddItems());

class TodoList extends Component {
    constructor() {
        super();
    }
    //
    //     this.state = {
    //         itemInput : '',
    //         error: false,
    //
    //     };
    //
    //     this.addItem = this.addItem.bind(this);
    // }

    // addItem(e) {
    //     e.preventDefault();
    //     this.props.itemsData(this.state.itemInput)
    //     if (!this.state.itemInput){
    //         this.setState({error: true});
    //         return;
    //     }
    //
    //     this.setState({
    //         itemInput : '',
    //         error: false,
    //         items : [...this.state.item, {
    //             id: Math.random(),
    //             text: this.state.itemInput
    //         }]
    //     });
    // }

    // removeItem(id){
    //     const newItems = this.state.items.filter(item => item.id !== id);
    //
    //     this.setState({
    //         items : newItems
    //     });
    // }

    render(){
        return(
            <div className="TodoList">
                <div className="container">>
                {/*<form onSubmit={this.addItem}>*/}
                    {/*<input*/}
                        {/*type="text"*/}
                        {/*className={`form-control ${this.state.error ? 'border border-danger' : ''}`}*/}
                        {/*value={this.state.itemInput}*/}
                        {/*onChange={e => this.setState({itemInput : e.target.value})}*/}
                        {/*placeholder="Item" />*/}

                    {/*<button type="submit">ADD</button>*/}
                {/*</form>*/}
                {/*<ul className="test">*/}
                    {/*{this.state.items.map(item => (*/}
                        {/*<li key={item.id}>*/}
                            {/*{item.text}*/}
                            {/*<span className="delElement" onClick={this.removeItem.bind(this, item.id)}> X </span>*/}
                        {/*</li>*/}
                    {/*))}*/}
                {/*</ul>*/}
                <p>{this.props.newTest}</p>
                </div>
            </div>
        );
    }
}
const mapDispatchToProps = {
    itemsData,
};
function mapStateToProps(state) {
    return {
        newTest: state.tests
    }
}
TodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList)

export default TodoList
