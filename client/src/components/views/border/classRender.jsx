import React, {Component} from 'react';
import {makeStyles} from "@material-ui/core/styles";
//함수 구성요소에만 사용가능 함수 랜더 hook 전용
import { withStyles } from "@material-ui/core/styles";
//class 렌더와 함수 구성요소 함께 사용 가능
import {Box, Button} from '@material-ui/core';
const styles = theme => ({
    root: {
        backgroundColor: "#939393"
    }
});

class ClassRender extends Component {
    state = {
        count : 0
    };

    render() {
        const { classes } = this.props;
        return (
            <>
             <Box className={classes.root} pt={5} pb={5} textAlign={'center'}>{this.state.count}</Box>
                <Box>
                    <Button type={'button'}>+</Button>
                    <Button type={'button'}>_</Button>
                </Box>
            </>
        );
    }
}

export default withStyles(styles, { withTheme: true })(ClassRender);
