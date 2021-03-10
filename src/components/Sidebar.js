import { List, ListItem, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import React from 'react'

const useStyles = makeStyles(theme => ({
    sidebar: {
        backgroundColor: "#fff",
        padding: 30,
        boxShadow: "0 0 10px rgba(0,0,0,.1)",
        borderRadius: 10
    },
    heading: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20
    },
    priceList: {
        "&:not(:last-child)": {
            marginBottom: 15,
        },
        "& h6": {
            fontSize: 18,
        },
        "& .MuiListItem-root": {
            justifyContent: "space-between",
            padding: [[10, 0]]
        }
    },
    priceNum: {
        width: "50%",
        textAlign: "right",
        "& span": {
            display: "block",
            "& svg": {
                width: 20,
            }
        }
        
    },
    priceDown: {
        color: "#d82f44",
    },
    priceUp: {
        color: "#19af55",
    }
}));

export default function Sidebar() {
    const classes = useStyles();
    return (
        <div className={classes.sidebar} data="card-box">
            <Typography className={classes.heading} variant="h5" component="h5">BTC Price Statistic</Typography> 
            <div className={classes.priceList}>
                <Typography variant="body1" component="h6">Bitcoin Price Today</Typography>
                <List>
                    <ListItem disableGutters>Bitcoin Price<div className={classes.priceNum}><b>$37,505,65</b></div></ListItem>
                    <ListItem disableGutters>Price Change 24h<div className={classes.priceNum}><b>$-440.06</b><span className={classes.priceDown}><ArrowDropDownIcon/>1.17%</span></div></ListItem>
                    <ListItem disableGutters>24h Low 24h High<div className={classes.priceNum}><b>$36,31750.50 / $33.592.18</b></div></ListItem>
                    <ListItem disableGutters>Traanding Volume 24h<div className={classes.priceNum}><b>$67,857,017,304.35</b><span className={classes.priceUp}><ArrowDropUpIcon/>1.17%</span></div></ListItem>
                    <ListItem disableGutters>Market Dominance<div className={classes.priceNum}><b>60.07%</b></div></ListItem>
                    <ListItem disableGutters>Market Pank<div className={classes.priceNum}><b>#1</b></div></ListItem>
                </List>
            </div>
            <div className={classes.priceList}>
                <Typography variant="body1" component="h6">Bitcoin Market Cap</Typography>
                <List>
                    <ListItem disableGutters>Market Cap<div className={classes.priceNum}><b>$701,111,856,776.23</b><span className={classes.priceDown}><ArrowDropDownIcon/>0.80%</span></div></ListItem>
                    <ListItem disableGutters>Fully Market Cap<div className={classes.priceNum}><b>$790,731,142,550.03</b><span className={classes.priceUp}><ArrowDropDownIcon/>0.87%</span></div></ListItem>
                </List>
            </div>
        </div>
    )
}
