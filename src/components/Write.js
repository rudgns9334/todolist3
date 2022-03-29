import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';

const Write = (props) => {
    const [value, setValue] = useState("");
    const [content, setContent] = useState("");

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
                        props.onAddList(value, content);
                        setValue("");
                        setContent("");
                }}>추가</Button>
                </Link>
            </Box>
        </Box>
    )
}

export default Write;