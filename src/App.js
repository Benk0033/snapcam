import React from 'react';
import './App.css';
import WebcamCapture from './WebcamCapture';
import Preview from './Preview';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Chats from './Chats';
import ChatView from './ChatView';

function App() {
  return (
    <div className="app">
      <Router>
        <div className='app__body'>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/chats/view">
              <ChatView />
            </Route>
            <Route path="/chats">
              <Chats />
            </Route>
            <Route path="/preview">
              <Preview />
            </Route>
            <Route exact path="/">
              <WebcamCapture />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
