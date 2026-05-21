import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

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
import SignUp from './components/SignUp/SignUp';
import PaymentWindow from './components/PaymentWindow/PaymentWindow';

function App() {
  return (

    //     <div className="App">

    //       <PaymentWindow/>

    // </div>
    <BrowserRouter>
      <div className="App">
        
        <Myheader />
        <main className="pageContent">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/support" element={<Support />} />
            <Route path="/news" element={<News />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/wishlist" element={<MyWishlist />} />
            <Route path="/cart" element={<MyCart />} />
            <Route path="/login" element={<Registration />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/achievements" element={<Achievement />} />
            <Route path="/game" element={<GameWindow />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Myfooter />
      </div>
    </BrowserRouter>
  );
}

export default App;
