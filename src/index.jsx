import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home/Home'
import Fiche from './pages/Fiche/Fiche'
import Error from './pages/404/404'
import Apropos from './pages/A-Propos/Apropos'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import '../src/scss/main.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/acceuil">
          <Home />
        </Route>
        <Route path="/fiche/:id">
          <Fiche />
        </Route>
        <Route path="/about">
          <Apropos />
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  </React.StrictMode>
)
