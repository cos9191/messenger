import React, {FC, useContext, useState} from 'react';
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";
import {Avatar, Button, Container, TextField} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import {useCollectionData} from "react-firebase-hooks/firestore";
import Loader from "./loader";
import firebase from "firebase/compat/app";

const Chat: FC = () => {
    // @ts-ignore
    const {auth, firestore} = useContext(Context);
    // @ts-ignore
    const [user] = useAuthState(auth);
    const [value, setValue] = useState<string>("");
    const [messages, loading] = useCollectionData(
        firestore.collection('messages').orderBy('createdAt')
    )
    const sendMessage = async () => {
        firestore.collection('messages').add({
            uid: user?.uid,
            displayName: user?.displayName,
            photoURL: user?.photoURL,
            text: value,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        })
        setValue('')
    }

    if (loading) {
        return (
            <Loader/>
        )
    }

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
                <div style={{width: "80%", height: "70vh", overflowY: "auto", border: "1px solid #000"}}>
                    {messages?.map(message =>
                        <div key={message.createdAt} style={{
                            margin: 10,
                            marginLeft: user?.uid === message.uid ? 'auto' : 10,
                            backgroundColor: user?.uid === message.uid ? '#0382f5' : '#e9e9eb',
                            borderRadius: 22,
                            width: "fit-content",
                            maxWidth: '80%',
                            padding: 10,
                        }}>
                            <Grid container alignItems={'center'}>
                                <Avatar src={message.photoURL}/>
                                <Grid>{message.displayName}</Grid>
                            </Grid>
                            <div style={{margin: 10}}>{message.text}</div>
                        </div>
                    )}
                </div>
                <Grid
                    container
                    flexWrap={"nowrap"}
                    gap={2}
                    alignItems={"flex-end"}
                    justifyContent={"flex-end"}
                    style={{width: "100%"}}
                >
                    <TextField maxRows={2}
                               variant={"outlined"}
                               style={{width: "80%"}}
                               value={value}
                               onChange={evt => setValue(evt.target.value)}
                    />
                    <Button onClick={sendMessage} variant="contained">Send</Button>
                </Grid>
            </Grid>
        </Container>
    );
};
export default Chat;
