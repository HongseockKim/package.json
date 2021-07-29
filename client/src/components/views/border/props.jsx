import React, {Component} from 'react';
import {ListItem,List} from '@material-ui/core';
import {withStyles} from "@material-ui/core/styles";
const styles = theme => ({
    list_wrap:{
        background:"#fff",
        width:'90%',margin:'0 auto',borderRadius:'6px',
    }
});




class Props extends Component {


    render() {
        const { classes } = this.props;
        return (
                <List className={classes.list_wrap}>
                {
                    this.props.item.map(items =>(
                        <ListItem key={items.id}>
                            <p>{items.name}</p>
                            <p>{items.age}</p>
                        </ListItem>
                    ))
                }
                </List>
        );
    }
}


export default withStyles(styles, { withTheme: true })(Props);