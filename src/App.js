import './App.css'
import { Route, Switch } from 'react-router-dom';
import View from "./components/View.jsx"
import Home from './components/Home'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/View" component={View}/>
      </Switch>
    </div>
  );
}



export default App;





