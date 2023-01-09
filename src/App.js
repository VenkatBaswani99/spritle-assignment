import {Route, Switch} from 'react-router-dom'

import Master from './components/Master'

import Login from './components/Login'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/master" component={Master} />
    <Route exact path="/" component={Login} />
  </Switch>
)
export default App
