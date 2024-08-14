import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import './main.css';
import App from './App.jsx';
import ErrorPage from './pages/Error.jsx';
import DiscoverPage from './pages/Discover.jsx';
import BrowsePage from './pages/Browse.jsx';
import CollectionPage from './pages/Collection.jsx';
import GamePage from './pages/Game.jsx';
import ProfilePage from './pages/Profile.jsx';
import WishlistPage from './pages/Wishlist.jsx';
import CartPage from './pages/Cart.jsx';
import CheckoutPage from './pages/Checkout.jsx';


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                errorElement: <ErrorPage />,
                children: [
                    {
                        index: true,
                        element: <DiscoverPage />
                    },
                    {
                        path: "browse",
                        element: <BrowsePage />,
                    },
                    {
                        path: "collection/:title",
                        element: <CollectionPage />,
                    },
                    {
                        path: "game/:gameId",
                        element: <GamePage />
                    },
                    {
                        path: "cart",
                        element: <CartPage />
                    },
                    {
                        path: "wishlist",
                        element: <WishlistPage />
                    },
                ]
            }
        ]
    },
    {
        path: "/profile",
        element: <ProfilePage />,
        errorElement: <ErrorPage />,
        children: [
            {
                errorElement: <ErrorPage />,
                children: [
                    // TO DO
                ]
            }
        ]
    },
    {
        path: "/checkout",
        element: <CheckoutPage />,
        errorElement: <ErrorPage />,
    },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
