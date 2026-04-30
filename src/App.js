import './App.css';

import MyCart from './components/MyCart/MyCart';
import Myfooter from './components/Myfooter/Myfooter';
import MainPage from './components/MainPage/MainPage';
import Myheader from './components/Myheader/Myheader';
import ProfilePage from "./components/ProfilePage/ProfilePage";
import MyWishlist from './components/MyWishlist/MyWishlist';
import Registration from './components/Registration/Registration';

function App() {
  return (
    <div className="App">
       {/* <Myheader/> */}
      {/* <MyCart/> */}
      {/* <MyWishlist/> */}
      <Registration/>
      {/* <Myheader/>
      <MainPage/> */}
      {/* <Myfooter/>  */}

      {/* <ProfilePage/> */}
    </div>
  );
}

export default App;
