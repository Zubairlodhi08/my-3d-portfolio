import { LoadingProvider } from "./context/LoadingContext";
import LoadingScreen from "./components/LoadingScreen";
import CustomCursor from "./components/CustomCursor";
import MainContainer from "./components/MainContainer";
import "./App.css";

function App() {
  return (
    <LoadingProvider>
      <div className="app">
        <LoadingScreen />
        <CustomCursor />
        <MainContainer />
      </div>
    </LoadingProvider>
  );
}

export default App;
