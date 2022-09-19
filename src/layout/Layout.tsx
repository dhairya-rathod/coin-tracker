import { Outlet } from 'react-router-dom';
import Header from './Header';

const Layout = () => {
  return (
    <>
      <Header />
      <main className="h-full flex flex-col py-6 px-20 bg-gradient-to-t from-gray-900 to-neutral-800">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
