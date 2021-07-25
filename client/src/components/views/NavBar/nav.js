import React from "react";
import {Link} from "react-router-dom"
import styles from "./nav.module.css";
function Nav(){
    return(
        <nav className={styles.nav}>
            <ul className="lnb">
                <li className={styles.lnb_item}>
                    <Link to={"/"}>
                        <button type={"button"}>메인으로</button>
                    </Link>
                </li>
                <li className={styles.lnb_item}>
                    <Link to={"/register"}>
                        <button type={"button"}>회원가입</button>
                    </Link>
                </li>
                <li className={styles.lnb_item}>
                    <Link to={"/login"}>
                        <button type={"button"}>로그인</button>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
export default Nav;