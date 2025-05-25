import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayout from './Layout/MainLayout.jsx';
import Home from './Components/Home.jsx';
import AddCoffee from './Components/AddCoffee.jsx';
import UpdateCoffee from './Components/UpdateCoffee.jsx';
import CoffeeDetails from './Components/CoffeeDetails.jsx';
import SignIn from './Components/SignIn.jsx';
import SignUp from './Components/SignUp.jsx';
import AuthProvider from './Context/AuthProvider.jsx';
import Users from './Components/Users.jsx';

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Users2 from './Components/Users2.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch('http://localhost:3000/coffees')
      },
      {
        path: 'addCoffee',
        Component: AddCoffee
      },
      {
        path: 'coffee/:id',
        Component: CoffeeDetails

      },
      {
        path: 'updateCoffee/:id',
        loader: ({ params }) => fetch(`http://localhost:3000/coffees/${params.id}`),
        Component: UpdateCoffee
      },
      {
        path: 'signin',
        Component: SignIn
      },
      {
        path: 'signup',
        Component: SignUp
      },
      {
        path: 'users',
        Component: Users,
        loader: () => fetch('http://localhost:3000/users')
      },
      {
        path: 'users2',
        Component: Users2,
      }
    ]
  },
]);

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
       <QueryClientProvider client={queryClient}>
       <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    </QueryClientProvider>
   

  </StrictMode>,
)
