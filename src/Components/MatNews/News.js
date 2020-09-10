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
      width: '100%',
      margin: '20px',
      boxShadow: '5px 5px 15px lightgray'
    },
    media: {
      height: 140,
    },
});

const News = (props) => {
    const {title, author, description, urlToImage, url} = props.data;

    const classes = useStyles();

    return (
        <div>
            <Card className={classes.root}>
            <CardActionArea>
                <CardMedia className={classes.media} image={urlToImage} title="Contemplative Reptile" />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">{title}</Typography>
                    <Typography className="text-danger mb-1"> {author}</Typography>
                    <Typography variant="body2" color="textSecondary" component="p"> {description} </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button className="btn btn-danger" href={url} size="small"> Learn More </Button>
            </CardActions>
        </Card>
    </div>
    );
};

export default News;