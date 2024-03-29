// import Home from './component-Class/Home'
// import About from './component-Class/About'
// import Contact from './component-Class/Contact';
// import Team from './component-Class/Team';
// import Help from './component-Class/Help';
// import Home1 from './component-Func/Home1';
// import About1 from './component-Func/About1';
// import Contact1 from './component-Func/Contact1';
// import Team1 from './component-Func/Team1';
// import Help1 from './component-Func/Help1';
import Menu from "./layout/Menu";

// function App() {
//   return (
//     <>
//       <h1>This is my react app</h1>
//     </>
//   );
// }
// export default App;

import React from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";

class App extends React.Component {
  render() {
    return (
      <>
        <h1 style={{ backgroundColor: "red",  margin: "0"}}>hello React!!</h1>

        {/* <Home />
      <About />
      <Contact />
      <Team />
      <Help />
      <Home1 />
      <About1 />
      <Contact1 />
      <Team1 />
      <Help1 /> */}
        <Header />
        <Navbar />
        <Menu />
        <Footer />
      </>
    );
  }
}

export default App;
