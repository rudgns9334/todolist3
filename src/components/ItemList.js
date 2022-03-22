import { Component } from "react";
import Box from '@material-ui/core/Box';
import Checkbox from '@material-ui/core/Checkbox';

class ItemList extends Component{

    render(){
        return(
            <Box display="flex" justifyContent="center">
                <Box marginTop={2} border={1} borderRadius={16} width={1000}>
                    <ul>
                        {this.props.item.map( item =>( 
                            <li key = {item.id}>
                                
                                {
                                    item.check ? <Checkbox checked color="primary" /> : <Checkbox color="primary"/>
                                }
                                {item.value}
                            </li>
                        ))}
                    </ul>
                </Box>
            </Box>
        )
    }
}

export default ItemList;