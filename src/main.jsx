import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import './main.css';
import App from './App.jsx';
import ErrorPage from './pages/Error.jsx';
import HomePage from './pages/Home.jsx';
import BrowsePage from './pages/Browse.jsx';
import GamePage from './pages/Game.jsx';
import UserPage from './pages/User.jsx';
import WishlistPage from './pages/Wishlist.jsx';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: "browse",
                element: <BrowsePage />
            },
            {
                path: "game/:gameId",
                element: <GamePage />
            },
            {
                path: "account",
                element: <UserPage />,
            },
            {
                path: "account/wishlist",
                element: <WishlistPage />,
            },
        ]
    },
    
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
