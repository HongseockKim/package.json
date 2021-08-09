import React from 'react';
import {IconButton, ListItem} from "@material-ui/core";
import ClearIcon from '@material-ui/icons/Clear';
import axios from "axios";
import { useHistory } from "react-router-dom";


function TestList ({id,text,num,updateif}) {
    const listBtnValue  = React.createRef();
    const history = useHistory();

    const getId = async (e) => {
        const id =e.currentTarget.id
        await  axios({
            method:'POST',
            url:'/api/delet',
            data:{
                id : id
            }
        })
            .then((res)=>{
                console.log(res)
                if(res.data === true){
                    console.log(res.data)
                    console.log('성공')
                    updateif();
                }
            })
            .catch((err)=>{
                console.log(err)
            })
    }
    const deTailBorder = async () =>{

        const value = listBtnValue.current.value;
        await axios({
            method:'POST',
            url:'/api/border_detail',
            data:{
                value : value
            }
        })
            .then((res)=>{
                const data = res.data;
                console.log(res);
                console.log('성공');
                history.push({
                    pathname :'/dtail',
                    state :{detail:data}
                });
            })
            .catch((err)=>{
                console.log(err);
                console.log('성공');
            })
    }

    return (
        <>
            <ListItem id={id} style={{padding:'20px 0'}} >
                <button ref={listBtnValue} onClick={deTailBorder} value={id} type='button' style={{display:'flex',background:'none',border:'none',flexBasis:'100%',textAlign:'left'}}>
                    <p style={{flexBasis:'95%'}}><span style={{flexBasis:'3%',marginRight:'2%'}}>{num}</span>{text}</p>
                    <div style={{flexBasis:'5%'}}>
                        <IconButton  id={id} onClick={getId}><ClearIcon style={{fill:'#ff1744'}}/></IconButton>
                    </div>
                </button>
            </ListItem>
        </>
    );
}

export default TestList;