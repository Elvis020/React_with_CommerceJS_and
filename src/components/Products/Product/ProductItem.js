import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import classes from '*.module.css';

const ProductItem = ({ name, description, price }) => {
    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image='' title={name} />
            <CardContent>
                <div className={classes.cardContent} >
                    <Typography variant='h5' gutterBottom>
                        {name}
                    </Typography>
                    <Typography variant='h5' >
                        {price}
                    </Typography>
                </div>
                <Typography variant='h2' color='textSecondary'>
                    {description}
                </Typography>

                <CardActions disableSpacing className={classes.cardActions}>
                    <IconButton aria-label='Add to Cart' >
                        <AddShoppingCart />
                    </IconButton>
                </CardActions>
            </CardContent>
        </Card>
    )
}

export default ProductItem
