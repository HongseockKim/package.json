import React, {PureComponent} from 'react';
import {makeStyles} from "@material-ui/core/styles";
//함수 구성요소에만 사용가능 함수 랜더 hook 전용
import { withStyles } from "@material-ui/core/styles";
//class 렌더와 함수 구성요소 함께 사용 가능
import {Box, Button, List} from '@material-ui/core';
const styles = theme => ({
    habits: {
        backgroundColor: "#939393",
        borderRadius:'15px',
        boxShadow:'0px 0px 10px 4px #cecece'
    }
});

class ClassRender extends PureComponent {



    //상태값 바꾸는건 set 으로 하는걸로 바꾼다 하면됨

    //내가 보낸거는그냥 전달 해준거
    render() {
        console.log('클래스렌더컴포넌트 렌더');
        return (
            <>
                <Box>
                    <Button type={'button'}>+</Button>
                    <Button type={'button'}>_</Button>
                </Box>
            </>
        );
    }
}

export default withStyles(styles, { withTheme: true })(ClassRender);
