import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {Button, Paper} from "@material-ui/core";
import DoneIcon from '@material-ui/icons/Done';
import axios from "axios";
const style = {
    inner:{
        maxWidth:'1200px',margin:'20px auto 0 auto',
        background:'#fafafa',padding:'20px 10px',
        boxSizing:'border-box'
    },
    text_area:{
        maxWidth:"900px",margin: "0 auto",
        height:'300px'
    },
    textin:{
        width:'100%',height:"100%",resize:'none',border:'none',
        borderRadius:'8px'
    },
    btn_wrap:{
        background: 'transparent',border:'none',
        textAlign:'center',padding:'30px 0'
    },
    sav_btn:{
        background:'#2979ff',color:'#fff',
        fontWeight:'600'
    }

}
class TextFild extends Component {
    textValueInput = React.createRef()
    state ={
        text : ""
    }
    getTextValue = async () => {
       const text = this.textValueInput.current.value;

       this.setState({text : [...text]})
        console.log(text)

        await  axios({
            method:'POST',
            url:'/api/textvalue',
            data:{
                text : text
            }
        })
            .then((res) => {
                console.log(res)
                if(res.data === true){
                    this.props.history.push('/test');
                }
            })
            .catch((err)=>{
                console.log(err);
                console.log('에러');
            })

    }



    render() {
        const {classes} = this.props;
        return (
            <>
                <Paper className={classes.inner} elevation={7}>
                    <Paper variant={"outlined"} className={classes.text_area}>
                        <textarea ref={this.textValueInput} className={classes.textin}></textarea>
                    </Paper>
                    <Paper variant={"outlined"} className={classes.btn_wrap}>
                        <Button onClick={this.getTextValue} className={classes.sav_btn} variant={"contained"} startIcon={<DoneIcon/>}>등록하기</Button>
                    </Paper>
                </Paper>
            </>
        );
    }
}

export default withStyles(style,{withTheme:true}) (TextFild);