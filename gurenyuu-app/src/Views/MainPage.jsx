import React, { useState } from 'react';

import './Styles/MainPage.css';
import MainCard from '../Components/mainCard';
import Grid from "@material-ui/core/Grid";

const MainPage = () =>{
    return (
        <div  style={{backgroundImage: `url(${"https://image.freepik.com/free-vector/gradient-white-monochrome-background_23-2149001474.jpg"})`}}>
            <h1 className="centrar">Most Popular</h1>
            <Grid item xs={12} sm={12}>
                <MainCard/>
            </Grid>
        </div>
      );

};

export default MainPage;