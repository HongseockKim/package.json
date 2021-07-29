import React, {useEffect, useRef, useState} from 'react'
import {makeStyles} from "@material-ui/core/styles";
import {Button, Input} from "@material-ui/core";
import Box from "@material-ui/core/Box";


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
    in_text:{
        width:'60px',
        '&:nth-child(1)':{
            marginRight:'20px'
        }
    },
    in_btn:{
        display:'inline-block',
        marginLeft:'20px'
    },
    out_text:{
        marginTop:'20px',
        textAlign:'center',
        '&:placeholder':{
            textAlign:'center'
        }
    }
});


 function Sum(){
     const classes = borderStyle();

     const [text,setText] = useState([]);
     const [text_2,setText_2] = useState([]);
     const [total,setTotal] = useState([0]);


     const input = useRef();
     const reset = (e) =>{
         e.target.value = 0
         if(e.target.name === 'text_1'){
             setText("")
         }else if(e.target.name === 'text_2'){
             setText_2("")
         }

     }
     const onChage = (e) =>{
         // console.log(e.target.value)
         const value = e.target.value.replace(/[^0-9]/g, '')
       setText(value);
     }
     const onChage_2 = (e) =>{
         // console.log(e.target.value)
         const value = e.target.value.replace(/[^0-9]/g, '')
         setText_2(value)
     }

     useEffect(() => {
         console.log(input.current);
     }, [])

     const Caculate = (e)=>{
          e.target.value = Number(text) + Number(text_2)
         setTotal(e.target.value)
     }


    return(
        <>
        <Box maxWidth={1200} mt={3} mb={3} mx={'auto'} textAlign={'center'}>
            <Input name={'text_1'} ref={input} onFocus={reset} onChange={onChage} id={'in_text'} type={'text'} placeholder={'계산값'} className={classes.in_text} value={text}></Input>
            <Input name={'text_2'}onFocus={reset} onChange={onChage_2} id={'in_text_2'} type={'text'} placeholder={'계산값'} className={classes.in_text} value={text_2}></Input>
            <Button onClick={Caculate}  variant="contained" className={classes.in_btn}>계산하기</Button>
            <Box>
                <Input id={'in_text_3'} type={'text'} placeholder={'결과값'} className={classes.out_text} value={total}></Input>
            </Box>
        </Box>
        </>
    )

}

export default Sum