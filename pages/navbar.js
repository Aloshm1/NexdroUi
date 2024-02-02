import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Image from 'next/image';
import Button from "@mui/material/Button";

import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from "@mui/material/Drawer";
import styles from '../styles/Home.module.css'

function Navbar() {
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [drawerOpen, setDrawerOpen] = React.useState(false)

    


   
    const handleOPenDrawerMenu = () => {
        setDrawerOpen(true)
    }
    const handleCloseMenuIcon = () => {
        setDrawerOpen(false)
    }
    const navLinkStyleSignin = {
        display: { xs: "none",sm:"initial", md: "initial" },
        border: "1px solid #DDDDDD",
        borderRadius: "30px",
        fontSize: "16px",
        textTransform: 'capitalize',

        fontFamily: "roboto-regular",
        color: "#303F4B",
        "&:hover": {
            backgroundColor: "black",
            color: "white"
        },
        padding: "9px 20px",
        '@media (max-width: 760px)': {
           
            padding: "6px 16px",
           
          },

    };
    const navLinkMobileSignin = {
        display: { xs: "flex", sm: "flex", md: "none" },
        border: "1px solid #DDDDDD",
        borderRadius: "30px",
        fontSize: "16px",
        textTransform: 'capitalize',
        background: "#12E3B1",

        fontFamily: "roboto-regular",
        color: "#FFFF",
        "&:hover": {
            backgroundColor: "black",
            color: "white"
        },
        padding: "7px 13px",

    };
    const navLinkMobileSignUp = {
        display: { xs: "flex", sm: "flex", md: "none" },
        border: "1px solid #DDDDDD",
        borderRadius: "30px",
        fontSize: "16px",
        textTransform: 'capitalize',
        background: "#12E3B1",

        fontFamily: "roboto-regular",
        color: "#FFFF",
        "&:hover": {
            backgroundColor: "black",
            color: "white"
        },
        padding: "7px 13px",
    }
    const navLinkStyleSignup = {
        display: { xs: "none", sm:"initial",md: "initial" },
        border: "1px solid #DDDDDD",
        borderRadius: "30px",
        color: "white",
        textTransform: 'capitalize',


        fontSize: "16px",
        fontFamily: "roboto-regular",
        "&:hover": {
            backgroundColor: "black",
            color: "white"
        },
        padding: "9px 20px",
        background: "#12E3B1",
        '@media (max-width: 760px)': {
           
            padding: "6px 16px",
           
          },

    }
    const shotsStyles = {
        fontSize: "16px",
        fontFamily: "roboto-regular",
        display: "flex",
        alignItems: "center",

        color: "#374957"
    }
    const drawerShotsStyles = {
        fontSize: "18px",
        fontFamily: "roboto-regular",
        display: "flex",
        alignItems: "center",

        color: "#374957"


    }
    const mainLinksContainer = {
        display: { xs: 'none',sm:"flex",md: "flex" },gap:  "28px", alignItems: "center",
        '@media (max-width: 760px)': {
           
           gap:"12px"
           
          },
    }
    const linksContainer = {
        display: { xs: 'none',sm:"flex",md: "flex" }, gap: "9px", alignItems: "center"

    }
    const iconContainer = {

        display: { xs: 'flex',sm:"none",md: 'none' }, justifyContent: { xs: "center", md: "none" },
        alignItems: { xs: "center", md: "none" },
    }
    const searchContainer = {
        display: { xs: 'none',sm:"flex", md: 'flex', alignItems: "center" }
    }
    const appMain = {
        boxShadow: "none", background: "white"
    }
    const toolBarContainer = {
        display: { xs: 'flex', sm: "flex", md: 'flex', }, justifyContent: { xs: "space-between", sm: "space-between" }
    }
    const navbar_logoContainer = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
    const mobileSignupContainer = {
        // display:"flex",
        display: { xs: "flex",sm:"none", md: "none" },
        justifyContent: "çenter",
        alignItems: "center",
        gap: "10px"
    }
    const menuBoxIconContainer = {
        position: "absolute",
        top: "44px",
        left: '10px'
    }
    const menuLoginContainer = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap:"2px",
        '@media (min-width: 430px)': {
             gap:"100px"
        }

    }
    const menu_loginDiv = {
        display: "flex",
        alignItems: "center",
        gap: "12px",
        '@media (min-width: 430px)': {
           
            gap: '30px', 
           
          },
    }
    const drawer_btnCnt = {
        display: "flex",
        gap: "12px",
        alignItems: "center",
        marginRight: "30px"
    }
    const drawerLinkContainer = {
        display:"flex",
        flexDirection:"column",
        justifyContent:"flex-start",
        alignItems:"flex-start",
        gap:"35px",
        marginTop:"41px",
        marginLeft:"35px"
       

    }
    const navMenuCnt = {


        display: { xs: 'none',sm:"flex", md: 'flex' },
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: '41px',
        color: '#374957',
        listStyle: 'none',
        padding: 0,
        margin: 0,
        '@media (max-width: 760px)': {
           
            gap: '13px', 
           
          },
    }
    return (

        <AppBar position="static" sx={{ ...appMain }}>
            <Container maxWidth="xl" >
                <Toolbar disableGutters sx={{ ...toolBarContainer }}>
                    <Box sx={{ ...navbar_logoContainer }} >
                        <IconButton
                            size="large"
                            edge="first"
                            color="black"
                            aria-label="menu"
                            sx={{ ...iconContainer }}
                            onClick={handleOPenDrawerMenu}
                        >
                            <Image src="/menu.png" height="24" width="24" />
                        </IconButton>
                        <Box sx={{ display: { xs: "none", md: "flex" } }}>

                            <Image src="/Nexdro.png" height="30" width="120" />
                        </Box>
                        <Box sx={{ display: { xs: "flex", md: "none" } }}>

                            <Image src="/Nexdro.png" height="28" width="92" />
                        </Box>

                    </Box>


                    <Box
                        component="ul"
                        sx={{
                           ...navMenuCnt
                        }}
                    >
                        <Typography component="li" sx={{ ...shotsStyles }}>
                            <span style={{ marginRight: '5px' }}>
                                <Image src="/image (3).png" height="21" width="21" />
                            </span>
                            Shots
                            <span>
                                <KeyboardArrowDownOutlinedIcon
                                    style={{ fontSize: '15px', color: '#12E4B2', marginTop: '7px', marginLeft: '5px' }}
                                />
                            </span>
                        </Typography>
                        <Typography component="li" sx={{ ...shotsStyles }}>
                            Jobs
                        </Typography>
                        <Typography component="li" sx={{ ...shotsStyles }}>
                            Find Pilots
                        </Typography>
                    </Box>

                    <Box variant="div" sx={{ ...mainLinksContainer }}>
                        <Box variant="div" sx={{ ...linksContainer }}>
                            <Button

                                sx={{
                                    ...navLinkStyleSignin
                                }}
                            >
                                Sign In
                            </Button>


                            <Button

                                sx={{
                                    ...navLinkStyleSignup,

                                }}
                            >
                                Sign Up
                            </Button>



                        </Box>

                        <Box sx={{ ...searchContainer }} >

                            <Image src='/Path 3.png' height={19} width={19} />



                        </Box>
                    </Box>


                    <Box sx={{ ...mobileSignupContainer }}>
                        <Image src='/Path 3.png' height={15} width={15} />
                        <Button

                            sx={{
                                ...navLinkMobileSignin
                            }}
                        >
                            Sign Up
                        </Button>

                    </Box>



                    <Drawer
                        PaperProps={{
                            style: {
                                width: 600,
                                height: 300,
                                borderBottomLeftRadius: 16,
                                borderBottomRightRadius: 16,
                            },
                        }}
                        anchor="top"
                        open={drawerOpen}
                        onClose={() => setDrawerOpen(false)}
                        className={styles.drawercnt}
                    >
                        <Box varient="div" sx={{ ...menuBoxIconContainer }} onClick={handleCloseMenuIcon}>

                            <Box varient="div" sx={{ ...menuLoginContainer }}>
                                <Box varient="div" sx={{ ...drawer_btnCnt }}>

                                    <Image src="/menu (1).png" height="24" width="24" />
                                    <Image src="/Nexdro.png" height="28" width="92" />
                                </Box>
                                <Box varient="div" sx={{ ...menu_loginDiv }}>


                                    <Button

                                        sx={{
                                            ...navLinkMobileSignin
                                        }}
                                    >
                                        Sign Up
                                    </Button>
                                    <Button

                                        sx={{
                                            ...navLinkMobileSignUp
                                        }}
                                    >
                                        Sign In
                                    </Button>
                                </Box>

                            </Box>
                            <Box varient="div" sx={{...drawerLinkContainer}}>
                                <Typography component="li" sx={{ ...drawerShotsStyles }}>
                            <span style={{ marginRight: '5px' }}>
                                <Image src="/image (3).png" height="21" width="21" />
                            </span>
                            Shots
                            <span>
                                <KeyboardArrowDownOutlinedIcon
                                    style={{ fontSize: '15px', color: '#12E4B2', marginTop: '7px', marginLeft: '5px' }}
                                />
                            </span>
                        </Typography>
                        <Typography component="li" sx={{ ...drawerShotsStyles }}>
                            Jobs
                        </Typography>
                        <Typography component="li" sx={{ ...drawerShotsStyles }}>
                            Find Pilots
                        </Typography>
                                
                            </Box>
                        </Box>
                    </Drawer>


                </Toolbar>
            </Container>
        </AppBar>

    );
}

export default Navbar;
