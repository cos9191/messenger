import React, {FC, useContext} from 'react';
import {Box, Button, Container} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import {Context} from "../index";
import firebase from "firebase/compat/app";
import Loader from "./loader";
const Login: FC = () => {
    const contextValue = useContext(Context);

    if (contextValue === null) {
        return <div>Loading...</div>;
    }

    const { auth } = contextValue;

    const login = async () => {
        try {
            const provider = new firebase.auth.GoogleAuthProvider();
            const userData = await auth.signInWithPopup(provider);
            const user = userData.user;
        } catch (error) {
            alert(error);
        }
    };

    return (
        <Container>
            <Grid container
                  spacing={2}
                  alignItems="center"
                  justifyContent="center"
                  width="100%"
                  height="100%"
                  style={{height: "calc(100vh - 64px)"}}
            >
                <Box p={5}>
                    <Button onClick={login} variant="contained">Login with Google</Button>
                </Box>
            </Grid>
        </Container>
    )
};

export default Login;
