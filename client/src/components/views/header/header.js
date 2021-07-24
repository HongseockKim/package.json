import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyle = makeStyles({
    inner : {
        margin:'0 auto',
        maxWidth :"1200px",
        minHeight:"200px",
        background:"#333",color:"#fff",
    }
});

function Header(){
    const classes  = useStyle();

    return(
        <header>
            <div className={classes.inner}>
                헤더ddwdwd
            </div>
        </header>
    )
}

export default Header;