import './App.css';
// import Navbar from './components/navbar/navbar';
import ReactRouter from './components/routers';
// import Header from './components/header/header';
// import Signin from './components/sigin/signin';
// import Signup from './components/signup/signup';
import {GlobalContext} from './components/api/contextapi';


function App() {
  return (

    <div className="App">
      {/* <GlobalContext.Provider value=''> */}
    <ReactRouter />
    {/* </GlobalContext.Provider> */}

    </div>

  );
}

export default App;
