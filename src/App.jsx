import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Home from './ui/Home';
import Error from './ui/Error';
import Menu, { loader as menuLoader } from './features/menu/Menu';
import Cart from './features/cart/Cart';
import CreateOrder, {
  action as createOrderAction,
} from './features/order/CreateOrder';
import Order, { loader as orderLoader } from './features/order/Order';
import AppLayout from './ui/AppLayout';
import { action as updateOrderAction } from './features/order/UpdateOrderFunc';

import ProtectedWeb from './ProtectedWeb';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/menu',
        element: (
          <ProtectedWeb>
            <Menu />
          </ProtectedWeb>
        ),
        loader: menuLoader,
        errorElement: <Error />,
      },

      {
        path: '/cart',
        element: (
          <ProtectedWeb>
            <Cart />
          </ProtectedWeb>
        ),
      },
      {
        path: '/order/new',
        element: (
          <ProtectedWeb>
            <CreateOrder />
          </ProtectedWeb>
        ),
        action: createOrderAction,
      },
      {
        path: '/order/:orderId',
        element: (
          <ProtectedWeb>
            <Order />
          </ProtectedWeb>
        ),
        loader: orderLoader,
        errorElement: <Error />,
        action: updateOrderAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
