import { Container } from 'react-bootstrap';
import styles from './App.module.css';
import NavBar from './components/NavBar';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import SignUpForm from './pages/auth/SignUpForm';
import './api/axiosDefaults';


function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Switch>
          <Route exact path="/" render={()=> <h1>Home Page</h1>} />
          <Route exact path="/posts" render={() => <h1>Posts</h1>} />
          <Route exact path="/login" render={() => <h1>Login</h1>} />
          <Route exact path="/logout" render={() => <h1>Logout</h1>} />
          <Route exact path="/signup" render={() => <SignUpForm /> } />
          <Route exact path="/profile" render={() => <h1>Profile</h1>} />
          <Route render={() => <p>Sorry! Page Not Found.</p>} />
        </Switch>

      </Container>
    </div>
  );
}

export default App;