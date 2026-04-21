import './App.css';
import MyCart from './components/MyCart/MyCart';

import Myfooter from './components/Myfooter/Myfooter';
import MainPage from './components/MainPage/MainPage';
import Myheader from './components/Myheader/Myheader';
import ProfilePage from "./components/ProfilePage/ProfilePage";

function App() {
  return (
    <div className="App">
      <MyCart/>
      <Myheader/>
      <MainPage/>
      <Myfooter/>
      {/* <ProfilePage/> */}
    </div>
  );
}

export default App;
