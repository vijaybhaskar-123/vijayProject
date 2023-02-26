import './App.css';
import Header from './Components/Header/Header';
import FourthSLide from './Components/Slide-Four/FourthSLide';
import FirstSlide from './Components/Slide-One/FirstSlide';
import ThirdSlide from './Components/Slide-Three/ThirdSlide';
import SecondSlide from './Components/Slide-Two/SecondSlide';


function App() {
  return (
    <>
      <div className="site-control">
        <Header />
        <FirstSlide />
      </div> 
      <div className="site-control">
        <Header />
        <SecondSlide />
      </div>
      <div className="site-control">
        <Header />
        <ThirdSlide />
      </div>
      <div className="site-control">
        <Header />
        <FourthSLide />
      </div>
      
    </>
  );
}

export default App;
