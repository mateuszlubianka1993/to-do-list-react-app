import React from 'react';
import './List.css';

const List = (props) => (
    <ul className="list-ul">
       {props.tasks.map((task, index) => <li key={index}>Task number<span className="task-number"> {index+1}</span> {task}</li>)} 
    </ul>
);

export default List;