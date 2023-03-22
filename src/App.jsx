import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  const title = "Welcome to the new blog";

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
