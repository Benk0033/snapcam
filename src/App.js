import React, { useEffect } from 'react';
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
import Login from './Login';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/appSlice';
import { auth } from './firebase';
import ghost from './images/ghost.png';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(login({
          username: authUser.displayName,
          profilePic: authUser.photoURL,
          id: authUser.uuid,
        }))
      } else {
        dispatch(logout())
      }
    })
  }, [])
  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
            <>
              <img src={ghost} alt="" className="app__logo" />
              <div className='app__body'>
                <div className="app__bodyBackground">
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
              </div>
            </>
          )}
      </Router>
    </div>
  );
}

export default App;
