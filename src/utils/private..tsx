import { FC, ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
interface Iprops{
    children?: ReactNode;
}
const Private:FC<Iprops> = (props) => {
    let token = sessionStorage.getItem('token');
    const location = useLocation();

    if(token){
        return <>{props.children}</>
    }else{
        return <Navigate to={'/?redirect'+location.pathname}></Navigate>
    }
}

export default Private;