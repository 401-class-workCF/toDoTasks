import React from 'react';
import Form from './Form/index';
import List from './List/index';

class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }

  addTask = (task) => {
    task._id = Math.random();
    task.complete = false;
    this.setState({ list: [...this.state.list, task] });
  };

  componentDidMount() {
    let list = [
        {
          _id: 1,
          complete: false,
          text: 'Clean',
          difficulty: 1,
          assignee: 'Rea',
        },
    ];

    this.setState({ list });
  }

  render() {
    return (
      <>
        <header>
          <h2>
            {this.state.list.filter((task) => !task.complete).length} Tasks
          </h2>
        </header>

        <section className='todo'>
          <div>
            <Form handleSubmit={this.addTask} />
          </div>

          <div>
            <List list={this.state.list} />
          </div>
        </section>
      </>
    );
  }
}

export default ToDo;
