import { Container } from 'react-bootstrap';
import styles from './App.module.css';
import NavBar from './components/NavBar';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import SignUpForm from './pages/auth/SignUpForm';
import './api/axiosDefaults';
import SignInForm from './pages/auth/SignInForm';
import PostCreateForm from './pages/posts/PostCreateForm';
import Home from './pages/Home';
import PostsPage from './pages/posts/PostsPage';
import DraftPost from './pages/posts/DraftPost';
import { useCurrentUser } from './contexts/CurrentUserContext';
import PostPage from './pages/posts/PostPage';
import PostEditForm from './pages/posts/PostEditForm';
import ProfilePage from './pages/profiles/ProfilePage';
import UsernameForm from "./pages/profiles/UsernameForm";
import UserPasswordForm from "./pages/profiles/UserPasswordForm";
import ProfileEditForm from "./pages/profiles/ProfileEditForm";
import PageNotFound from './components/PageNotFound';
import DraftPage from './pages/posts/DraftPage';
import DraftEditForm from './pages/posts/DraftEditForm';
import InfosPage from './pages/notification/InfosPage';
import InfoPage from './pages/notification/InfoPage';
// import CreateNotification from './pages/notification/CreateNotification';


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
              <Route exact path="/drafts/:id" render={() => <DraftPost /> } />
              <Route exact path="/drafts" render={() => <DraftPage /> } />
              <Route exact path="/drafts/:id/edit" render ={() => <DraftEditForm /> } />
              <Route exact path="/login" render={() => <SignInForm />} />
              <Route exact path="/logout" render={() => <h1>Logout</h1>} />
              <Route exact path="/signup" render={() => <SignUpForm />} />
              <Route exact path="/profile" render={() => <h1>Profile</h1>} />
              <Route exact path="/create/post" render={() => <PostCreateForm /> } />
              <Route exact path="/posts/:id" render={() => <PostPage message = "No results for this search" /> } />
              <Route exact path="/Liked" render={() => <PostsPage filter={`likes__owner__profile=${profile_id}&ordering=-likes__created_at&`} />} />
              <Route exact path="/feed" render={() => <PostsPage filter={`owner__followed__owner__profile=${profile_id}&`} />} />
              <Route exact path="/posts/:id/edit" render ={() => <PostEditForm />} />
              <Route exact path="/profiles/:id" render ={() => <ProfilePage />} />
              <Route exact path="/profiles/:id/edit/username" render={() => <UsernameForm />} />
              <Route exact path="/profiles/:id/edit/password" render={() => <UserPasswordForm />} />
              <Route exact path="/profiles/:id/edit" render={() => <ProfileEditForm />} />
              <Route exact path="/info" render={() => <InfosPage /> } />
              <Route exact path="/info/:id" render ={() => <InfoPage /> } />
              {/* <Route exact path="/create/info" render={() => <CreateNotification />} /> */}
              <Route render={() => <PageNotFound />} />
            </Switch>
          </Container>
        </div>
  );
}

export default App;