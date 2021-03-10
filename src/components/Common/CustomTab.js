import React, { Fragment } from 'react';
import { makeStyles, AppBar, Tabs, Tab } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: 'transparent',
        '& .MuiAppBar-root': {
            boxShadow: 'none',
        },
        '& .MuiAppBar-colorPrimary': {
            backgroundColor: 'transparent',
            color: theme.palette.primary.main,
            borderBottom: 0
        },
        '& .MuiTabs-scroller': {
            '& span': {
                backgroundColor: 'transparent',
            }
        },
        '& .MuiTab-textColorInherit': {
            color: '#152c5b',
            opacity: '1',
            textTransform: 'capitalize',
            fontSize: 18,
            borderRadius: 5 
        },
        '& .MuiTab-textColorInherit.Mui-selected': {
            backgroundColor: "#00bf71",
            color: '#ffffff',
            position: 'relative',
            '&::after': {
                content: '""',
                position: 'absolute',
                width: '80%',
                bottom: 0
            }
        },
        '& .MuiTab-root': {
            minWidth: 'unset !important',
            padding: '8px 20px',
            fontSize: 16,
            minHeight: "auto"
        }
    },
    tabCustom: {
        borderRadius: 4
    },
    displayBlock: {
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        }
    },
}));

function a11yProps(index) {
    return {
        id: `user-tab-${index}`,
        'aria-controls': `user-tabPanel-${index}`,
    };
}

function TabPanel(props) {
    const { children, value, index, styles, ...other } = props;



    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`user-tabPanel-${index}`}
            aria-labelledby={`user-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Fragment>
                    {children}

                </Fragment>
            )}
        </div>
    );
}

export default function CustomTabs({ tabs, value, handleChange }) {
    const classes = useStyles();

    return (
        <Fragment>
            <div>
                <div className={classes.root}>
                    <AppBar className={classes.displayBlock} position="static">
                        <Tabs className={classes.tabCustom} value={value} onChange={handleChange}>
                            {
                                tabs && tabs.length > 0 && tabs.map((tab, tabIndex) => (
                                    <Tab key={tabIndex} label={tab.label} {...a11yProps(tabIndex)} />
                                ))
                            }
                        </Tabs>
                    </AppBar>
                    {
                        tabs && tabs.length > 0 && tabs.map((tab, tabIndex) => (
                            <TabPanel key={tabIndex}
                                value={value}
                                index={tabIndex}
                                styles={classes}>
                                {tab.tabComponent}
                            </TabPanel>
                        ))
                    }
                </div>
            </div>
        </Fragment >
    )
}