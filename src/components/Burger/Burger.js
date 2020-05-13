import React from 'react';

import classes from './BurgerIngredients';

const burger = (props) => {
    return (
        <div className={classes.Burger}>
        <BurgerIngredients type='bread-top' />
        <BurgerIngredients type='cheese' />
        <BurgerIngredients type='meat' />
        <BurgerIngredients type='cheese' />
        <BurgerIngredients type='bread-bottom' />
    </div>
};

export default burger;