import { Outlet } from 'react-router-dom';
import Header from './Header';

const Layout = () => {
  return (
    <>
      <Header />
      <main className="h-full flex flex-col p-6 bg-zinc-700">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
