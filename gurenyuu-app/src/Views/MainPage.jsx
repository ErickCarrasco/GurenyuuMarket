import React, { useState } from 'react';

import './Styles/MainPage.css';
import MainCard from '../Components/mainCard';
import Grid from "@material-ui/core/Grid";
import PopularCard from '../Components/popularCard';

const MainPage = () =>{
    return (
        <div style={{backgroundImage: `url(${"https://image.freepik.com/free-vector/gradient-white-monochrome-background_23-2149001474.jpg"})`}}>
        <div class="row  text-center" style={ {textAlign: 'left', marginLeft: '2rem'}} >
            <div  >
                <h1 className="centrar">Recent Ones</h1>
                <Grid item xs={12} sm={12}>
                    <MainCard/>
                </Grid>
                <br/>
                <h2 className="Centre">Most Popular</h2>
                <Grid item xs={12} sm={12}>
                    <PopularCard/>
                </Grid>
            </div>
        </div>
        </div>
      );

};

export default MainPage;