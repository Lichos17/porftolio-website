import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

export const MediaCard = ({ imgLink, imgTitle, cardTitle, description, github, pageLink}) => {

    const classes = useStyles();

    const handleOpen = ( page ) => {
        window.open(page, "_blank")
    }

    return (
        <Card className={`${classes.root} m-1`}>
            <CardActionArea>
                <CardMedia
                className={classes.media}
                image={ imgLink }
                title={ imgTitle }
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    { cardTitle }
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    { description }
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="secondary" onClick={() => handleOpen( github )}>
                    <i style={{color:"black"}} className="fab fa-github"></i><p>&emsp;Source Code</p>
                </Button>
                <Button size="small" color="secondary" onClick={ () => handleOpen(pageLink) }>
                    <i style={{color:"black"}} className="fas fa-globe-europe"></i><p>&emsp;Website</p>
                </Button>
            </CardActions>
        </Card>
    )
}
