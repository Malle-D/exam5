import React from "react";
import Authen from "./Authen";
import useToken from "./Hook/useToken";
import UnAuthen from "./UnAuthen";

function App(){
  
  const [token] = useToken()

  if (token) {
    return <Authen />
  }
  else{
    return <UnAuthen />
  }

  }

export default App;


// import Header from "./Components/Header/Header";
// import "./Assets/main.css"
// import Nav from "./Components/Nav/Nav";
// import { Route, Routes } from "react-router-dom";
// import Home from "./Pages/Home/Home";
// import Video from "./Pages/Video/Video";
// import Chanel from "./Pages/Chanel/Chanel";

// function App() {
//   return (
//     <>
//           <Header />
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/chanel/:id" element={<Chanel />} />
//             <Route path="/video/:id" element={<Video />} />
//           </Routes> 
//     </>
//   );
// }

// export default App;






