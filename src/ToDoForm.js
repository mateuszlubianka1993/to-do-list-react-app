import React from 'react';

class ToDoForm extends React.Component {

    render() {
        return (
            <div className="to-do-form-div">
                <form>
                    <input type="text" placeholder="Add new task" ></input>
                    <button>Add</button>
                </form>
                <div className="buttons">
                    <button>Delete All</button>
                    <button>Remove Last</button>
                </div>
            </div>
        );
    };
};

export default ToDoForm;