import React from 'react'
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route,  Switch } from 'react-router-dom';
import './App.css';
import FilterDetails from './component/FilterDetails';
import CreateFilterNew from './component/CreateFilter';
import EditFilter from './component/EditFilter';
import Home from './component/Home';
import store from './redux/store';

function App() {
  return (
      <Provider store={store} >
        <Router>
          <div className="App">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/createFilter"  component={CreateFilterNew} />
              <Route path="/editFilter/:id"  component={EditFilter} />
              <Route path="/filterDetails/:id"  component={FilterDetails} />
            </Switch>
          </div>
        </Router>
      </Provider>
  );
}

export default App;
