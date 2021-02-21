import 'firebase/database';
import 'firebase/auth'
import firebase from '../api/firebaseCon'
import { createContext, useEffect, useState } from 'react';


export const UserContext = createContext({ user: "", data:"" });

function UserProvider({ children }) {

  const [user, setUser] = useState();
  // const [data, setData] = useState();

  // useEffect(() => {
  //   async function getdailydata() {
  //     await firebase.database().ref('products').on("value", namepro => {
  //       var valll = namepro.val();
  //       setData(valll)

  //     })
  //   }
  //   getdailydata();
  // }, [])

  firebase.auth().onAuthStateChanged(userAuth => {

    setUser(userAuth)
  })

  return (
    // <>
      <UserContext.Provider value={user}>
        {children}
      </UserContext.Provider>

  );

}
export default UserProvider;
// firebase.database().ref('/').on('value', data => {
//      setData(data.val())
// });

// const [data, setData] = useState([]);


// const initialSate = [data];

// export const GlobalContext = createContext(initialSate);


