import NxWelcome from './nx-welcome';
import { Products } from '@react-monorepo2/products';
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  NavLink,
} from 'react-router-dom';

export function Home({ title, path }: { title: string; path?: string }) {
  if (!path) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <NavLink
        to={`/${path}`}
        className={({ isActive, isPending }) =>
          isPending ? 'pending' : isActive ? 'active' : ''
        }
      >
        {path}
      </NavLink>
      <NxWelcome title={title} />
    </div>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home title="react-monorepo" path="home" />} />
        <Route
          path="/home"
          element={<Home title="store1" path="products" />}
        ></Route>
        <Route path="/products" element={<Products />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
