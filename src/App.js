import "./App.css";
import StateExample from "./Examples/useState";
import MemoExample from "./Examples/useMemo";
import UseRefExample from "./Examples/useRef";
import UseEffectExample from "./Examples/useEffect";

function App() {
  return (
    <div className="App">
      <StateExample />
      <MemoExample />
      <UseRefExample />
      <UseEffectExample/>
    </div>
  );
}

export default App;
