import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';


const WriteBtn = () => {

    return (
        <Box display="flex" justifyContent="center">
            <Link to="/write" style={{textDecoration : 'none'}}>
                <Button size="large">작성</Button>
            </Link>
        </Box>
    )
}

export default WriteBtn;