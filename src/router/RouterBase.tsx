import Admin from "../views/admin/Admin";
import Login from "../views/login/Login";

const RouterBase = [
    {path: '/', element: <Admin/>},
    {path: '/login', element: <Login/>},
]

export default RouterBase;