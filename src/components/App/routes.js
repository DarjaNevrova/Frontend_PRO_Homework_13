import HomePage from "../../pages/HomePage";
import UsersPage from "../../pages/UsersPage";

export const routes = [
    { key: 1, path: "/", element: <HomePage /> },
    { key: 2, path: "/users", element: <UsersPage /> }
];

export default routes;