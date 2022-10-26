import Border from "./components/Border";

function App() {
  return (
    <div className="App">
      <Border as="span" color="#ccc" varient="dashed">
        asdf
      </Border>
      <Border as="div">asdf</Border>
      <Border as="h1">asdf</Border>
    </div>
  );
}

export default App;
