import { Text } from "./components";

const Emphasis = ({ children }: { children: React.ReactNode }) => {
  return <em style={{ background: "red" }}> {children}</em>;
};

function App() {
  return (
    <div className="App">
      <Text as={Emphasis}>This is a text node with no as</Text>
      <Text as="h1" color="blue" style={{ backgroundColor: "black" }}>
        hi
      </Text>
      <Text as="div">hi</Text>
      <Text as="a" href="asdf">
        hi
      </Text>
    </div>
  );
}

export default App;
