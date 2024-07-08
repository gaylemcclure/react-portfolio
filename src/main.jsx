
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
//Import CSS
import './styles/index.css'
//Import pages to use in router
import App from './App.jsx';
import HomePage from './pages/homePage.jsx';
import AboutPage from './pages/aboutPage.jsx';
import ContactPage from './pages/contactPage.jsx';
import PortfolioPage from './pages/portfolioPage.jsx';
import ResumePage from './pages/resumePage.jsx';
import ErrorPage from './pages/errorPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'portfolio',
        element: <PortfolioPage />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },
      {
        path: 'resume',
        element: <ResumePage />,
      },
    ],
  },
]);

// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
