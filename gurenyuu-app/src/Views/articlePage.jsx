import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import firebaseConfig from "../firebase-config";
import "firebase/compat/firestore";
import "firebase/compat/storage"


//MATERIAL UI
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Box from '@material-ui/core/Box';
 
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  
  const db = firebase.firestore();


function ArticlePage(){
    let location = useLocation();
    const [listData, setListData] = useState(location.state);
    const [url, setUrl] = useState(listData.tile.url);
    const [name, setName] = useState(listData.tile.name);
    const [description, setDescription] = useState(listData.tile.description);
    const [tags, setTags] = useState(listData.tile.tags);
    const [price, setPrice] = useState(listData.tile.price);
    const [quantity, setQuantity] = useState(listData.tile.quantity);
    const [docId, setDocid] = useState("");

    let audio = new Audio("/neco-arc-s2.wav");

    useEffect(()=>{
        //getProductDetails()
    },[]);

    const getProductDetails = async () => {
        let obj;
        const querySnapshot = await db.collection("articles").get();
       console.log(listData)
        querySnapshot.forEach((doc) => {
            obj = doc.data();
            obj.id = doc.id;
            let name="Neptuna"
            if(name === doc.data().name){
                let codename = doc.data().codename;
                setName(doc.data().name)
                setDescription(doc.data().description)
                setPrice(doc.data().price)
                setTags(doc.data().tags)
                setDocid(obj.id)
                //let url =  firebase.storage().ref("ProductPics/"+codename+'.jpg').getDownloadURL();
                //console.log(url)
                setUrl(doc.data().url);

            }  
          
        });
        
      };

      const buyArticle = () =>{
          
          audio.play();
      }

      return(
        <div style={{backgroundImage: `url(${"https://image.freepik.com/free-vector/gradient-white-monochrome-background_23-2149001474.jpg"})`}}>
        <div class="row  text-center" style={ {textAlign: 'left', marginLeft: '2rem'}}>


    
        <h2 style= { {fontFamily: 'Arial', color: 'black'}} >{name}</h2>
        <Grid container spacing={2}>
           <Grid item xs={2} >
                <img src={url} alt="img" height={200} width={200}/>
           </Grid>
            <Grid item xs={8} >

            </Grid>
           
         </Grid>
         <Grid container spacing={2} >
            <Grid item xs={4}>
                    <Button 
                        variant="contained"
                        style={{backgroundColor:'green', fontFamily:'Arial', borderColor:'black', boxShadow:'inherit', color:'white'}}
                        onClick={buyArticle}
                        >
                        $ {price} Add to Cart
                    </Button>
            </Grid>
         </Grid>
         <br/>
         <br/>
         <Grid container spacing={0} >
             <Grid item xs ={8}>
                 <TextField
                    inputProps={{ style: { fontFamily: 'Arial', color: 'black'}}}
                    //style={{ flex: 1, margin: '0 20px 0 0', backgroundColor: 'gray'}}
                    id="des"
                    multiline
                    fullWidth
                    value = {description}
                    variant = "filled"
                    />
             </Grid>
         </Grid>

         <br/>
         <br/>

    </div>
    </div>
      );
}

export default ArticlePage