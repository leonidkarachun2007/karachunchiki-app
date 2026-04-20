import './App.css';

import Myfooter from './components/Myfooter/Myfooter';
import MainPage from './components/MainPage/MainPage';
import Myheader from './components/Myheader/Myheader';
import ProfilePage from "./components/ProfilePage/ProfilePage";

function App() {
  return (
    <div className="App">
      <Myheader/>
      <MainPage/>
      <Myfooter/>
      {/* <ProfilePage/> */}
    </div>
  );
}

export default App;
