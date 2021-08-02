import React, {Component} from 'react';
import {withStyles,styled} from '@material-ui/core/styles';
import {Button,Box} from '@material-ui/core'


const styles = theme => ({
    wraps:{
      width:'500px',margin:'0 auto'
    },
    input:{
        display:'block',width:'100%',borderRadius:'6px',
        border:'none',padding:'20px 0',boxShadow:'0px 0px 3px 4px #f5f5f5'
    }
});
//커스텀 css
const MyButtonWrap = styled(Box)({
    width:'500px',margin:'0 auto',
    display:'flex',justifyContent:'flex-start',alignItems:'center',
    flexWrap:'wrap'
})
const MyButton = styled(Button)({
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    padding:'18px 30px',
    marginTop:'20px',
    flexBasis:'calc(100% / 3 - 20px)',
    marginRight:'20px',
    '&:nth-child(3n)':{
        marginRight:'0px'
    }
});
class Caculater extends Component {
    state = {
        Nubers :[
            {id:1,num:1},{id:2,num:2,},{id:3,num:3,}
            ,{id:4,num:4,},{id:5,num:5,},{id:6,num:6,}
            ,{id:7,num:7,},{id:8,num:8,},{id:9,num:9,}
            ,{id:10,num:0,},{id:11,num:'C',},{id:12,num:'+',}
        ],
        value : [

        ],
    }

    onValue = (nums)=>{
          // this.state.value.push(nums.currentTarget.value)
        // this.setState({value : this.state.value.concat(nums.currentTarget.value)});
       // this.setState({value : [...this.state.value, nums.currentTarget.value]});
        this.setState({value : [...this.state.value, nums.currentTarget.value]});
        console.log(this.state.value.join(','))
    }

    render() {
        const { classes } = this.props;
        console.log('리렌더링됨');
        return (
            <>
                <div className={classes.wraps}>
                    <input type={'text'} className={classes.input} value={this.state.value.join(',')} />
                    <MyButtonWrap>
                        {
                            this.state.Nubers.map(nubs =>(
                                <MyButton key={nubs.id} onClick={this.onValue} variant="contained" value={nubs.num}>{nubs.num}</MyButton>
                            ))
                        }
                    </MyButtonWrap>
                </div>
            </>
        );
    }
}

export default withStyles(styles, { withTheme: true })(Caculater);