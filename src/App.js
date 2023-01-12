import {Routes , Route , HashRouter} from 'react-router-dom'
// import Home from './Components/HomePage/Home'
import MainPage from './Components/HomePage/MainPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Header from './Components/HomePage/Header';
const App = () => {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path='/' element={<MainPage />} exact/>
      </Routes>
    </HashRouter>
  );
}

export default App;
