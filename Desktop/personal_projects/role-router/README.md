# Public, private, and role-based routes in React

The idea is simply prevent the app to generate unnecessary routes, rather checking the role on each route and
showing fallback UI it would be a great idea to generate only the routes in which user have access,
so if the user navigate manually to a route ie: (typing in the address bar)
he/she will get 404 Not Found screen because route is not registered.

```
File: src/config/Rolesexport default {
SUPER_ADMIN: 'SUPER_ADMIN',
ADMIN: 'ADMIN',
MANAGER: 'MANAGER',
CUSTOMER: 'CUSTOMER',
GUEST: 'GUEST'
};
```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
