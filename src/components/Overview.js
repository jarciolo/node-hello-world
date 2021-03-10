import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import chartImg from "../assets/images/chart.jpg"

const useStyles = makeStyles(() => ({
    tabBody: {
        marginTop: 15
    },
    heading: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20
    }
}));

export default function Overview() {
    const classes = useStyles();
    return (
        <div className={classes.tabBody}>
            <Typography variant="h5" component="h5" className={classes.heading}>Bitcoin Chart</Typography>
            <img src={chartImg} alt="chart"/>
        </div>
    )
}
