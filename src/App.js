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
import SignUp from './components/SignUp/SignUp';


// function Pay() {
//   // Состояние: false — закрыто, true — открыто
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   return (
//     <div className="Pay">
//       {/* Показываем страницу корзины и передаем ей функцию открытия */}
//       <MyCart onOpenPayment={() => setIsModalOpen(true)} />

//       {/* Если isModalOpen истинно, рисуем форму оплаты поверх всего */}
//       {isModalOpen && <PaymentForm onClose={() => setIsModalOpen(false)} />}
//     </div>
//   );
// }

function App() {
  return (
    <div className="App">
       {/* <Myheader/> */}
      <MyCart/>
      {/* <MyWishlist/> */}
      {/* <Registration/> */}
      {/* <Myheader/> */}
      {/* <MainPage/> */}
      {/* <Myfooter/>  */}
      {/* <SignUp/> */}
      {/* <ProfilePage/> */}
      {/* <Myheader /> */}
      {/* <MainPage /> */}
      {/* <ProfilePage /> */}
      {/* <Support /> */}
      {/* <MyCart /> */}
      {/* <MyWishlist /> */}
      {/* <Achievement /> */}
      {/* <GameWindow/> */}
      {/* <Myfooter /> */}
    </div>
  );
}

export default App;
