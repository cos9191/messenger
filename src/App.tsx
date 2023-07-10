import React, {useContext} from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import Navbar from "./components/Navbar";
import AppRouter from "./components/AppRouter";
import {Context} from "./index";
import {useAuthState} from "react-firebase-hooks/auth";
import Loader from "./components/loader";

function App() {
    // @ts-ignore
    const { auth } = useContext(Context);
    // @ts-ignore
    const [user, loading, error] = useAuthState(auth);

    if (loading) {
        return (
            <BrowserRouter>
                <Navbar/>
                <Loader/>
            </BrowserRouter>
        )
    }

    return (
        <BrowserRouter>
            <Navbar/>
            <AppRouter/>
        </BrowserRouter>
    );
}

export default App;
