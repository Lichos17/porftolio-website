import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';


const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      secondary:{
          main: "#2b2b2b"
      }
    },
});

const useStyles = makeStyles({
    root: {
      width: 345,
      maxWidth: 345
    },
    media: {
      height: 140,
    },
  });

export const MediaCardShow = () => {

    const classes = useStyles();

    const history = useHistory();

    const handleClick = () => {
      history.push('/projects')
    }

    return (
        <MuiThemeProvider theme={theme}>

            <Card className={classes.root} style={{ backgroundColor:"#f1d6ab", display:"flex", flexDirection:"column" }}>

                <CardActions style={{ alignSelf:'center', margin:'auto' }}>
                    <Button classes={{label: 'btn btn-form'}} size="large" color="primary" onClick={ handleClick }>
                        See All
                    </Button>
                </CardActions>
            </Card>
        </MuiThemeProvider>
    )
}
