import React from 'react'
import { Grid, List, ListItem, makeStyles, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles(() => ({
    footer: {
        borderTop: "1px solid #ebf0f9",
        padding: [[0, 24]],
    },
    Topfooter: {
        padding: [[50, 0]],
        margin: "0 auto",
        maxWidth: "85%"
    },
    widgetTitle: {
        fontWeight: "bold",
        textTransform: "uppercase",
        fontSize: 18
    },
    widget: {
        "& li a": {
            color: "#8a95ad"
        }
    },
    bottomFooter: {
        padding: [[30, 0]],
        borderTop: "1px solid #ebf0f9",
        margin: "0 auto",
        maxWidth: "90%"
    },
    bottomFooterInfo: {
        "& p": {
            fontSize: 14,
            color: "#8a95ad"
        }
    },
    footerLink: {
        display: "flex",
        "& .MuiListItem-root": {
            width: "auto",
            paddingRight: 15,
            "& a": {
                color: "#8a95ad"
            }
        }
    },
    socialLink: {
        textAlign: "right",
        "& a": {
            color: "#8a95ad",
            padding: [[0, 6]]
        }
    }
}));

export default function Footer() {
    const classes = useStyles();
    return (
        <>
            <footer className={classes.footer}>
                <div className={classes.Topfooter}>
                    <Grid container>
                        <Grid item md={3}>
                            <div className={classes.widget}>
                                <Typography className={classes.widgetTitle} variant="h6" component="h6">Moqups</Typography>
                                <List>
                                    <ListItem disableGutters><Link to="/">Tour</Link></ListItem>
                                    <ListItem disableGutters><Link to="/">Feature</Link></ListItem>
                                    <ListItem disableGutters><Link to="/">Benefits</Link></ListItem>
                                    <ListItem disableGutters><Link to="/">Testimonials</Link></ListItem>
                                    <ListItem disableGutters><Link to="/">Pricing</Link></ListItem>
                                    <ListItem disableGutters><Link to="/">Moqups for JIRA & confluence</Link></ListItem>
                                </List>
                            </div>
                        </Grid>
                        <Grid item md={3}>
                            <div className={classes.widget}>
                                <Typography className={classes.widgetTitle} variant="h6" component="h6">Templates</Typography>
                                <List>
                                    <ListItem disableGutters><Link to="/">Wireframes & Mockups</Link></ListItem>
                                    <ListItem disableGutters><Link to="/">Diagrams & Flowchats</Link></ListItem>
                                    <ListItem disableGutters><Link to="/">Mind Maps</Link></ListItem>
                                    <ListItem disableGutters><Link to="/">Process Flowcharts</Link></ListItem>
                                    <ListItem disableGutters><Link to="/">Site Maps</Link></ListItem>
                                    <ListItem disableGutters><Link to="/">Charts & Graphs</Link></ListItem>
                                </List>
                            </div>
                        </Grid>
                        <Grid item md={3}>
                            <div className={classes.widget}>
                                <Typography className={classes.widgetTitle} variant="h6" component="h6">Resources</Typography>
                                <List>
                                    <ListItem disableGutters><Link to="/">Product Update</Link></ListItem>
                                    <ListItem disableGutters><Link to="/">Blog</Link></ListItem>
                                    <ListItem disableGutters><Link to="/">Moqups Chrome Extension</Link></ListItem>
                                    <ListItem disableGutters><Link to="/">Moqups Firefox Add-on</Link></ListItem>
                                </List>
                            </div>
                        </Grid>
                        <Grid item md={3}>
                            <div className={classes.widget}>
                                <Typography className={classes.widgetTitle} variant="h6" component="h6">Support</Typography>
                                <List>
                                    <ListItem disableGutters><Link to="/">Help Center</Link></ListItem>
                                    <ListItem disableGutters><Link to="/">Contact Us</Link></ListItem>
                                    <ListItem disableGutters><Link to="/">FAQ</Link></ListItem>
                                </List>
                            </div>
                        </Grid>
                    </Grid>
                </div>
                <div className={classes.bottomFooter}>
                    <Grid container alignItems="center">
                        <Grid item md={6}>
                            <div className={classes.bottomFooterInfo}>
                                <Typography variant="body1" component="p">&copy; 2021 All Rights Reseved. </Typography>
                                <List className={classes.footerLink}>
                                    <ListItem disableGutters><Link to="/">Terms of Services</Link></ListItem>
                                    <ListItem disableGutters><Link to="/">Privacy Policy</Link></ListItem>
                                </List>
                            </div>
                        </Grid>
                        <Grid item md={6}>
                            <div className={classes.socialLink}>
                                <Link to="/"><TwitterIcon /></Link>
                                <Link to="/"><FacebookIcon /></Link>
                                <Link to="/"><InstagramIcon /></Link>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </footer>
        </>
    )
}
