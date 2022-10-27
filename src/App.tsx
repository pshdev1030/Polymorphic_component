import { useRef } from "react";
import { Text } from "./components";
import Border from "./components/Border";

function App() {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div className="App">
      <Border as="span" color="#ccc" varient="dashed">
        asdf
      </Border>
      <Border as="div">asdf</Border>
      <Border as="h1">asdf</Border>
      <Text as="div" ref={ref} />
    </div>
  );
}

export default App;
