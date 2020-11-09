import React, { useEffect, useState } from 'react';
import Form from './Form/index';
import List from './List/index';

const todoAPI = 'https://api-js401.herokuapp.com/api/v1/todo';

function App() {
  const [list, setList] = useState([]);

  const add = (item) => {
    item.due = new Date();
    fetch(todoAPI, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item),
    })
      .then((response) => response.json())
      .then((savedItem) => {
        setList([...list, savedItem]);
      })
      .catch(console.error);
  };

  const get = () => {
    fetch(todoAPI, {
      method: 'get',
      mode: 'cors',
    })
      .then((tasks) => tasks.json())
      .then((tasks) => setList(tasks.results))
      .catch(console.error);
  };

  useEffect(get, []);

  return (
    <>
      <header>
        <h1>
          {list.filter((task) => !task.complete).length} Tasks
        </h1>
      </header>
      <section>
        <div className="Form">
          <Form handleSubmit={add} />
        </div>
        <div>
          <List list={list} />
        </div>
      </section>
    </>
  );
}

export default App;
