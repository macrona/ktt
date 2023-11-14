import Admin from "../views/admin/Admin";
import Login from "../views/login/Login";

const RouterBase = [
    {path: '/', element: <Login/>},
    {path: '/admin/*', element: <Admin/>},
]

export default RouterBase;