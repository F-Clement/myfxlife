import { Container } from 'react-bootstrap';
import styles from './App.module.css';
import NavBar from './components/NavBar';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import SignUpForm from './pages/auth/SignUpForm';
import './api/axiosDefaults';
import SignInForm from './pages/auth/SignInForm';
import PostCreateForm from './pages/posts/PostCreateForm';
// import PostPage from './pages/posts/PostPage';
import Home from './pages/Home';
import Footer from './components/Footer';
import PostsPage from './pages/posts/PostsPage';
import { useCurrentUser } from './contexts/CurrentUserContext';
import LikePosts from './components/LikePosts';


function App() {

  const currentUser = useCurrentUser();
  const profile_id = currentUser?.profile_id || "";

  return (
        <div className={styles.App}>
          <NavBar />
          <Container className={styles.Main}>
            <Switch>
              <Route exact path="/" render={() => <Home />} />
              <Route exact path="/posts" render={() => <PostsPage/> } />
              <Route exact path="/login" render={() => <SignInForm />} />
              <Route exact path="/logout" render={() => <h1>Logout</h1>} />
              <Route exact path="/signup" render={() => <SignUpForm />} />
              <Route exact path="/profile" render={() => <h1>Profile</h1>} />
              <Route exact path="/create/post" render={() => <PostCreateForm /> } />
              <Route exact path="/posts/:id" render={() => <PostsPage message = "No results for this search" /> } />
              <Route exact path="" render={() => <LikePosts filter={`likes__owner__profile=${profile_id}&ordering=-likes__created_at&`} />} />
              <Route render={() => <p>Sorry! Page Not Found.</p>} />
            </Switch>
          </Container>
          <Footer />
        </div>
  );
}

export default App;