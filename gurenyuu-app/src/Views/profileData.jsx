import React from 'react';



import Typography from '@material-ui/core/Typography';

import Box from '@material-ui/core/Box';
import Grid from "@material-ui/core/Grid";

import "./Styles/profileData.css";

import firebase from "firebase/compat/app";
import firebaseConfig from "../firebase-config";
import "firebase/compat/firestore";
import "firebase/compat/storage"
import { getAuth, signOut } from "firebase/auth";
import Button from '@material-ui/core/Button';
import { useNavigate } from "react-router-dom";


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();






export default function MediaControlCard(props) {
    //const { classes, theme } = props;
    const auth = getAuth();
    const user2 = auth.currentUser;
    let history = useNavigate();
    const [apellido, setApellido] = React.useState("");
    const [nombre, setNombre] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [imgUrl, setimgUrl] = React.useState();
    const getCategorias = async () => {
        let obj;
        const querySnapshot = await db.collection("Usuarios").get();

        querySnapshot.forEach((doc) => {
            obj = doc.data();
            obj.id = doc.id;
            if (user2 != null) {
                if (user2.email === doc.data().email) {
                    setNombre(doc.data().nombre)
                    setApellido(doc.data().apellido)
                    setEmail(doc.data().email)
                    setimgUrl(doc.data().imgUrl)

                }
            }


        });
    };

    getCategorias()


    const submit2 =()=>{
        
        const auth = getAuth();
        signOut(auth).then(() =>  {
  
  
              history("/");
             window.location.reload();
              
          });
          
          
        } 

    return (

        <Box
            sx={{
                width: 1250,
                height: 250,
                marginLeft: 50,
                marginTop: 30


            }}
        >
            <Grid className="centro" container spacing={2} style={{ padding: 40 }} >


                <Grid item xs={3}  >
                    <img
                        className="photo"
                        src={imgUrl}
                        alt="new"

                    />
                </Grid>

                <Grid item xs={5} >
                    <Typography variant="h4">
                        {nombre + "  " + apellido}
                    </Typography>



                    <br></br>
                    <br></br>
                    <br></br>

                    <Typography variant="subtitle2" >
                        Informaci??n:
                    </Typography>
                    <Typography variant="subtitle2" >
                        {"Correo: " + email}
                    </Typography>
                    <Button
                onClick={submit2}
                fullWidth
                variant="contained"
                color="primary"

            >
                Log out
            </Button>
                </Grid>
                

            </Grid>
            
        </Box>


    );
}
