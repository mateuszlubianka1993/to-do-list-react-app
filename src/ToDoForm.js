import React from 'react';
import './ToDoForm.css';

class ToDoForm extends React.Component {

    render() {
        return (
            <div className="to-do-form-div">
                <form onSubmit={this.props.addNewTask} className="to-do-form">
                    <input type="text" placeholder="Add new task" onChange={this.props.onChange}></input>
                    <button className="add-button">Add</button>
                </form>
                <div className="buttons">
                    <button onClick={this.props.deleteAllTasks}>Delete All</button>
                    <button onClick={this.props.removeLastTask}>Remove Last</button>
                </div>
            </div>
        );
    };
};

export default ToDoForm;