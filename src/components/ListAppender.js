import { Component } from "react";
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';

class ListAppender extends Component{
    constructor(props){
        super(props);
        this.state={
            value : ""            
        }
    }

    ChangeValue = value => {
        this.setState({
            value
        })
    }

    render(){
        return(
            <Box display="flex" justifyContent="center">
                <Box m={1} pt={3}><TextField label="할 일" variant="filled" value={this.state.value} onChange={(e)=> this.ChangeValue(e.target.value)}/></Box>
                <Box m={2} pt={3}><Button variant="contained" color="primary" onClick={function(e){
                    e.preventDefault();
                    console.log(this.state.value);
                    this.props.onAddList(this.state.value);
                    var value = '';
                    this.setState({
                        value
                    });
                }.bind(this)}>추가</Button></Box>
            </Box>
        )
    }
}

export default ListAppender;