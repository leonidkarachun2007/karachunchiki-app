import './App.css';

import MainPage from './components/MainPage/MainPage';
import Myheader from './components/Myheader/Myheader';
import ProfilePage from "./components/ProfilePage/ProfilePage";
import Support from './components/Support/Support';

function App() {
  return (
    <div className="App">
      <Myheader/>
      {/* <MainPage/> */}
      <ProfilePage/>
      {/* <Support/> */}
    </div>
  );
}

export default App;
