import { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 4
    },
  }));

class Head extends Component {
    render() {
        var classes = this.props;

      return (
        <div className={classes.root}>
                <Typography variant="h3" align="center" className={classes.title}>
                    TODOLIST v3
                </Typography>
        </div>
      )
    }
  }

export default  withStyles(useStyles)(Head);