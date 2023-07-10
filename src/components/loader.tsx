import React, {FC} from 'react';
import {Container} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";


const Loader: FC = () => {
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
                <div className="lds-dual-ring"></div>
            </Grid>
        </Container>
    )
};

export default Loader;
