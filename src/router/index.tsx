import { useRoutes } from 'react-router-dom';
import RouterBase from './RouterBase';

function RouterView(){
    const element = useRoutes(RouterBase);
    return (<>{element}</>)
};

export default RouterView;