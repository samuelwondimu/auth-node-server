import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import DashboardLayout from "./components/mainLayout/dashboardLayout";
import { EditorJs } from "./components/blogEditor";
import {
  BlogPage,
  CategoriesPage,
  DashboardPage,
  CompaniesPage,
  UsersPage,
  LoginPage,
} from "./pages";

const App: React.FC = () => {
  const loggedIn = true;

  if (loggedIn) {
    <Redirect to="/" />;
  }

  if (!loggedIn) {
    return (
      <BrowserRouter>
        <Route>
          <Switch>
            <Route exact path="/" component={LoginPage} />
          </Switch>
        </Route>
      </BrowserRouter>
    );
  }

  return (
    <BrowserRouter>
      <Route>
        <DashboardLayout>
          <Switch>
            <Route exact path="/" component={DashboardPage} />
            <Route exact path="/app/companies" component={CompaniesPage} />
            <Route exact path="/app/users" component={UsersPage} />
            <Route exact path="/app/blog-editor" component={EditorJs} />
            <Route exact path="/app/blogs" component={BlogPage} />
            <Route exact path="/app/categories" component={CategoriesPage} />
          </Switch>
        </DashboardLayout>
      </Route>
    </BrowserRouter>
  );
};

export default App;
