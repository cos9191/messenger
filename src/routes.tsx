import {ROUTE_CHAT, ROUTE_LOGIN} from "./utils/consts";
import Login from "./components/Login";
import Chat from "./components/Chat";

export const publicRoutes = [
    {
        path: ROUTE_LOGIN,
        Element: Login,
    },
]

export const privateRoutes = [
    {
        path: ROUTE_CHAT,
        Element: Chat,
    },
]
