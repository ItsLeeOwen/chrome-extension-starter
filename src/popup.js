import './popup.scss'

import React from "react"
import ReactDOM from "react-dom"
import { HashRouter as Router, Route } from 'react-router-dom'

import App from "./app"

console.log("chrome-extension-starter popup.js")

ReactDOM.render((
  <Router>
    <App />
  </Router>
), document.querySelector("main"))
