import {BrowserRouter as Router,Route} from 'react-router-dom'
import './App.css';
import Header from './Header'
import AdminPage from './AdminPage'
import ProfilePage from './ProfilePage'
import HomePage from './HomePage'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route path="/admin" >
          <AdminPage />
        </Route>
        <Route path="/home" exact>
          <HomePage />
        </Route>
      </Router>
    </div>
  );
}

export default App;
