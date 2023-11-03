import "./styles/globals.css";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages
import ErrorPage from "./pages/ErrorPage";
// import RegistrationPage from './pages/RegistrationPage';
// import LoginPage from './pages/LoginPage';
import Root from "./pages/Root";
import EmailSecurity from "./components/emailSecurity/EmailSecurity";
import NetworkSecurity from "./components/networkSecurity/NetworkSecurity";
import RequestResetPasswordForm from "./components/resetPassword/RequestResetPasswordForm";
import UrlSecurity from "./components/urlSecurity/UrlSecurity";
import Login from "./components/login/login";
import Landing from "./components/landing/Landing";
import Contact from "./components/contact/Contact";
import FileSecurity from "./components/fileSecurity/fileSecurity";

// Loaders
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "", // Landing page
        element: <Landing />,
      },
      {
        path: "landing",
        element: <Landing />,
      },
      {
        path: "login",
        element: <Login />,
      },
      // {
      //   path: 'registration',
      //   element: <Registration />,
      // },
      {
        path: "file-security",
        element: <FileSecurity />,
      },
      {
        path: "email-security",
        element: <EmailSecurity />,
      },
      {
        path: "url-security",
        element: <UrlSecurity />,
      },
      {
        path: "contact-us",
        element: <Contact />,
      },
      {
        path: "network-security",
        element: <NetworkSecurity />,
      },
      {
        path: "request-reset-password",
        element: <RequestResetPasswordForm />,
      },
    ],
  },

  {
    path: "*",
    element: <ErrorPage />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
