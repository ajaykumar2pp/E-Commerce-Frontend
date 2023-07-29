
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Testing JavaScript Code in HTML Page</h1>
      <pre>
        <code>
          {`
            function greet() {
              console.log("Hello, World!");
            }
            greet();
          `}
        </code>
      </pre>
    </div>
  );
}

export default App;
