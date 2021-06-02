import "./App.css";

import { PhotoContextProviderWrapper } from "./context/PhotoContext";
import { ClockContextProviderWrapper } from "./context/ClockContext";

import Nav from "./component/nav/Nav";
import Clock from "./component/clock/Clock";
import Gallery from "./container/gallery/Gallery";
import RedCarpet from "./component/gallery-image/RedCarpet";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Clock />
      <PhotoContextProviderWrapper>
        <Gallery />
      </PhotoContextProviderWrapper>
      <RedCarpet />
    </div>
  );
};

export default App;
