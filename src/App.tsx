import { Text } from "./components";

function App() {
  return (
    <div className="App">
      <Text as="h1">hi</Text>
      <Text as="div">hi</Text>
      <Text as="a" href="asdf">
        hi
      </Text>
    </div>
  );
}

export default App;
