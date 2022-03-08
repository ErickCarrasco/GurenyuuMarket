import  React, {useState} from 'react';


import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import { Link } from "react-router-dom";


import 'firebase/auth';
import { getAuth, createUserWithEmailAndPassword  } from "firebase/auth";
import firebase from "firebase/compat/app";
import firebaseConfig from "../firebase-config";
import "firebase/compat/firestore";
import "firebase/compat/storage";


import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useNavigate } from "react-router-dom";








const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();

export default function Register(props) {
  const [email, setEmail] = useState('');
  const [nombre, setnombre] = useState('');
  const [apellido, setapellido] = useState('');
  const [openMessage, setOpenMessage] = React.useState(false);
  const [openMessage2, setOpenMessage2] = React.useState(false);
  const [password2, setPassword2] = useState('');
  let history = useNavigate();
  const [Cart, setCart] = React.useState([]);
  const [inventory, setInventory] = React.useState([]);
  const [image, setImage] = useState([]);
  const [imageUrl, setImageUrl] = useState([]);
  const [tempImg, setTempImg] = useState();
  
const Usuarios = async () =>{
  await firebase.storage().ref('ProfPics/'+email+'.jpg').put(image);
  let imgUrl = await firebase.storage().ref('ProfPics/'+email+'.jpg').getDownloadURL();
  let obj = { nombre, apellido, email, Cart, inventory, imgUrl};
  console.log("hola: "+nombre)
    db.collection("Usuarios").add(obj);
  

}
  const submit =()=>{

    
    const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password2)
  .then((userCredential) =>  {
    Usuarios();
        handleClickOpenMessage();
     //   user2 = firebase.auth().currentUser();
    })
   .catch(function(error) {
        handleClickOpenMessage2();
   });
  
 } 
 const handleClickOpenMessage = () => {
  setOpenMessage(true);
};

const handleCloseMessage = () => {
  setOpenMessage(false);
  
  history("/profile");
  //window.location.reload();

};


const handleClickOpenMessage2 = () => {
  setOpenMessage2(true);
  
};

const handleCloseMessage2 = () => {
  setOpenMessage2(false);
 // user2=null;
};

const handleImageUpload =(e) =>{
  const imageData = e.target.files[0];
  setImage(image =>(imageData))
  setTempImg(URL.createObjectURL(imageData))
}
  const classes = useStyles();



  return (
    <div style={{backgroundImage: `url(${"https://image.freepik.com/free-vector/gradient-white-monochrome-background_23-2149001474.jpg"})`}}>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Create an Account!
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="Name"
                autoFocus
                onChange={(ev) => setnombre(ev.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last name"
                name="lastName"
                autoComplete="lname"
                autoFocus
                onChange={(ev) => setapellido(ev.target.value)}
              />
            </Grid>
            <div>
      
      <br />
      
    </div>
            <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="E-mail"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(ev) => setEmail(ev.target.value)}
          
          />
          <TextField 
           
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(ev) => setPassword2(ev.target.value)}
          />
           <Grid item xs={12} sm={12}>
             <h4>Profile Picture</h4>
             <img src={tempImg} width="50%" />
           </Grid>
           <input type="file" accept="image/*" onChange={handleImageUpload}/>


          </Grid>
          <Button
            //type="submit"
            onClick={submit}
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Create Account
          </Button>
          <Dialog
                  open={openMessage2}
                  onClose={handleCloseMessage2}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                  >
                <DialogTitle id="alert-dialog-title">{"ATTENTION!"}</DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  An error has been found
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={handleCloseMessage2} color="primary">
                Accept
                </Button>
                
              </DialogActions>
            </Dialog>
            <Dialog
                  open={openMessage}
                  onClose={handleCloseMessage}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                  >
                <DialogTitle id="alert-dialog-title">{"Account creation successful"}</DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  Account created
                  
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={handleCloseMessage} color="primary">
                Confirm
                </Button>
                
              </DialogActions>
            </Dialog>

          
        </form>
      </div>
     
    </Container>
    </div>
  );
}