import React, {PureComponent} from 'react';
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
       flexBasis: 'calc(100% - 25%)',textAlign:'left'
    },
    error_text:{
       textAlign:"center"
    },
    input:{
       padding:'10px',textAlign:'center',
      flexBasis:'10%'
    },
    delet:{
        padding:'10px',textAlign:'center',
       flexBasis:'10%'
    }
};





class GetDate extends PureComponent {
    listRef = React.createRef();

    state = {
        value :[],
    }
componentDidMount() {
        const $this = this;
    axios.get('/api/test')
    .then(function (res){
        if(res){
            console.log(res.data)
            const value = res.data;
            $this.setState({value});
        }else{
            $this.setState({value : '현재 이용에 문제가 있습니다'});
        }
    })
    .catch(function (err){
        console.log(err)
    })
}
border_in = (e) => {

    console.log(e.target)
    console.log(this.props)
}

    render() {
        console.log('겟데이터 콤퓨넌드렌더');
        const { classes } = this.props;
        if(this.state.value.length > 0){
            return (
                <>
                    <ul className={classes.inner} aria-readonly={this.state.value}>
                        {
                            this.state.value.map((value =>
                                <li ref={this.listRef}  className={classes.data_list} key={value.id}>
                                    <span className={classes.num}>{value.id}</span>
                                    <span className={classes.text}>{value.text}</span>
                                    <button id={value.id} onClick={this.border_in} type={"button"} className={classes.input}>보기</button>
                                    <button type={"button"} className={classes.delet}>삭제</button>
                                </li>
                            ))
                        }
                    </ul>
                </>
            );
        }else{
            return(
                <>
                    <div className={classes.inner}>
                        <p className={classes.error_text}>죄송합니다 현재 문제가 있습니다.</p>
                    </div>
                </>
            )
        }

    }
}

export default withStyles(styles,{ withTheme: true })(GetDate);