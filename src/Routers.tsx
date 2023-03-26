import { Route, Routes } from 'react-router-dom';
import { DefaultLayout } from './layouts/DefaultLayout';
import { Home } from './pages/Home';
import { PostDetails } from './pages/PostDetails';
import { UserDetails } from './pages/UserDetails';
import { Users } from './pages/Users';

export const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='post/:id' element={<PostDetails />} />
        <Route path='/users' element={<Users />} />
        <Route path='/user/:id' element={<UserDetails />} />
      </Route>
    </Routes>
  );
};
