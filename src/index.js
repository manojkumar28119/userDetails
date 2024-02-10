import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import UserDetails from "./components/UserDetails"
import UserItemDetails from "./components/UserItemDetails"

 
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
          <Route exact path="/" Component={UserDetails} />
          <Route exact path="/user/:id" Component={UserItemDetails} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
)
