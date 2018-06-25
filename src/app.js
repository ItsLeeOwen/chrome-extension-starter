import React from "react"
import ReactDOM from "react-dom"

import {
  Link,
  Route,
} from 'react-router-dom'

import Fluffykins from "./fluffykins"
import Abbykins from "./abbykins"

export default class App extends React.Component {
  static Var = "Hello"

  logout = () => {
    chrome.identity.launchWebAuthFlow({
      url: "https://accounts.google.com/logout",
      "interactive": true,
    }, () => {
      console.log("app.js launchedWebAuthFlow response", arguments)
    })
    chrome.runtime.sendMessage({
      event: "LOGOUT",
    }, response => {
      console.log("app.js", "logout response", response)
    })
  }

  render() {
    return (
      <div>
        <h1>
          <Link to="/">React App Starter</Link>
        </h1>
        <nav>
          <Link to="/abbykins">Abbykins</Link>
          <br />
          <Link to="/fluffykins">Fluffykins</Link>
        </nav>

        <button onClick={this.logout}>LOGOUT</button>

        <Route
          path="/abbykins"
          component={Abbykins} />
        <Route
          path="/fluffykins"
          component={Fluffykins} />
      </div>
    )
  }
}