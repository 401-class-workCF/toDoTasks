import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { item: {} };
  }
  handleInputChange = (event) => {
    this.setState({
      item: { ...this.state.item, [event.target.name]: event.target.value },
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    event.target.reset();
    this.props.handleSubmit(this.state.item);
    const item = {};
    this.setState({ item });
  };

  render() {
    return (
      <>
        <h3>Add Task To List</h3>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              name='text'
              placeholder='Task'
              onChange={this.handleInputChange}
            />
          </label>
          <br></br>
          <label>
            <div>Difficulty:</div>
            <input
              defaultValue='3'
              type='range'
              min='1'
              max='5'
              name='difficulty'
              onChange={this.handleInputChange}
            />
          </label>
          <br></br>
          <label>
            <input
              type='text'
              name='assignee'
              placeholder='Assign (Name)'
              onChange={this.handleInputChange}
            />
          </label>
          <button>Add</button>
        </form>
      </>
    );
  }
}

export default Form;

