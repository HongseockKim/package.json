import React from 'react';
import {useHistory } from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";
import {IconButton, Paper} from "@material-ui/core";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
const styles = makeStyles({
    inner:{
        maxWidth:'1200px',margin:'30px auto 0 auto',
        padding:'50px 20px',boxSizing:'border-box',
    },
    text_con:{
        padding:'150px 30px',position:'relative'
    },
    backBtn:{
        position:'absolute',top:'20px',left:'20px',
        '& svg':{
            fill:'#4b4b4b'
        }
    }
});


function Dtail({location}) {

    const classes = styles();
    const getParams = location.state.detail;
    const history = useHistory();

    const back = () => history.push('/test');

    console.log(getParams)


    return (
        <>
            <div className={classes.inner}>
                <Paper className={classes.text_con} variant={'variant'}>
                    <IconButton onClick={back} className={classes.backBtn} size={'medium'}>
                        <ArrowBackIcon/>
                    </IconButton>
                    {
                        getParams.map((text,idx) =>{
                            return <p style={{textAlign:'center'}} key={idx}>{text.text}</p>
                        })
                    }
                </Paper>
            </div>
        </>
    );
}

export default Dtail;