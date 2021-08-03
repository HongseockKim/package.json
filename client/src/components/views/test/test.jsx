import React, {Component} from 'react';
import {withStyles} from "@material-ui/core";
import TestList from "./testList";
import axios from "axios";
const styles  = {
    inner:{
        maxWidth:'1200px',margin:'0 auto',
        padding:'30px 15px',boxSizing:'border-box',background:'#f1f1f1'
    }
};
class Test extends Component {
    state = {
        data : []
    }
    componentDidMount() {
        axios.get('/api/test')
            .then((res)=>{

                this.setState({
                    data : res.data
                });
            })
            .catch((err)=>{
                console.log(err)
            })
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('www');
        if(this.state.data.length !== this.state.data.length){
            this.setState({
                data : this.state.data
            })
        }
    }

    render() {
        const {classes} = this.props;
        return (
            <>
                <div className={classes.inner}>
                        <TestList
                            ondata={this.state.data}
                        />
                </div>
            </>
        );
    }
}

export default withStyles(styles,{withTheme:true}) (Test);