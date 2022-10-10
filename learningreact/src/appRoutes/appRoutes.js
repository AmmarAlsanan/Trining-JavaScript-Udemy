import { Route, Routes } from 'react-router-dom';
import { PageUrl } from './appSpaceName';
import { GreenPage } from '../ui/components';
import { Switch } from 'react-route';
import { Todo } from '../ui/todo/todoActions';
import App from '../App';

export const AppRoutes = () => {
  return (
    <Switch>
      <Routes>
        <Route path={'/'} element={<App />} />
        <Route path={PageUrl.HomePage} element={<Todo />} />
        <Route path={PageUrl.greenPage} element={<GreenPage />} />
      </Routes>
    </Switch>
  );
};
