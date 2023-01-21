import MainContainer from "./components/MainContainer";
import ValueProvider from "./contexts/ValueContext";

function App() {
  return (
    <div className="App">
      <ValueProvider>
        <MainContainer />
      </ValueProvider>
    </div>
  );
}

export default App;
