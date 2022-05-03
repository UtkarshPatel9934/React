//import logo from './logo.svg'; // we deleted the default generated JSX
import './App.css'; // inport the css file to apply styles to the JSX Code

// This statement added automatically when we write : <Navbar> in JSX
import Navbar from './Components/Navbar';

// Anything which is written here will show up in the React App
// start app by cmd:  npm start


// we can import imgs like below:
import logo from './logo.svg';

// creating a variable:
// let name = "Utkarsh Patel"



/* Note */
// we can not resolve the external HTML in the JSX like the below code
// let name2 = "<b>Utkarsh Patel</b>"

// it doesn't print out the BOLD TEXT it simply prints as it is

/* Note */

// let logo = "colour99/src/logo.svg" - Note we cannot use img like this

function App() {
  return (
    // we have to use curly bracket to resolve the value stored in the varible in JSX
    <>
    {/* Calling the Components */}
    <Navbar title="Color99" home="Home" about="About Us"/>
    {/* <Navbar /> */}
    <img src={logo} className="App-logo" alt="logo" />
    </>

    // Added the navbar component
  );
}

export default App;
