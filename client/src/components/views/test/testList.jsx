import React, {Component} from 'react';
import {withStyles , Button} from "@material-ui/core";
import {Link } from "react-router-dom"

const styles  = {
    list_item:{
        listStyle:'none',padding:'10px 0;',
        boxSizing:'border-box',
    },
    text_btn:{
      '& a':{
          color:'#fff',
          textDecoration:'none'
      }
    }
};

class TestList extends Component {

    render() {
        const {classes} = this.props;
        console.log(this.props.ondata.length)
        const data = this.props.ondata;
        const count = this.props.count;
        const num = 0;
        return (
            <>
                {//여기서는 다시 자바스크립트 구문 시작이라 돔파싱 할려면 return 을 꼭해야한다
                    data && data.map((item) =>{
                        console.log(item)
                        return(
                            <li className={classes.list_item} key={item.id}><span className={classes.num}></span><span className={classes.text}>{item.text}</span></li>
                        );
                    })
                }
                <Button variant="contained" color="primary" className={classes.text_btn} ><Link to={'/text_fild'}>글쓰기</Link></Button>
            </>
        );
    }
}

export default withStyles(styles,{withTheme:true}) (TestList);