import { Container } from 'react-bootstrap';
import styles from './App.module.css';
import NavBar from './components/NavBar';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import SignUpForm from './pages/auth/SignUpForm';
import './api/axiosDefaults';
import SignInForm from './pages/auth/SignInForm';
import PostCreateForm from './pages/posts/PostCreateForm';
import PostPage from './pages/posts/PostPage';
import Home from './pages/Home';


function App() {

  return (
        <div className={styles.App}>
          <NavBar />
          <Container className={styles.Main}>
            <Switch>
              <Route exact path="/" render={() => <Home />} />
              <Route exact path="/posts" render={() => <h1>Posts</h1>} />
              <Route exact path="/login" render={() => <SignInForm />} />
              <Route exact path="/logout" render={() => <h1>Logout</h1>} />
              <Route exact path="/signup" render={() => <SignUpForm />} />
              <Route exact path="/profile" render={() => <h1>Profile</h1>} />
              <Route exact path="/create/post" render={() => <PostCreateForm /> } />
              <Route exact path="/posts/:id" render={() => <PostPage /> } />
              <Route render={() => <p>Sorry! Page Not Found.</p>} />
            </Switch>
          </Container>
        </div>
  );
}

export default App;