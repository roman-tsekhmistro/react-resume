import BiographyPage from '../pages/BiographyPage';
import AboutMe from '../pages/AboutMe';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import PrivateLayout from '../components/layout/PrivateLayout';
import Skills from '../pages/Skills';

export default function Router() {
  return (
      <BrowserRouter>
        <Routes>
          <Route
              path="/"
              element={<PrivateLayout><BiographyPage/></PrivateLayout>}
          />
          <Route
              path="/about"
              element={<PrivateLayout><AboutMe/></PrivateLayout>}
          />
          <Route
              path="/skills"
              element={<PrivateLayout><Skills/></PrivateLayout>}
          />
        </Routes>
      </BrowserRouter>
  );
}