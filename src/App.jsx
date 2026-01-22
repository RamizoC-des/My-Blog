import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';

// Pages
import Home from './blog pages/Home';
import About from './blog pages/About';
import Contact, {contactAction} from './blog pages/Contact';
import BlogPost from './blog pages/BlogPost';
import BlogList from './blog pages/BlogList';

// Layouts
import RootLayout from './layouts/RootLayout';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} action={contactAction} />
      <Route path="blogPost" element={<BlogPost />} />
      <Route path="blogList" element={<BlogList />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
