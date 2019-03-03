import React from 'react';
import ReactDOM from 'react-dom';
import ToDoForm from './ToDoForm';

class App extends React.Component {

    constructor(props) {
        super(props)
        
      };

      
    render() {
        return (
            <div className="main-box">
                <ToDoForm />
            </div>
        );
    };
}

ReactDOM.render(<App />, document.querySelector('#root'));