import React, {PureComponent} from 'react';
import {withStyles} from "@material-ui/core/styles";
import axios from "axios";
import TestList from "./testList";
import {Button, IconButton} from "@material-ui/core";
import {Link} from "react-router-dom";
import EditIcon from '@material-ui/icons/Edit';
const styles = {
    inner:{
        maxWidth:'100vw',margin:'0 auto',
        background:'#fafafa',padding:'20px 10px',boxSizing:'border-box'
    },
    border_list:{
      maxWidth: '90vw',margin:'0 auto',
    }
}
class Test extends PureComponent {
    state = {
        data :[],
        ready : true
    }
    updateif = () =>{
        console.log('실행')
        this.getData()
    }

    getData = async (newdata) => {
       const {data:data} = await axios.get('/api/test')
        this.setState({data : [...data],ready:false})
        newdata = this.state.data
    }


    componentDidMount() {
        console.log('컴포넌트 레디')
        this.getData();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('업데이트')
        if(prevState.data.length !== this.state.data.length){
            this.getData()
        }
    }

    render() {
        console.log('렌더');
        const {classes} = this.props;
        const {data,ready} = this.state;
        console.log({data})
        return (
            <>
             <div className={classes.inner}>
                 <ul className={classes.border_list}>
                 {
                     ready ? "loading" : data.map((list,idx) => {
                         return <TestList updateif={this.updateif} key={list.id} num={idx+1} id={list.id} text={list.text}/>
                     })

                 }
                 </ul>
                 <div style={{textAlign:'center'}}>
                     <Button variant="contained"  size={"large"} startIcon={<EditIcon style={{position:'absolute',top:'50%',left:'10px',transform:'translateY(-50%)',fill:'#2196f3'}}/>} style={{position:'relative',padding:'20px 50px'}}>
                         <Link  style={{position:'absolute',top:'50%',left:'7px',transform:'translateY(-50%)',width:'100%',textDecoration:'none',color:'#4b4b4b',fontWeight:'600'}} to={'/text_fild'}>글쓰기</Link>
                     </Button>
                 </div>
             </div>
            </>
        );
    }
}

export default withStyles(styles,{withTheme:true}) (Test);