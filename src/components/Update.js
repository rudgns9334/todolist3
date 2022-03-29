import React, { useState } from "react";
import { Link, useParams } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';

const Update = (props) => {
    const { itemId } = useParams();
    const currentValue = props.item.filter(i=>i.id === itemId)[0].value;
    const currentContent = props.item.filter(i=>i.id === itemId)[0].content;
    const [value, setValue] = useState(currentValue);
    const [content, setContent] = useState(currentContent);

    return(
        <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
            <Box m={1} pt={3} width={1000}>
                <TextField label="제목"
                                variant="filled"
                                fullWidth
                                defaultValue={value}
                                onChange={(e)=> {setValue(e.target.value)}}/>
            </Box>
            <Box m={1} pt={3} width={1000}>
                <TextField label="내용"
                                multiline
                                rows={20}
                                fullWidth
                                variant="outlined" 
                                defaultValue={content}
                                onChange={(e)=> {setContent(e.target.value)}}/>
            </Box>
            <Box m={2} pt={3}>
                <Link to="/" style={{textDecoration : 'none'}}>
                    <Button size="large" onClick={(e)=>{
                        props.onUpdateList(itemId, value, content);
                }}>수정</Button>
                </Link>
            </Box>
        </Box>
    )
}

export default Update;