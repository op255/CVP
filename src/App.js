import './styles/App.scss';

import Heading from "./components/Heading";
import TopCards from "./components/TopCards";
import AOS from "./components/AOS";


function App() {
  return (
    <div className="App">
        <AOS />
        <TopCards />
        <Heading />
    </div>
  );
}

export default App;
