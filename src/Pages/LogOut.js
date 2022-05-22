import React from "react";
import useToken from "../Hook/useToken";

const LogOut = () =>{

   const [ _ ,setToken ] = useToken()

   return (
      <>
         <button className="log-btn" onClick={() => setToken(false)}>
            Log Out 
         </button>
      </>
   )
}

export default LogOut;