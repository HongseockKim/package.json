
import {IconButton, ListItem} from "@material-ui/core";
import ClearIcon from '@material-ui/icons/Clear';
import axios from "axios";


function TestList ({id,text,num,updateif}) {


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

    return (
        <>
            <ListItem id={id} style={{padding:'20px 0'}} >
                <p style={{flexBasis:'95%'}}><span style={{flexBasis:'3%',marginRight:'2%'}}>{num}</span>{text}</p>
                <div style={{flexBasis:'5%'}}>
                    <IconButton  id={id} onClick={getId}><ClearIcon style={{fill:'#ff1744'}}/></IconButton>
                </div>
            </ListItem>
        </>
    );
}

export default TestList;