import Games from "./kidsJoyComponent/Games";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Navbar from "./kidsJoyComponent/Navbar";
import Footer from "./kidsJoyComponent/Footer";
import { lazy, Suspense } from "react";
const TicTacToe = lazy(() => import("./tictactoeGameComponents/Board"));
const MemoryCardGame = lazy(() => import("./memoryCardGameComponents/Cards"));

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
        element: (
          <Suspense>
            <MemoryCardGame />
          </Suspense>
        ),
      },
      {
        path: "/fungames/ticTacToe",
        element: (
          <Suspense>
            <TicTacToe />
          </Suspense>
        ),
      },
    ],
  },
]);

export default AppRouter;
