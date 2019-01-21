import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    width: 305,
    height: 230,
    margin: 10,
    display: 'inline-block',
    background: 'rgb(176, 191, 198)',
    verticalAlign: 'top',
    position: 'relative',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 12,
  },
  pos: {
    marginBottom: 12,
  },
  button: {
    position: 'absolute',
    bottom: 12,
  },
};

function SimpleCard(props) {
  const { classes, title, description, url } = props;
  const bull = <span className={classes.bullet}>•</span>;
  const buttonClick = () => {
    window.open(url);
  }

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} variant="h5" component="h2">
          {title}
        </Typography>
        <Typography component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button className={classes.button} size="small" onClick={buttonClick}>Link</Button>
      </CardActions>
    </Card>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);
