import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { LayoutStyled } from './Layout.styled';
import { AppBar } from '../AppBar/AppBar';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <LayoutStyled>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="bottom-right" reverseOrder={false} />
    </LayoutStyled>
  );
};
