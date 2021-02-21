import './App.css';
// import Navbar from './components/navbar/navbar';
import ReactRouter from './components/routers';
// import Header from './components/header/header';
// import Signin from './components/sigin/signin';
// import Signup from './components/signup/signup';
import UserProvider from './components/api/contextapi'

function App() {
  return (

      <UserProvider>
    <div className="App">
        <ReactRouter />
    </div>
      </UserProvider>

  );
}

export default App;
