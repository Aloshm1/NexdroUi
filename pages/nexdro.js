import React from 'react';
import Container from "@mui/material/Container";
import { Typography } from '@mui/material';
import styles from "../styles/Home.module.css"
import Button from "@mui/material/Button";
import Image from 'next/image';
import Box from '@mui/material/Box';

const Nexdro = () => {
    return (
        <Container maxWidth="xl">
            <Box className={styles.banner_mainCnt}>

            <p
                className={styles.bannerText}
            >
                The World's Destination
            </p>
            <p className={styles.bannerText02}>

                For Drone Pilots
            </p>
            <p className={styles.bannerText03}>World's #1 Drone Pilots Network Platform Is Here For You</p>
            {/* <Box sx={{display:{xs:"flex",md:"none", flexDirection:{xs:"column",md:"none"}}}}>

            <p>World's #1 Drone Pilots Network </p>
            <p>Platform Is Here For You</p>
            </Box> */}
            <Box className={styles.bannerBtnContainer}>

            <Button className={styles.bannerButton}
            >
                <span style={{marginRight:"10px",display:"flex",alignItems:"center"}}><Image src="/Group 253.png" height="20" width="20"/></span>
              Add Shots
            </Button>
            </Box>
            </Box>
        </Container>
    );
};

export default Nexdro;
