import MainContainer from "./components/MainContainer";
import ValueProvider from "./contexts/ValueContext";

function App() {
  return (
    <div className="flex justify-center items-center bg-[#f2f2f2] h-screen">
      <ValueProvider>
        <MainContainer />
      </ValueProvider>
    </div>
  );
}

export default App;
