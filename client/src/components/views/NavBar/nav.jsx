import React from "react";
import {Link } from "react-router-dom"
import styles from "./nav.module.css";
import {Box} from '@material-ui/core';




function Nav(){
    onloadeddata = () =>{
        console.log('ww');
    };

    return(
            <Box boxShadow={3}>
                <nav className={styles.nav}>
                    <ul className="lnb">
                        <li className={styles.lnb_item}>
                            <Link to={"/"}>메인으로</Link>
                        </li>
                        <li className={styles.lnb_item}>
                            <Link to={"/login"}>로그인</Link>
                        </li>
                        <li className={styles.lnb_item}>
                            <Link to={"/register"}>회원가입</Link>
                        </li>
                        <li className={styles.lnb_item}>
                            <Link on to={"/border"} onClick={onloadeddata}>게시물</Link>
                        </li>
                    </ul>
                </nav>
            </Box>
    )
}
export default Nav;