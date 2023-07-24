import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';

// render - dashboard
const GMScreen = Loadable(lazy(() => import('pages/gmscreen')));

// render -  rulebooks
const Core = Loadable(lazy(() => import('pages/books/Core')));
const Guide = Loadable(lazy(() => import('pages/books/Guide')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <GMScreen />
    },
    {
      path: 'core',
      element: <Core />
    },
    {
      path: 'guide',
      element: <Guide />
    },
    {
      path: 'gmscreen',
      element: <GMScreen />
    }
  ]
};

export default MainRoutes;
