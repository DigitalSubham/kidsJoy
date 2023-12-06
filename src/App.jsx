import Games from "./kidsJoyComponent/Games";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Cards from "./memoryCardGameComponents/Cards";
import Navbar from "./kidsJoyComponent/Navbar";
import Footer from "./kidsJoyComponent/Footer";

function App() {
  return (
    <div className="">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Games />,
      },
      {
        path: "/fungames/memoryCard",
        element: <Cards />,
      },
    ],
  },
]);

export default AppRouter;
