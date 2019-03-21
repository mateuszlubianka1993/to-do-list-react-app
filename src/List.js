import React from 'react';
import './List.css';

class List extends React.Component{

    delete(index){
        this.props.delete(index);
    }
    
render() {
    return (
        <ul className="list-ul">
            {this.props.tasks.map((task, index) => <li key={index}>
                                                Task 
                                                <span className="task-number"> 
                                                {index+1}</span> 
                                                {task}
                                                <button onClick={this.delete.bind(this, task)} className="r-button"><i className="fas fa-minus-square"></i></button>
                                        </li>)} 
        </ul>
    );
}
}

export default List;
