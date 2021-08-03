import React, {Component} from 'react';
import {withStyles,TextareaAutosize,Button} from '@material-ui/core'
import axios from "axios";

const styls = {
    inner:{
        maxWidth:'1200px',margin:'20px auto 0 auto',
        padding:'20px 10px',boxSizing:'border-box',
        background:'#eceff1',boxShadow:'0px 2px 4px #cfd8dc',borderRadius:'12px',
        textAlign:'center'
    },
    text_area:{
        display:'block',
      resize:'none',width:'90%',minHeight:'330px',padding:'10px',
        boxSizing: 'border-box',
        border:'none',margin:'0 auto',borderRadius:'4px',
        boxShadow: '0px 0px 10px #90a4ae',textAlign: 'left',
        '&::placeholder':{
            textAlign:'center',lineHeight:'330px'
        },
        '&:focus::placeholder':{
            color:'transparent'
        }
    },
    btn:{
        display:'inline-block',
        width: '130px',padding: '10px 0',
        margin:'20px auto 0 auto'
    }
}
class TextFild extends Component {
    textAreaRef = React.createRef();


    onSubmit = async () =>{
        console.log('클릭')
        let text = this.textAreaRef.current.value;
      let textValue = {
          text : text
      };
        await axios.get('/api/textvalue',{textValue})
            .then((res)=>{
                if(res){
                    console.log('성공')
                    window.location.href = '/test'
                }else{
                    console.log('실패')
                }
            })
            .catch((err)=>{
                console.log(err);
            })

    }

    render() {
        const {classes} = this.props;
        return (
            <>
                <div className={classes.inner}>
                    <TextareaAutosize  ref={this.textAreaRef} className={classes.text_area}  aria-label="empty textarea" placeholder="글을 작성해주세요" />
                    <Button onClick={this.onSubmit} className={classes.btn} variant="contained" color="primary">저장</Button>
                </div>
            </>
        );
    }
}

export default withStyles(styls,{withTheme:true}) (TextFild);