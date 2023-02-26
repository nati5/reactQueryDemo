import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './pages/root';

const Routing = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/root',
      element: <Root />,
    },
    {
      path: '/about',
      element: <About />,
    },
    {
      path: '/contact',
      element: <Contact />,
    },
  ]);
  return <RouterProvider router={router} />;
};
function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Contact() {
  return <h2>Contact</h2>;
}

export default Routing;
