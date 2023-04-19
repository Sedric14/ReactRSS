import About from './pages/about';
import Home from './pages/home';
import NotFound from './pages/notFound';
import FormPage from './pages/formsPage';

export interface RouteSchema {
  key: string;
  path: string;
  component: React.ComponentClass | React.FunctionComponent;
}

export const ROUTES: RouteSchema[] = [
  {
    key: 'forms',
    path: '/forms',
    component: FormPage,
  },
  {
    key: 'about',
    path: '/about',
    component: About,
  },
  {
    key: 'home',
    path: '/',
    component: Home,
  },
  {
    key: 'notfound',
    path: '*',
    component: NotFound,
  },
];
