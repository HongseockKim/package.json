import React, {useState,useEffect} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import { Grid ,Paper} from '@material-ui/core';
import axios from "axios";
const getDateStyle = makeStyles({
    inner:{
        maxWidth:'1200px',margin:'0 auto',
        background:'#fafafa',boxSizing:'border-box',padding:'20px 0',
        flexWrap:'wrap'
    },
    item:{
        boxSizing:'border-box'
    },
    paper:{
        textAlign:'center',minHeight:'300px'
    }
});


function GetDate() {

    const classes = getDateStyle();//펑션 컴포넌트 에서는 중괄호 생략
    const [state,setState] = useState([])
    const getadta = () =>{
        axios.get('https://yts-proxy.now.sh/list_movies.json=rating')
            .then((res)=>{
                setState({state:res.data.data.movies})
            })
    }






    return (
        <>
        <div className={classes.inner}>
            <Grid container={true} alignItems={'center'} justifyContent={'flex-start'} spacing={3} xl={12}>
                {
                   console.log(state)
                }
            </Grid>
        </div>
        </>
    );
}

export default GetDate;