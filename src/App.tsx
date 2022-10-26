import { useRef } from "react";
import { Text } from "./components";

const Emphasis = ({ children }: { children: React.ReactNode }) => {
  return <em style={{ background: "red" }}> {children}</em>;
};

function App() {
  const ref = useRef<HTMLAnchorElement>(null);
  const ref2 = useRef<HTMLHeadingElement>(null);
  // ref를 다루는데에 ref를 실제 핸들링 할 수 없고 타입체크를 할 수 없다.
  return (
    <div className="App">
      <Text as={Emphasis}>This is a text node with no as</Text>
      <Text as="h1" ref={ref} color="blue" style={{ backgroundColor: "black" }}>
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
