import React, {FC, useContext} from 'react';
import {AppBar, Button, Toolbar} from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2'
import {NavLink} from "react-router-dom";
import {ROUTE_LOGIN} from "../utils/consts";
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";

const Navbar: FC = () => {
    // @ts-ignore
    const { auth } = useContext(Context);
    // @ts-ignore
    const [user] = useAuthState(auth);

    return (
        <AppBar position="static">
            <Toolbar>
                <Grid container spacing={2} justifyContent="flex-end" width="100%">
                    {user ?
                        <Grid>
                            <Button onClick={() => auth.signOut()} variant="contained">Logout</Button>
                        </Grid>
                        :
                        <NavLink to={ROUTE_LOGIN}>
                            <Grid>
                                <Button variant="contained">Login</Button>
                            </Grid>
                        </NavLink>
                    }
                </Grid>
            </Toolbar>
        </AppBar>
    )
};

export default Navbar;
