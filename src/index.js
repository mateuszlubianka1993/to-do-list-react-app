import React from 'react';
import ReactDOM from 'react-dom';
import ToDoForm from './ToDoForm';
import List from './List';
import './index.css';

class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            tasks: [],
            thatTask: ''
          };
      };

      onChange = (e) => {
        this.setState({thatTask: e.target.value});
        
      };

      addNewTask = (e) => {
        e.preventDefault();
        if(this.state.thatTask !== '') {
          this.setState({
            thatTask: '',
            tasks: [...this.state.tasks, this.state.thatTask]
          });
          
        };
      };

      deleteAllTasks = () => {
        this.setState({
          tasks: [] 
        });
      };

      removeLastTask = () => {
        const copy = this.state.tasks;
        copy.pop();

        this.setState({tasks: copy});
      };

      deleteTask = (index) => {
        this.setState(updatedTasks => ({
          tasks: updatedTasks.tasks.filter(task => task !== index )
      }));
      };
      
    render() {
        return (
            <div className="main-box">
                <header className="main-header">
                  <h1>To Do List App</h1>
                </header>
                <ToDoForm 
                  onChange={this.onChange} 
                  addNewTask={this.addNewTask}
                  deleteAllTasks={this.deleteAllTasks}
                  removeLastTask={this.removeLastTask}
                />
                <List tasks={this.state.tasks} delete={this.deleteTask} />
            </div>
        );
    };
};

ReactDOM.render(<App />, document.querySelector('#root'));
