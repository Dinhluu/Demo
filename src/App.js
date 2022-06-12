import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';
import { useState, useEffect } from 'react';
// import { toast } from 'react-toastify';
import Covid from './views/Covid';
import { CountDown, NewCountDown } from './views/CountDown';
import Blog from './views/Blog';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import Todo from './views/Todo';
import DetaiBlog from './views/DetailBlog';
import AddNewBlog from './views/AddNewBlog';
import NotFound from './views/NotFound';
import YoutubeSearch from './views/YoutubeSearch';

const App = () => {
  // let [name, setName] = useState('LTD');
  let [name] = useState('LTD');
  const [address, setAddress] = useState('');
  const [todos, setTodos] = useState([
    { id: 'todo1', title: 'Watching Hoi Dan I', type: "LTD" },
    { id: 'todo2', title: 'Watching Hoi Dan IT channel', type: 'LTD' },
    { id: 'todo4', title: 'Watching Hoi Dan IT channel1', type: 'NYC' },
    { id: 'todo5', title: 'Watching Youtube', type: 'NYC' }
  ]);

  useEffect(() => {
    // console.log('run effect')
  }, []);


  const handleEventClick = (event) => {
    // setName(address)
    if (!address) {
      // toast.error("Ét Ô Ét");
      return;
    }
    let newTodo = { id: Math.floor(Math.random() * 1022), title: address, type: 'LTD' }
    setTodos([...todos, newTodo])
    setAddress('');
  }

  const deleteDataTodo = (id) => {
    let currentTodos = todos;
    currentTodos = currentTodos.filter(item => item.id !== id)
    setTodos(currentTodos)
  }

  const handleOnChangeInput = (event) => {
    setAddress(event.target.value)
  }

  const onTimesup = () => {
    alert('times up')
  }

  return (
    <Router>
      <div className="App">

        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
          <Switch>
            <Route path="/" exact>
              <Covid />
            </Route>
            <Route path="/timer">
              <CountDown onTimesup={onTimesup} />
              <span>---------------------</span>
              <NewCountDown onTimesup={onTimesup} />

            </Route>
            <Route path="/todo">
              <Todo
                todos={todos}
                title={'All todos'}
                deleteDataTodo={deleteDataTodo}
              />
              <input type="text" value={address} onChange={(event) => handleOnChangeInput(event)} />
              <button type="button" onClick={(event) => handleEventClick(event)}>Click me</button>
            </Route>
            <Route path="/blog" exact>
              <Blog />
            </Route>
            <Route path="/blog/:id">
              <DetaiBlog />
            </Route>
            <Route path="/add-new-blog" >
              <AddNewBlog />
            </Route>
            <Route path="/secret" >
              <YoutubeSearch />
            </Route>

            <Route path="*" >
              <NotFound />
            </Route>
          </Switch>

        </header>

        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}

      </div>
    </Router>
  );
}

export default App;
