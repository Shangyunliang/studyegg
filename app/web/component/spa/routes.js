import HomePage from 'component/spa/components/homePage';
import SelectSeatPage from 'component/spa/components/selectSeatPage';

const NotFound = () => {
  return (
    <Route render={({ staticContext }) => {
      if (staticContext) {
        staticContext.status = 404;
      }
      return (
        <div>
          <h1>404 : Not Found</h1>
        </div>
      );
    }}/>
  );
};

const routes = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/onlineticket',
    component: SelectSeatPage
  },
  {
    path: '*',
    component: NotFound
  }
];

export default routes;
