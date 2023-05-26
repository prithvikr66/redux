import "./styles/styles.scss"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Header from "./components/Header"
import Home from "./components/Home"
import {Toaster} from "react-hot-toast"
import Cart from "./components/Cart"
import {Provider} from "react-redux"
import store from './redux/store';


function App() {
  return (
    <>
    <Provider store={store}>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
      </Routes>
      <Toaster/>
    </BrowserRouter>
    </Provider>


    </>
  );
}

export default App;
