import React, { useState, useEffect } from "react";
import { fade, makeStyles } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";

import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import PreviousIcon from "@material-ui/icons/ChevronLeft";
import NextIcon from "@material-ui/icons/ChevronRight";
import CloseIcon from "@material-ui/icons/Close";
import { Grid, Grow, Slide, Collapse } from "@material-ui/core";
import Lightbox from "react-image-lightbox";

import "react-image-lightbox/style.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FAQ from "./components/pages/FAQ";

const styles = makeStyles(theme => ({}));

function Navbar() {
    const classes = styles();
    const [anchorEl, setAnchorEl] = useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    function handleProfileMenuOpen(event) {
        setAnchorEl(event.currentTarget);
    }

    function handleMobileMenuClose() {
        setMobileMoreAnchorEl(null);
    }

    function handleMenuClose() {
        setAnchorEl(null);
        handleMobileMenuClose();
    }

    function handleMobileMenuOpen(event) {
        setMobileMoreAnchorEl(event.currentTarget);
    }

    const menuId = "primary-search-account-menu";
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const mobileMenuId = "primary-search-account-menu-mobile";
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton aria-label="Show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="secondary">
                        <MailIcon />
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem>
                <IconButton
                    aria-label="Show 11 new notifications"
                    color="inherit"
                >
                    <Badge badgeContent={11} color="secondary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    aria-label="Account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );

    return (
        <div className={classes.header}>
            <AppBar position="fixed">
                <Toolbar>
                    <Typography className={classes.title} variant="h6" noWrap>
                        Restaurant
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        <IconButton
                            aria-label="Show 4 new mails"
                            color="inherit"
                        >
                            <Badge badgeContent={4} color="secondary">
                                <MailIcon />
                            </Badge>
                        </IconButton>
                        <IconButton
                            aria-label="Show 17 new notifications"
                            color="inherit"
                        >
                            <Badge badgeContent={17} color="secondary">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                        <IconButton
                            edge="end"
                            aria-label="Account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="Show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </div>
    );
}

function BigSlider() {
    const classes = styles();

    let [images, setImages] = useState([
        {
            image: "big_slider_1.jpg",
            title: "Content 1",
            description: "Desc Content 1"
        },
        {
            image: "big_slider_2.jpg",
            title: "Content 2",
            description: "Desc Content 2"
        },
        {
            image: "big_slider_3.jpg",
            title: "Content 3",
            description: "Desc Content 3"
        }
    ]);

    let [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        let timeOut = setTimeout(() => {
            setCurrentIndex((currentIndex + 1) % images.length);
        }, 6000);

        document.querySelectorAll(
            `#ActiveSlider-${currentIndex} #ContentWrapper-${(currentIndex -
                1 +
                images.length) %
            images.length}`
        )[0].style.animation = "none";

        document.querySelectorAll(
            `#ActiveSlider-${currentIndex} #Slider-${(currentIndex -
                1 +
                images.length) %
            images.length}`
        )[0].style.animation = "none";

        return () => clearTimeout(timeOut);
    });

    useEffect(() => {
        document.querySelectorAll(
            `#ActiveSlider-${currentIndex} #ContentWrapper-${currentIndex}`
        )[0].style.animation = "slide 1s linear 1";
        document.querySelectorAll(
            `#ActiveSlider-${currentIndex} #Slider-${currentIndex}`
        )[0].style.animation = "fade 1s linear 1";
    }, [currentIndex]);

    return (
        <div id={`ActiveSlider-${currentIndex}`} className={classes.BigSlider}>
            <div
                style={{
                    display: "flex",
                    position: "absolute",
                    transform: `translateX(-${currentIndex *
                        (100 / images.length)}%`,
                    animation: "fade 1s linear 1"
                }}
            >
                {images.map((image, key) => (
                    <div
                        id={`Slider-${key}`}
                        key={key}
                        style={{
                            minWidth: "100vw",
                            height: "100vh",
                            backgroundImage: `url("${image.image}")`,
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            position: "relative",
                            flex: "1"
                        }}
                    >
                        <div
                            id={`ContentWrapper-${key}`}
                            style={{
                                position: "absolute",
                                top: "25%",
                                left: "5%"
                            }}
                        >
                            <div
                                style={{
                                    background: "black",
                                    margin: "10px",
                                    padding: "20px",
                                    width: "fit-content",
                                    color: "white"
                                }}
                            >
                                {image.title}
                            </div>
                            <div
                                style={{
                                    background: "black",
                                    margin: "10px",
                                    padding: "20px",
                                    width: "fit-content",
                                    color: "white"
                                }}
                            >
                                {image.description}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div style={{ position: "absolute", top: "50%", left: "0" }}>
                <IconButton
                    color="secondary"
                    onClick={() => {
                        setCurrentIndex(
                            (currentIndex - 1 + images.length) % images.length
                        );
                    }}
                >
                    <PreviousIcon />
                </IconButton>
            </div>
            <div style={{ position: "absolute", top: "50%", right: "0" }}>
                <IconButton
                    color="secondary"
                    onClick={() => {
                        setCurrentIndex((currentIndex + 1) % images.length);
                    }}
                >
                    <NextIcon />
                </IconButton>
            </div>
        </div>
    );
}

function WeAreOn() {
    const classes = styles();

    return (
        <div className={classes.WeAreOn}>
            <div style={{ textAlign: "center", marginBottom: "20px" }}>
                <h1 style={{ textTransform: "uppercase" }}>We Are On</h1>
            </div>
            <div
                style={{
                    margin: "0 100px",
                    minHeight: "10vh",
                    display: "flex",
                    alignItems: "center"
                }}
            >
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <div
                            style={{
                                border: "1px black solid",
                                textAlign: "center"
                            }}
                        >
                            Content 1
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <div
                            style={{
                                border: "1px black solid",
                                textAlign: "center"
                            }}
                        >
                            Content 2
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

function App(props) {

    return (
        <Router>
            <Switch>
                <Route path="/" component={FAQ} />
            </Switch>
        </Router>
    );
}

export default App;
