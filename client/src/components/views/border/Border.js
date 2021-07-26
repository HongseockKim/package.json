import React, {useEffect,useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {List, Paper, ListItem} from "@material-ui/core";
import Box from '@material-ui/core/Box';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import 'tui-grid/dist/tui-grid.css';
import Grid from '@toast-ui/react-grid';
import 'tui-pagination/dist/tui-pagination.css';
import Pagination from 'tui-pagination';
import TuiGrid from 'tui-grid';
import axios from "axios";

TuiGrid.setLanguage('ko');
TuiGrid.applyTheme('default',{
    row:{
      even:{
          background:"#fafafa",
          text:'#4b4b4b',
      },
      hover:{
          background:'#f1f1f1'
      },
      odd:{
          background:"#e8e8e8",
          text:'#4b4b4b',
      }
    },
    cell:{
        normal: {
            background: '#fafafa',
            border: '#e0e0e0',
            showVerticalBorder: false,
            showHorizontalBorder: true
        },
        header:{
            background:"#fafafa",text:"#000"
        },
        selectedHeader: {
            background: '#e0e0e0'
        },
    }
});

 axios.get('/api/border')
    .then(function (res){
        getdata(res.data)
    })
    .catch(function (err){
        console.log(err);
    })

function getdata(datas){
    console.log(datas)
}
const borderStyle = makeStyles({
    box :{
      background:'#fafafa'
    },
    border_list:{
        display:"flex",
        justifyContent:"start",
        alignItems :"center",flexWrap:'wrap',
        paddingLeft:'20px'
    },
    border_list_item :{
        flexBasis:"calc(100% / 3 - 20px)",
        marginRight:'20px', marginBottom:'20px',
        "&:nth-child(3n)": {
            marginRight:'0px'
        },
    },
    papers:{
        width:'100%',
        padding:'40px 20px',
        '& p': {
            lineHeight:"1.2em",
        },
    },
    box_type_2:{
        background:'#8b8b8b'
    }
})

function GridUi(data,columns,pageOptions){

    pageOptions= [{
        pagination:true,
        useClient: true,
        pageOptions:{
            totalCount:12,
            page:1,
            perPage:10,
        },
        data :[
            { id: 1, name: '가' ,text:'월요일입니다',text_2:'화요일입니다',text_3:'수요일입니다',text_4:'목요일입니다',text_5:'금요일입니다',text_6:'토요일입니다',text_7:'일요일입니다'},
            { id: 2, name: '나' ,text:'밥',text_2:'옷',text_3:'동네',text_4:'밤',text_5:'성남',text_6:'토요일입니다',text_7:'일요일입니다'},
            { id: 3, name: '다',text:'점심',text_2:'바지',text_3:'서울',text_4:'아침',text_5:'분당',text_6:'토요일입니다',text_7:'일요일입니다' },
            { id: 4, name: '라',text:'저녁',text_2:'티셔츠',text_3:'문정',text_4:'새벽',text_5:'판교',text_6:'토요일입니다',text_7:'일요일입니다'},
            { id: 5, name: '라',text:'저녁',text_2:'티셔츠',text_3:'문정',text_4:'새벽',text_5:'판교',text_6:'토요일입니다',text_7:'일요일입니다'},
            { id: 6, name: '라',text:'저녁',text_2:'티셔츠',text_3:'문정',text_4:'새벽',text_5:'판교',text_6:'토요일입니다',text_7:'일요일입니다'},
            { id: 7, name: '라',text:'저녁',text_2:'티셔츠',text_3:'문정',text_4:'새벽',text_5:'판교',text_6:'토요일입니다',text_7:'일요일입니다'},
            { id: 8, name: '라',text:'저녁',text_2:'티셔츠',text_3:'문정',text_4:'새벽',text_5:'판교',text_6:'토요일입니다',text_7:'일요일입니다'},
            { id: 9, name: '라',text:'저녁',text_2:'티셔츠',text_3:'문정',text_4:'새벽',text_5:'판교',text_6:'토요일입니다',text_7:'일요일입니다'},
            { id: 10, name: '라',text:'저녁',text_2:'티셔츠',text_3:'문정',text_4:'새벽',text_5:'판교',text_6:'토요일입니다',text_7:'일요일입니다'},
            { id: 11, name: '라',text:'저녁',text_2:'티셔츠',text_3:'문정',text_4:'새벽',text_5:'판교',text_6:'토요일입니다',text_7:'일요일입니다'},
        ],
        columns:[
            { name: 'id', header: 'No', editor: 'text',minWidth:30},
            { name: 'text', header: '월', editor: 'text',minWidth:100 },
            { name: 'text_2', header: '화', editor: 'text',minWidth:100 },
            { name: 'text_3', header: '수', editor: 'text',minWidth:100},
            { name: 'text_4', header: '목', editor: 'text',minWidth:100 },
            { name: 'text_5', header: '금', editor: 'text',minWidth:100 },
            { name: 'text_6', header: '토', editor: 'text',minWidth:100 },
            { name: 'text_7', header: '일', editor: 'text',minWidth:100 },
        ]
    }]

    return {
        data,
        columns,
        pageOptions
    };

}


function Border(){
    const classes = borderStyle();

    return(

            <Box maxWidth={1200} mt={3} mx={'auto'} py={2} className={classes.box} borderRadius={6} boxShadow={3}>

                <Box mt={2} mb={10}>
                    <Editor previewStyle="vertical" height="400px" initialEditType="markdown" initialValue="우와 이게뭐지"/>
                </Box>
                <Grid
                    data={GridUi([],[],[]).pageOptions[0].data}
                    columns={GridUi([],[],[]).pageOptions[0].columns}
                    bodyHeight={500}
                    rowHeight={85}
                    heightResizable={true}
                    frozenColumnCount={1}
                    pageOptions={GridUi([],[],[]).pageOptions[0].pageOptions}
                />
                <List className={classes.border_list}>
                    <ListItem className={classes.border_list_item}>
                        <Paper className={classes.papers} elevation={3} >
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, ducimus nesciunt! A debitis dolorem doloremque in modi nihil pariatur ut.</p>
                        </Paper>
                    </ListItem>
                    <ListItem className={classes.border_list_item}>
                        <Paper className={classes.papers} elevation={3}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea eos incidunt labore perferendis quibusdam quo quos reprehenderit sapiente unde voluptatem!</p>
                        </Paper>
                    </ListItem>
                    <ListItem className={classes.border_list_item}>
                        <Paper className={classes.papers} elevation={3}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea eos incidunt labore perferendis quibusdam quo quos reprehenderit sapiente unde voluptatem!</p>
                        </Paper>
                    </ListItem>
                    <ListItem className={classes.border_list_item}>
                        <Paper className={classes.papers} elevation={3}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea eos incidunt labore perferendis quibusdam quo quos reprehenderit sapiente unde voluptatem!</p>
                        </Paper>
                    </ListItem>
                </List>
            </Box>
    )
}

export default Border;
