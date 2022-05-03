index.js - entry point of the application
located in the Public folder



in react ther are two types of components
1. Function based components - popular these days
2. Class based components - used in past



in the JSX:

we must use className instead of class while writing html code because it is reserved in js
we must use htmlFor instead of for while writing html code because it is reserved in js
we must use tabIndex instead of index while writing html code because it is reserved in js


Note: Babel compiles a JSX down to React.creatElement() calls.

for eg:

JSX CODE:

const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);

COMPILED CODE BY BABEL:

const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);



JSX:
return (
    // below code is called as JSX
    // JSX starts from here
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          >
          Learn React with Utkarsh Patel
        </a>
      </header>
    </div>
    // JSX ends here
  );





while writing the JSX code in Function based components
Note: we must have to return only one div or element from it not more than one
for eg: 
return (
    // below code is called as JSX
    // JSX starts from here
    <div className="App">
     <h1>Hello</h1> ................................... We can't do this
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          >
          Learn React with Utkarsh Patel
        </a>
      </header>
    </div>
    // JSX ends here
  );



Note: if we want to use the above code so we have to use the JSX Fragment

Syntax for JSX Fragment: <> </>


for eg:

return (
	<> ................JSX Fragment

    // below code is called as JSX
    // JSX starts from here
    <div className="App">
     <h1>Hello</h1> ................................... We can't do this
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          >
          Learn React with Utkarsh Patel
        </a>
      </header>
    </div>
    // JSX ends here

	</>................JSX Fragment

  );




We have to use curly bracket to resolve the value stored in the varible in JSX
...............................................................................................................






npm install - reinstall all the required packages and dependencies for the project

Note: if we hand over the complete website to the client we cannot give the node modules folder to them - which contains the require packages and dependencies for the projects.

