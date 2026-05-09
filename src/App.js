import './App.css';

import MyCart from './components/MyCart/MyCart';
import Myfooter from './components/Myfooter/Myfooter';
import MainPage from './components/MainPage/MainPage';
import Myheader from './components/Myheader/Myheader';
import ProfilePage from "./components/ProfilePage/ProfilePage";
import Support from './components/Support/Support';
import MyWishlist from './components/MyWishlist/MyWishlist';
import Registration from './components/Registration/Registration';
import Achievement from './components/Achievement/Achievement';
import GameWindow from './components/GameWindow/GameWindow';
import News from './components/News/News';

function App() {
  return (
    <div className="App">
       {/* <Myheader/> */}
      {/* <MyCart/> */}
      {/* <MyWishlist/> */}
      {/* <Registration/> */}
      {/* <Myheader/>
      <MainPage/> */}
      {/* <Myfooter/>  */}

      {/* <ProfilePage/> */}
      <Myheader />
      {/* <ProfilePage /> */}
      {/* <Support /> */}
      {/* <MyCart /> */}
      <MainPage/>
      {/* <News/> */}
      {/* <Achievement /> */}
      {/* <GameWindow/> */}
      <Myfooter />
    </div>
  );
}

export default App;
