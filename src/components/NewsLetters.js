import React from 'react'
import { Container, Grid, makeStyles, Typography, Button, InputAdornment, Divider } from '@material-ui/core'
import CustomTextField from "./Common/CustomTextField";
import MailOutlineIcon from '@material-ui/icons/MailOutline';

const useStyles = makeStyles(() => ({
    newsLettersWrap: {
        padding: [[50, 0]],
    },
    newslatterTitle: {
        marginBottom: 20,
        fontWeight: "bold",
        textAlign: "center"
    },
    newslatterDesc: {
        textAlign: "center",
        marginBottom: 30
    },
    newsLettersForm: {
        textAlign: "center",
        "& .MuiFormControl-root": {
            maxWidth: 300,
            width: "100%"
        },
        "& button": {
            marginLeft: 10
        }
    }
}));

export default function NewsLetters() {
    const classes = useStyles();
    return (
        <>
        <Divider/>
        <div className={classes.newsLettersWrap}>
            <Container>
                <Grid container justify="center">
                    <Grid item xs={8}>
                        <Typography className={classes.newslatterTitle} variant="h5" component="h5">Be the first to know about ASX news everyday.</Typography>
                        <Typography className={classes.newslatterDesc} variant="body1" component="p">Receive daily updates on ASX news straight to your inbox!</Typography>
                        <div className={classes.newsLettersForm}>
                            <CustomTextField
                                type="email"
                                placeholder="Email"
                                variant="outlined"
                                InputProps={{
                                    startAdornment: (
                                      <InputAdornment position="start">
                                        <MailOutlineIcon />
                                      </InputAdornment>
                                    ),
                                  }}
                            />
                            <Button color="primary" variant="contained" disableElevation>Subscribe</Button>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
        </>
    )
}
