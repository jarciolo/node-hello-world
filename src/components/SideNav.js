import React from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { List, ListItem, ListItemIcon, ListItemText, Menu, MenuItem, Badge, IconButton, Divider, Toolbar, AppBar, Drawer } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import SettingsIcon from '@material-ui/icons/Settings';
import logo from '../assets/images/logo.png';
import userImage from "../assets/images/user-image.jpg";
import CustomTextField from './Common/CustomTextField';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';

const drawerWidth = 280;

const useStyles = makeStyles((theme) => ({
    siteLogo: {
        position: "relative",
        padding: [[10, 20]],
        "& img": {
            maxWidth: 44,
        }
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
    toolbarIcon: {
        position: "absolute",
        right: 10,
        top: 8,
        zIndex: 9
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        border: 0,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        "& .MuiDrawer-paper": {
            backgroundColor: "#f1f9f7",
            border: 0
        }
    },
    sideNavDrawer: {
        position: "fixed",
        left: 0,
        top: 0,
        bottom: 0,
        "& .MuiDrawer-root": {
            height: "100%"
        },
        "& + div": {
            paddingLeft: 20,
            paddingRight: 20,
            marginTop: 64
        }
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 0,
        },
    },
    mainMenu: {
        "& .MuiListItem-button": {
            color: '#98a7b8',
            borderLeft: "3px solid transparent",
            paddingLeft: 23,
            margin: [[10, 0]],
            "& .MuiListItemIcon-root": {
                minWidth: 45,
                color: '#93b0c8',
            },
            "&.Mui-selected": {
                backgroundColor: "transparent",
                color: "#00bf71",
                borderColor: "#00bf71",
                "& .MuiListItemIcon-root": {
                    color: '#00bf71',
                },
                "& .MuiTypography-root": {
                    color: "#00bf71",
                }
            },
            "&:hover": {
                backgroundColor: "transparent",
                color: "#00bf71",
                "& .MuiListItemIcon-root": {
                    color: '#00bf71',
                },
                "& .MuiTypography-root": {
                    color: "#00bf71",
                }
            }
        }
    },
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    searchBar: {
        flexGrow: 1,
        position: "relative",
        "& .MuiInputBase-input": {
            backgroundColor: "rgba(0,0,0,0.10)",
            border: 0,
            paddingLeft: 40,
            color: "#fff",
            '&::placeholder': {
                color: "#fff",
                opacity: 1
            },
        }
    },
    searchIcon: {
        cursor: "pointer",
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        display: "flex",
        alignItems: "center",
        padding: 8,
        "& svg": {
            fill: "#fff"
        }
    },
    userImage: {
        cursor: "pointer",
        marginLeft: 20,
        "& img": {
            borderRadius: "100%",
            maxWidth: 50,
            border: "4px solid #fff"
        }
    },
    navBarNav: {
        display: "flex",
        "& .MuiListItem-root": {
            width: "auto",
            padding: [[0, 20]],
            "& a": {
                color: "#fff"
            }
        }
    }
}));

export default function Dashboard() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const [darkMode, setDarkMode] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const PprofileMenuOpen = Boolean(anchorEl);

    React.useEffect(() => {
        if (darkMode) {
            document.body.classList.add("darkMode");
        }
        else {
            document.body.classList.remove("darkMode");
        }
    }, [darkMode])

    const handleDrawerOpen = () => {
        setOpen(true);
        document.body.classList.remove("drawerClose");
    };
    const handleDrawerClose = () => {
        setOpen(false);
        document.body.classList.add("drawerClose");
    };

    const handleDarkMode = () => {
        setDarkMode(value => !value);
    }

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
        document.body.classList.add("dropdownOpen");
    };

    const handleClose = () => {
        document.body.classList.remove("dropdownOpen");
        setAnchorEl(null);
    };

    return (
        <>
            <AppBar position="fixed" elevation={0} className={clsx(classes.appBar, { [classes.appBarShift]: open, })}>
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        className={clsx(classes.menuButton, {
                            [classes.hide]: open,
                        })}
                    >
                        <MenuIcon />
                    </IconButton>
                    <div className={classes.searchBar}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <CustomTextField variant="filled" placeholder="Search..." />
                    </div>
                    <List component="nav" className={classes.navBarNav}>
                        <ListItem>
                            <Link to="/">Portfolio</Link>
                        </ListItem>
                        <ListItem>
                            <Link to="/">Watch list</Link>
                        </ListItem>
                        <ListItem>
                            <Link to="/">Calculators</Link>
                        </ListItem>
                        <ListItem>
                            <Link to="/">News</Link>
                        </ListItem>
                    </List>
                    <IconButton color="inherit" onClick={handleDarkMode}>
                        {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
                    </IconButton>
                    <IconButton color="inherit">
                        <Badge badgeContent={4} color="secondary">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                    <div>
                        <div className={classes.userImage} onClick={handleMenu}>
                            <img src={userImage} alt="user" />
                        </div>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            getContentAnchorEl={null}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'center',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'center',
                            }}
                            keepMounted
                            open={PprofileMenuOpen}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>My account</MenuItem>
                        </Menu>
                    </div>
                </Toolbar>
            </AppBar>
                <div className={classes.sideNavDrawer}>
                    <Drawer
                        variant="permanent"
                        className={clsx(classes.drawer, { [classes.drawerOpen]: open, [classes.drawerClose]: !open, })}
                        classes={{ paper: clsx({ [classes.drawerOpen]: open, [classes.drawerClose]: !open, }), }}
                    >
                        <div className={classes.toolbarIcon}>
                            <IconButton onClick={handleDrawerClose}>
                                <MenuIcon />
                            </IconButton>
                        </div>
                        <div className={classes.siteLogo}>
                            <Link to="/">
                                <img src={logo} alt="logo" />
                            </Link>
                        </div>
                        <List className={classes.mainMenu}>
                            <ListItem button selected>
                                <ListItemIcon>
                                    <DashboardIcon />
                                </ListItemIcon>
                                <ListItemText primary="Dashboard" />
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    <ShoppingCartIcon />
                                </ListItemIcon>
                                <ListItemText primary="Orders" />
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    <PeopleIcon />
                                </ListItemIcon>
                                <ListItemText primary="Customers" />
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    <BarChartIcon />
                                </ListItemIcon>
                                <ListItemText primary="Reports" />
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    <LayersIcon />
                                </ListItemIcon>
                                <ListItemText primary="Integrations" />
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    <SettingsIcon />
                                </ListItemIcon>
                                <ListItemText primary="Setting" />
                            </ListItem>
                        </List>
                    </Drawer>
                </div>
        </>
    );
}