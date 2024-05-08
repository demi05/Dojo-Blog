import Home_ from "./Home_";
import Navbar from "./Navbar";

function App() {
  const title = "Welcome to the new blog";
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home_ />
      </div>
    </div>
  );
}

export default App;
