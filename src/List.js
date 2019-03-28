import React from 'react';
import './List.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class List extends React.Component{

    delete(index){
        this.props.delete(index);
    }

    
render() {
    
    const listOfItems = this.props.tasks.map((task, index) => <li key={index}>
    Task 
    <span className="task-number"> 
    {index+1}</span> 
    {task}
    <button onClick={this.delete.bind(this, task)} className="r-button"><i className="fas fa-minus-square"></i></button>
</li>)

    return (
        <ul className="list-ul">
            <ReactCSSTransitionGroup
            transitionName="fade"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}>
                {listOfItems}
            </ReactCSSTransitionGroup>
             
        </ul>
    );
}
}

export default List;
