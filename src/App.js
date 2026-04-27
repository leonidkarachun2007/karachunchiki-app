import './App.css';

import MyCart from './components/MyCart/MyCart';
import Myfooter from './components/Myfooter/Myfooter';
import MainPage from './components/MainPage/MainPage';
import Myheader from './components/Myheader/Myheader';
import ProfilePage from "./components/ProfilePage/ProfilePage";
import Support from './components/Support/Support';
import MyWishlist from './components/MyWishlist/MyWishlist';

function App() {
  return (
    <div className="App">
      <Myheader />
      <MainPage />
      <Myfooter />
    </div>
  );
}

export default App;
