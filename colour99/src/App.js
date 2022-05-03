//import logo from './logo.svg'; // we deleted the default generated JSX
import './App.css'; // inport the css file to apply styles to the JSX Code

// Anything which is written here will show up in the React App
// start app by cmd:  npm start


// we can import imgs like below:
import logo from './logo.svg';

// creating a variable:
let name = "Utkarsh Patel"



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
    <h1>Hello {name}</h1> 
    <img src={logo} className="App-logo" alt="logo" />
      <nav>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </nav>
      <div className="container">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel ipsa eius a, asperiores illum maiores. Cum perspiciatis provident non beatae aperiam dolores quod consectetur minus magnam, tempora aliquid impedit! Aperiam pariatur tempora, odio ipsam nobis commodi accusantium ratione similique quos quaerat facere atque incidunt odit?</p>
      </div>
    </>
  );
}

export default App;
