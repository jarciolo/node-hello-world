import React from 'react'
import { Breadcrumbs, Container, Grid, List, ListItem, makeStyles, Typography } from '@material-ui/core';
import dashboardImage from '../assets/images/dashboard-image.jpg'
import { Link } from 'react-router-dom';


const useStyles = makeStyles(() => ({
    bannerWrap: {
        margin: [[20, 0, 40, 0]],
        padding: 20,
        backgroundImage: `url(${dashboardImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        borderRadius: 10,
        height: 250,
        display: "flex",
        flexDirection: "column"
    },
    breadcrumbs: {
        "& .MuiBreadcrumbs-li": {
            "& a": {
                color: "#fff",
                textDecoration: "underline"
            },
            "& p": {
                color: "#fff"
            }
        },
        "& .MuiBreadcrumbs-separator": {
            color: "#fff",
            margin: [[0,15]]
        }
    },
    heading: {
        fontSize: 24,
        color: "#fff",
        fontWeight: "bold",
        marginTop: 15
    },
    MaterialsValue: {
        marginTop: "auto",
        "& .MuiList-root": {
            display: "flex",
            padding: 0
        },
        "& .MuiListItem-root": {
            color: "#fff",
            display: "block",
            width: "auto",
            textTransform: "uppercase",
            padding: [[0, 20]],
            "&:first-child": {
                paddingLeft: 0
            },
            "& span": {
                display: "block",
                marginTop: 5,
                textTransform: "capitalize",
            }
        }
    }
}));

export default function DashBoardBanner() {
    const classes = useStyles();
    return (
        <div className={classes.bannerWrap}>
            <Typography className={classes.heading} variant="body1" component="h3">S16 Materials</Typography>
            <div className={classes.MaterialsValue}>
                <List>
                    <ListItem>Market Cap <span>AU$26.4m</span></ListItem>
                    <ListItem>Last Updated <span>2021/02/05 07:06 UTC</span></ListItem>
                    <ListItem>Data Sources <span>Company Financials</span></ListItem>
                </List>
            </div>
        </div>
    )
}
