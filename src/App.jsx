import React from "react"
import "./App.css"
import Sidenav from "./navigation/Sidenav"
import Timeline from './timeline/Timeline'
import Suggest from './suggestion/Suggest'

function App() {

  return (
    <div className="app">
      <Sidenav />
      <Timeline />
      <Suggest />
    </div>
  )
}


export default App
