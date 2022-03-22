import ArrowFunctionalComponent from "./Components/ArrowFunctionalComponent/ArrowFuctionalComponent"
import FunctionalComponent from './Components/FunctionalComponent/FunctionalComponent'
import ClassComponent from "./Components/ClassComponent/ClassComponent";
import ArrowFunctionalComponentWithProps from "./Components/ArrowFunctionalComponentWithProps/ArrowFunctionalComponentWithProps"
import ClassComponentWithProps from "./Components/ClassComponentWithProps/ClassComponentWithProps";

// Example 1
function App() {
  return (
    <div className="App">
      <h1>Hello World from App</h1>
    </div>
  );
}

// // Example 2
// function App() {
//   return (
//     <div className="App">
//       <h1>Hello World from App</h1>
//       <ArrowFunctionalComponent />
//       <FunctionalComponent />
//       <ClassComponent />
//     </div>
//   );
// }

// // Example 3
// const App = () => {
//    return (
//     <div className="App">
//       <h1>Hello World From App</h1>
//       <ArrowFunctionalComponentWithProps name="Dhoni" age="30"/>
//       <ClassComponentWithProps name="John" age="15"/>
//     </div>
//    )
// }

export default App;
