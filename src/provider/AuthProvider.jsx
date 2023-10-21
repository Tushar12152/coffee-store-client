import { createContext, useState } from "react";
import PropTypes from "prop-types"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../fireBase/firebase.config";

export const Authcontext=createContext(null)

const AuthProvider = ({children}) => {

    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)


     const createUser=(email,password)=>{
        setLoading(true)

      return createUserWithEmailAndPassword(auth,email,password)
    }

    const SignInUser=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
        
        
        





    const authInfo={
       createUser,
       loading,
       user,
       SignInUser,

    }

    return (
        <Authcontext.Provider value={authInfo}>
               {children}
        </Authcontext.Provider>
    );
};

AuthProvider.propTypes={
    children:PropTypes.node
}

export default AuthProvider;