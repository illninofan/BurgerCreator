import React from 'react';
import PropTypes from 'prop-types';

import classes from './BurgerIngredient.css';

const burgeringredients = (props) => {

    let ingredient = null;

    switch (props.type) {
        case ('bread-top'):
            ingredient = (
                <div className={classes.BreadTop}>
                    <div className={classes.Seeds1}></div>
                    <div className={classes.Seeds2}></div>
                </div>
            )
            break;
        case ('bread-bottom'):
            ingredient = <div className={classes.BreadBottom}></div>
            break;
        case ('meat'):
            ingredient = <div className={classes.Meat}></div>
            break;
        case ('cheese'):
            ingredient = <div className={classes.Cheese}></div>
        case ('salad'):
            ingredient = <div className={classes.Salad}></div>
            break;
        case ('bacon'):
            ingredient = <div className={classes.Bacon}></div>
            break;
        default:
            ingredient = null;
        }

        return ingredient;
    }

burgeringredients.propTypes = {
    type: PropTypes.string.isRequired
};

export default burgeringredients;