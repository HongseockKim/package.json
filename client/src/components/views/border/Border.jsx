import React, {useCallback, useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import { List, Paper, ListItem} from "@material-ui/core";
import Box from '@material-ui/core/Box';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import 'tui-grid/dist/tui-grid.css';
import Grid from '@toast-ui/react-grid';
import 'tui-pagination/dist/tui-pagination.css';
import TuiGrid from 'tui-grid';
import axios from "axios";
import Sum from "./sum";
import Hitbit from "./classRender";
import {Swiper,SwiperSlide} from "swiper/swiper-react.cjs";
import "swiper/swiper.min.css";
import Props from "./props";

TuiGrid.setLanguage('ko');
TuiGrid.applyTheme('default',{
    grid:{
      border:"red",text:"#4b4b4b"
    },
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
    },
    slide:{
        width:'100%',
        height:'300px',cursor:'grab',
        textAlign:'center',lineHeight:'300px',background:"#f6f6f6",
        boxShadow:'-4px 10px 3px 1px #ccc',borderRadius:'12px'
    }
})


const column =[
            { name: 'text', header: '월', editor: 'text',minWidth:100 },
            { name: 'text_2', header: '화', editor: 'text',minWidth:100 },
            { name: 'text_3', header: '수', editor: 'text',minWidth:100},
            { name: 'text_4', header: '목', editor: 'text',minWidth:100 },
            { name: 'text_5', header: '금', editor: 'text',minWidth:100 },
            { name: 'text_6', header: '토', editor: 'text',minWidth:100 },
            { name: 'text_7', header: '일', editor: 'text',minWidth:100 }
        ]

const option = {
              perPage:5
            }


class touastUi{

    constructor(data,colums,option) {
        this.data = data;
        this.colums = colums;
        this.option = option;
    }
    datas(){
        return this.data
    }
    colums(){
        return this.colums
    }
    option() {
            return this.option
    }

}


function Border(){

    const [data,setdata] = useState();
    useEffect(()=>{
        axios.get('/api/border')
            .then(function (res){
                setdata(res.data)
            })
            .catch(function (err){
                console.log(err);
            })
    },[])

    const onClick = useCallback(()=>{
        console.log('cdd')
    },[])
    const classes = borderStyle();
    const datas = new touastUi(data,column,option);
    return(
            <>
            <Box maxWidth={1200} mt={3} mx={'auto'} py={2} className={classes.box} borderRadius={6} boxShadow={3}>
                <Box mt={2} mb={10}>
                    <Editor previewStyle="vertical" height="400px" initialEditType="markdown" initialValue="우와 이게뭐지" />
                </Box>
                <Grid
                    check={2}
                    getRowCount={1}
                    data={datas.data}
                    columns={datas.colums}
                    bodyHeight={500}
                    rowHeight={85}
                    heightResizable={true}
                    frozenColumnCount={1}
                    pageOptions={datas.option}
                    usageStatistics={false}
                    onClick={onClick}
                    rowHeaders={['checkbox']}
                />
                <Box mt={5} mb={5}>
                    <Sum></Sum>
                </Box>
                <Box p={5}>
                    <Hitbit></Hitbit>
                </Box>
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
                <Swiper className={'mySwiper'}
                        spaceBetween={20}
                    slidesPerView={3}
                >
                    <SwiperSlide className={classes.slide}>Slide 1</SwiperSlide>
                    <SwiperSlide className={classes.slide}>Slide 2</SwiperSlide>
                    <SwiperSlide className={classes.slide}>Slide 3</SwiperSlide>
                    <SwiperSlide className={classes.slide}>Slide 4</SwiperSlide>
                    <SwiperSlide className={classes.slide}>Slide 5</SwiperSlide>
                    <SwiperSlide className={classes.slide}>Slide 6</SwiperSlide>
                </Swiper>
            </Box>
            </>
    )
}

export default Border;
