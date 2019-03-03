import React from 'react';
import ReactDOM from 'react-dom';
import ToDoForm from './ToDoForm';
import List from './List';

class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            tasks: [],
            thatTask: ''
          }
      };
      
      onChange = (e) => {
        this.setState({thatTask: e.target.value});
        console.log(e.target.value)
      };

      addNewTask = (e) => {
        e.preventDefault();
        this.setState({
          thatTask: '',
          tasks: [...this.state.tasks, this.state.thatTask]
        });
        console.log(this.state.tasks)
        console.log(this.state.thatTask)
      }
      
    render() {
        return (
            <div className="main-box">
                <ToDoForm onChange={this.onChange} addNewTask={this.addNewTask}/>
                <List />
            </div>
        );
    };
}

ReactDOM.render(<App />, document.querySelector('#root'));