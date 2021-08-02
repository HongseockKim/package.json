import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import axios from "axios";


const styles  = {
   inner:{
       maxWidth:'1200px',margin:'0 auto',padding:'20px 0',
       background:'#fff',
   },
    data_list:{
       padding: '20px 10px',listStyle:'none',
       borderBottom:'1px solid #000',display:'flex',
        justifyContent:'center',alignItems:'center'
    },
    num:{
      flexBasis:'5%'
    },
    text:{
       flexBasis: 'calc(100% - 5%)',textAlign:'left'
    }
};





class GetDate extends Component {

    state = {
        value :[]
    }
componentDidMount() {
        const $this = this;
    axios.get('/api/test')
    .then(function (res){
        console.log(res.data)
        const value = res.data;
        $this.setState({value});
    })
    .catch(function (err){
        console.log(err)
    })
}

    render() {
        const { classes } = this.props;
        return (
            <>
                <div className={classes.inner}>
                    {
                        this.state.value.map((value =><li className={classes.data_list}><span className={classes.num}>{value.id}</span><span className={classes.text}>{value.text}</span></li>))
                    }
                </div>
            </>
        );
    }
}

export default withStyles(styles,{ withTheme: true })(GetDate);