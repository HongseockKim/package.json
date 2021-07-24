import React, {useEffect, useState} from "react";
import axios from "axios";
import TableRow from "@material-ui/core/TableRow";
import TableCell from '@material-ui/core/TableCell';
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import {Paper, TableBody, TableFooter, TableHead} from "@material-ui/core";
import Header from "../header/header";


const useStyles = makeStyles({
    root: {
        grid:1,
        background:"red",
    },
    paper :{
        padding:20,
        textAlign : 'center',
    },
    table :{
        border:"1px solid #ccc",
        borderCollapse : "collapse",
    },
    item : {
      boxSizing :"border-box",
    },
    text:{
        textAlign:"center",
    },
});


 function LandingPage(){
    const classes =useStyles();
    const [loadData,setLoadData] = useState();
    //랜딩페이지 시작
    useEffect(() => {
        axios.get('/api/hello')
            .then(res =>{
                console.log(res.data);
                setLoadData(res.data);
            })
            .catch((err) =>{
                console.log(err);
            })
    },[]);

    return(
        <div>
            <Header>
            </Header>
            <div>
                {loadData ? (
                    <div className={classes.text}>
                        흠..{loadData.message} 흠..
                    </div>
                ) : null}
            </div>
            <Grid className={classes.root} spacing={3}>
                <Grid className={classes.item} item xs={12} spacing={3}>
                    <Paper className={classes.paper}>
                        xs = 12
                    </Paper>
                </Grid>
                <Grid item xs={6} spacing={3}>
                    <Paper className={classes.paper}>
                        xs = 6
                    </Paper>
                </Grid>
                <Grid item xs={6} spacing={3}>
                    <Paper className={classes.paper}>
                        xs = 6
                    </Paper>
                </Grid>
                <Grid item xs={3} spacing={3}>
                    <Paper className={classes.paper}>
                        xs = 3
                    </Paper>
                </Grid>
                <Grid item xs={3} spacing={3}>
                    <Paper className={classes.paper}>
                        xs = 3
                    </Paper>
                </Grid>
                <Grid item xs={3} spacing={3}>
                    <Paper className={classes.paper}>
                        xs = 3
                    </Paper>
                </Grid>
                <Grid item xs={3} spacing={3}>
                    <Paper className={classes.paper}>
                        xs = 3
                    </Paper>
                </Grid>
            </Grid>
            <table className={classes.table}>
                <TableHead></TableHead>
                <TableBody>
                <TableRow>
                    <TableCell>
                        1
                    </TableCell>
                    <TableCell>
                        2
                    </TableCell>
                    <TableCell>
                        3
                    </TableCell>
                    <TableCell>
                        4
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                        이름
                    </TableCell>
                    <TableCell>
                        성별
                    </TableCell>
                    <TableCell>
                        나이
                    </TableCell>
                    <TableCell>
                        직업
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                        홍길동
                    </TableCell>
                    <TableCell>
                        남자
                    </TableCell>
                    <TableCell>
                        24세
                    </TableCell>
                    <TableCell>
                        개발자ssss
                    </TableCell>
                </TableRow>
                </TableBody>
                <TableFooter>

                </TableFooter>
            </table>
        </div>
    )
}
export default LandingPage;
