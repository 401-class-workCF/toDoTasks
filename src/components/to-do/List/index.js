import React from 'react';

class TodoList extends React.Component {
  render() {
    return (
      <div class='card'>
        <h4 class='card-header'>Tasks</h4>
        <ul class='list-group list-group-flush'>
          {this.props.list.map((item) => (
            <li class='list-group-item' key={item._id}>
              <span onClick={() => this.props.handleComplete(item._id)}>
                {item.text}
              </span>
            </li>
          ))}
        </ul>
        <h5 class='card-footer'>End of Tasks List</h5>
      </div>
    );
  }
}

export default TodoList;
