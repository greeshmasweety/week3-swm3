
import Home from "./screens/Home";
import Chat from "./screens/Chat"
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Loading from "./screens/Loading";
import Chatlist from "./screens/Chatlist";
import NotFound from "./screens/Notfound";
import Navbar from "./components/Navbar"
import Location from "./screens/Location"
import Marketplace from "./screens/Marketplace"
import Cards from "./components/Cards"
import Profile from "./screens/Profile"




import { RouterProvider, createBrowserRouter } from "react-router-dom";

export default function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Loading/>, },
    { path: "*", element: <NotFound/>, },
    { path: "/home", element: <Home/>, },
    { path: "/chat", element: <Chat/>, },
    { path: "/login", element: <Login/>, },
    { path: "/signup", element: <Signup/>, },
    { path: "/chatlist", element: <Chatlist/>, },
    { path: "/location", element: <Location/>, },
    { path: "/cards", element: <Cards/>, },
    { path: "/navbar", element: <Navbar/>, },
    { path: "/marketplace", element: <Marketplace/>, },
    { path: "/profile", element: <Profile/>, },

  
  ]);

  return <RouterProvider router={router} />
}