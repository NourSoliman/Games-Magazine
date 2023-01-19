import {Routes , Route , HashRouter} from 'react-router-dom'
// import Home from './Components/HomePage/Home'
import MainPage from './Components/HomePage/MainPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Header from './Components/HomePage/Header';
import MainMmo from './Components/NavBar-links/MainMmo/MainMmo';
import MainRPG from './Components/NavBar-links/MainRpg/MainRPG';
import FpsMain from './Components/NavBar-links/Fps/FpsMain';
import FirstFooter from './Components/HomePage/FirstFooter';
import FooterInfo from './Components/HomePage/FooterInfo';
import Editions from './Components/HomePage/Editions';
import MmoPage from './Components/Pages/MmoPage/MmoPage';
import FPSPage from './Components/Pages/FPSGames/FPSPage';
import RpgPage from './Components/Pages/RpgGames/RpgPage';
import BackToTop from './Components/HomePage/BackToTop';
const App = () => {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path='/' element={<MainPage />} exact/>
        <Route path='MMORPG' element={<MainMmo />}/>
        <Route path='RPG' element={<MainRPG />} />
        <Route path='FPS' element={<FpsMain />} />
        <Route path='mmo' element={<MmoPage />} />
        <Route path='shooters' element={<FPSPage />} />
        <Route path='RolePG' element={<RpgPage />} />
      </Routes>
      <FirstFooter />
      <Editions />
      <FooterInfo />
      <BackToTop />
    </HashRouter>
  );
}

export default App;
