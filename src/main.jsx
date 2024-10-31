import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Default from './Components/Default/Default.jsx'
import About from './Components/About/About.jsx'
import Contacts from './Components/Contacts/Contacts.jsx'
import Users from './Components/Users/Users.jsx'
import UserDetails from './Components/UserDetails/UserDetails.jsx'

const router = createBrowserRouter([
{
  path:'/',
  element:<Default></Default>,
  children:[
    {
      path:'/about',
      element:<About></About>
    },
    {
      path:'/contacts',
      element:<Contacts></Contacts>
    },
    {
      path:'/users',
      loader:() => fetch('https://jsonplaceholder.typicode.com/users') ,
      element:<Users></Users>
    },
    {
      path:'/user/:userId',
      loader:({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
      element:<UserDetails></UserDetails>
    }
  ]
}
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
