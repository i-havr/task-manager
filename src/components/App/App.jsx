import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from '../Layout/Layout';
import { refreshUser } from 'redux/auth/auth-operations';
import { useAuth } from 'hooks';
import { PrivateRoute } from 'components/AuthRoutes/PrivateRoute';
import { RestrictedRoute } from 'components/AuthRoutes/RestrictedRoute';

const HomePage = lazy(() => import('../../pages/Home/Home'));
const RegisterPage = lazy(() => import('../../pages/Register/Register'));
const LoginPage = lazy(() => import('../../pages/Login/Login'));
const TasksPage = lazy(() => import('../../pages/Tasks/Tasks'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    'Refreshing user...'
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute component={RegisterPage} redirectTo="/tasks" />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute component={LoginPage} redirectTo="/tasks" />
          }
        />
        <Route
          path="/tasks"
          element={<PrivateRoute redirectTo="/login" component={TasksPage} />}
        />
      </Route>
    </Routes>
  );
};
