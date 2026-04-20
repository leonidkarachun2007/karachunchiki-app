import './App.css';

import MainPage from './components/MainPage/MainPage';
import Myheader from './components/Myheader/Myheader';
import ProfilePage from "./components/ProfilePage/ProfilePage";

function App() {
  return (
    <div className="App">
      <Myheader/>
      <MainPage/>
      {/* <ProfilePage/> */}
    </div>
  );
}

export default App;
