import React from 'react';
import { Container, Grid, makeStyles, Typography } from '@material-ui/core';
import placeholder from '../assets/images/placeholder.jpg'
import CustomTabs from './Common/CustomTab';
import Overview from './Overview';
import Market from './Market';
import Sidebar from './Sidebar';
import NewsLetters from './NewsLetters';
import Table from "./Table"


const useStyles = makeStyles(() => ({
    dashboradWrap: {
        padding: [[95, 0, 24]],
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: "85%"
    },
    peopleWorldWide: {
        display: "flex",
        alignItems: "center",
        "& p": {
            color: "#8592a6"
        }
    },
    peopleImg: {
        "& img": {
            marginLeft: 15
        }
    },
    chartWrap: {
        padding: 30,
        boxShadow: "0 0 10px rgba(0,0,0,.1)",
        borderRadius: 10
    },
    announcements: {
        padding: [[30,0, 50]],
        "& h5": {
            marginBottom: 20,
            fontWeight: "bold"
        },
        "& p": {
            marginBottom: 15
        }
    }
}));

const tabs = [
    {
        label: 'Overview',
        tabComponent: <Overview />
       
    },
    {
        label: 'Market',
        tabComponent: <Market />
       
    },
    {
        label: 'Historical Data    ',
        tabComponent: <Market />
       
    },
    {
        label: 'News',
        tabComponent: <Market />
       
    },
    {
        label: 'Socials',
        tabComponent: <Market />
       
    },
    {
        label: 'Rating',
        tabComponent: <Market />
       
    },
    {
        label: 'Analysis',
        tabComponent: <Market />
       
    },
  ] 

const DashBoardPage = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div className={classes.dashboradWrap}>
            {/* <Grid container justify="flex-end">
                <Grid item>
                    <div className={classes.peopleWorldWide}>
                        <Typography variant="body1" component="p">Used by 1,500,000 people worldwide</Typography>
                        <div className={classes.peopleImg}>
                            <img src={placeholder} alt="image" />
                            <img src={placeholder} alt="image" />
                            <img src={placeholder} alt="image" />
                            <img src={placeholder} alt="image" />
                        </div>
                    </div>
                </Grid>
            </Grid> */}
            <Grid container spacing={4}>
                <Grid item md={8}>
                    <div className={classes.chartWrap} data="card-box">
                        <CustomTabs tabs={tabs} handleChange={handleChange} value={value} />
                    </div>
                </Grid>
                <Grid item md={4}>
                    <Sidebar/>
                </Grid>
            </Grid>
            <Table/>
            <Grid container spacing={4}>
                <Grid item md={12}>
                    <div className={classes.announcements}>
                        <Typography variant="h5" component="h5">Announcements</Typography>
                        <Typography variant="body1" component="p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Typography>
                        <Typography variant="body1" component="p">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</Typography>    
                    </div>
                </Grid>
            </Grid>
            <NewsLetters/>
        </div>

    )
}
export default DashBoardPage
