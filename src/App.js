import ArrowFunctionalComponent from "./Components/ArrowFunctionalComponent/ArrowFuctionalComponent"
import FunctionalComponent from './Components/FunctionalComponent/FunctionalComponent'
import ClassComponent from "./Components/ClassComponent/ClassComponent";

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <ArrowFunctionalComponent />
      <FunctionalComponent />
      <ClassComponent />
    </div>
  );
}

export default App;
