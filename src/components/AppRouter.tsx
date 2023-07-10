import React, {FC, useContext} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../routes";
import {ROUTE_CHAT, ROUTE_LOGIN} from "../utils/consts";
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";
const AppRouter: FC = () => {
    // @ts-ignore
    const { auth } = useContext(Context);
    // @ts-ignore
    const [user] = useAuthState(auth);

    return user ? (
            <Routes>
                {privateRoutes.map(({path, Element}) =>
                    <Route
                        key={path}
                        element={<Element />}
                        path={path}
                    />
                )}
                <Route path='/' element={<Navigate to='/posts'/>}/>
                <Route path='' element={<Navigate to={ROUTE_CHAT}/>}/>
                <Route path='*' element={<Navigate to={ROUTE_CHAT}/>}/>
            </Routes>
        ) : (
            <Routes>
                {publicRoutes.map(({path, Element}) =>
                    <Route
                        key={path}
                        element={<Element />}
                        path={path}
                    />
                )}
                <Route path='/' element={<Navigate to='/posts'/>}/>
                <Route path='' element={<Navigate to={ROUTE_LOGIN}/>}/>
                <Route path='*' element={<Navigate to={ROUTE_LOGIN}/>}/>
            </Routes>
        )
};
export default AppRouter;
