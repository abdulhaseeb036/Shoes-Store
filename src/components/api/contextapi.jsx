import 'firebase/database';
import 'firebase/auth'
import firebase from '../api/firebaseCon'
import { createContext, useEffect, useState } from 'react';


export const UserContext = createContext({ user: "", data:"" });

export const  signup =(email,password) => {
  firebase.auth().createUserWithEmailAndPassword(email, password)
}

export const signin = (email,password) => {
  firebase.auth().signInWithEmailAndPassword(email,password)

}
function UserProvider({ children }) {
  
  const [user, setUser] = useState();
  
  useEffect(() => {
    const unSubscribe =  firebase.auth().onAuthStateChanged(userAuth => {
      setUser(userAuth)
    })
    return unSubscribe;
  }, [])


  return (
  
      <UserContext.Provider value={{
        user: user,
        data: "heloo",
        signup,
        signin,
      }}>
        {children}
      </UserContext.Provider>
  )}
export default UserProvider;



