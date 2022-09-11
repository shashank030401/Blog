import React from 'react'
import {Navigate, useParams} from 'react-router-dom';
import {useAuth} from "../Contexts/AuthContext";


function Protected({children}) {
    const {currentUser} = useAuth();
    if(!currentUser){
        return <Navigate to={`/login`} />
    }
  return children;
}

export default Protected