import { Component } from "react";
import Card from '@material-ui/core/Card';
import { IconButton } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import { CardActionArea } from "@material-ui/core";
import { CardContent } from "@material-ui/core";
import { CardActions } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";

class ItemList extends Component{

    render(){
        return(
            <Grid container spacing={4} justifyContent="center">
                {this.props.item.filter(item=>item.id !== '0').map( item =>(
                    <Grid item xs={12} sm={6} md={4} key={item.id}>
                        <Card>
                            <CardActionArea>
                            <Link to={`/update/${item.id}`} style={{textDecoration : 'none'}}>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">{item.value}</Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">{item.content}</Typography>
                                </CardContent>
                                </Link>
                            </CardActionArea>
                            <CardActions>
                                <IconButton onClick={(e)=>{
                                    this.props.onDeleteList(item.id);
                                }}>
                                    <DeleteIcon fontSize="small" />
                                </IconButton>
                            </CardActions>
                        </Card>
                    </Grid> 
                ))}
            </Grid>
        )
    }
}

export default ItemList;