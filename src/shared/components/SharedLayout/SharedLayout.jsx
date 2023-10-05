import { Outlet } from 'react-router-dom';
import { Header } from '@/modules/header';
import { Suspense } from 'react';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default SharedLayout;
