import './styles/globals.css';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';

// Pages
import ErrorPage from './pages/ErrorPage';
// import RegistrationPage from './pages/RegistrationPage';
// import LoginPage from './pages/LoginPage';
import Root from './pages/Root';
import EmailSecurity from './components/emailSecurity/EmailSecurity';

// Loaders
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      // {
      //   path: '', // Landing page
      //   element: <Landing />,
      // },
      // {
      //   path: 'login',
      //   element: <Login />,
      // },
      // {
      //   path: 'registration',
      //   element: <Registration />,
      // },
      {
        path: 'email-security',
        element: <EmailSecurity />,
      },
      // {
      //   path: 'email-security',
      //   element: <Registration />,
      // },
    ]
  },
  
  {
    path: '*', 
    element: <ErrorPage />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);