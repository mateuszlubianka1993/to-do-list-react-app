import React from 'react';

const List = (props) => (
    <ul className="list-ul">
       {props.tasks.map((task, index) => <li key={index}>Task number #{index+1}: {task}</li>)} 
    </ul>
);

export default List;