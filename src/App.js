import { BrowserRouter } from 'react-router-dom';
import FaqS from './Components/Accordian/FaqS';
import Slider2 from './Components/cursor2/Slider2';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Freedom from './Components/Section1/Freedom';
import FillFrom from './Components/Section2/FillFrom';
import Reward from './Components/Section3/Reward';
import CardStyle from './Components/Section4/CardStyle';
import Bestchoice from './Components/Section5/Bestchoice';
function App() {
  
  return (
    <BrowserRouter>
      <Navbar/>
      <Header/>
      <Freedom/>
      <FillFrom/>
      <Reward/>
      <CardStyle/> 
      <Bestchoice/>
      <FaqS/>
      <Footer/>
     
    </BrowserRouter>
  );
}

export default App;
