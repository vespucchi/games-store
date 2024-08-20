import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import './main.css';
import App from './App.jsx';
import { loader as AppLoader } from './pages/loaders-actions/App.loader-action';
import ErrorPage from './pages/Error.jsx';
import DiscoverPage from './pages/Discover.jsx';
import BrowsePage from './pages/Browse.jsx';
import CollectionPage from './pages/Collection.jsx';
import { loader as CollectionLoader } from './pages/loaders-actions/Collection.loader-action';
import GamePage from './pages/Game.jsx';
import { loader as GameLoader, action as GameAction } from './pages/loaders-actions/Game.loader-action';
import ProfilePage from './pages/Profile.jsx';
import WishlistPage from './pages/Wishlist.jsx';
import { loader as WishlistLoader, action as WishlistAction } from './pages/loaders-actions/Wishlist.loader-action';
import CartPage from './pages/Cart.jsx';
import { loader as CartLoader, action as CartAction } from './pages/loaders-actions/Cart.loader-action';
import CheckoutPage from './pages/Checkout.jsx';


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        loader: AppLoader,
        id: "root",
        errorElement: <ErrorPage />,
        children: [
            {
                errorElement: <ErrorPage />,
                children: [
                    {
                        index: true,
                        element: <DiscoverPage />,
                    },
                    {
                        path: "browse",
                        element: <BrowsePage />,
                    },
                    {
                        path: "browse/collection/:collectionTitle",
                        element: <CollectionPage />,
                        loader: CollectionLoader,
                    },
                    {
                        path: "game/:gameTitle",
                        element: <GamePage />,
                        loader: GameLoader,
                        action: GameAction,
                    },
                    {
                        path: "cart",
                        element: <CartPage />,
                        loader: CartLoader,
                        action: CartAction
                    },
                    {
                        path: "wishlist",
                        element: <WishlistPage />,
                        loader: WishlistLoader,
                        action: WishlistAction
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
