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

const styles = makeStyles(theme => ({
    logo: {
        display: "flex",
        justifyContent: "center",
        height: "50vh",
        padding: "50px",
        background: "url('Jags Kitchen 37.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",

        "& a": {
            zIndex: 1
        },

        [theme.breakpoints.down('xs')]: {
            padding: "20px 10px 10px 10px",

            "& a": {
                display: "flex",
                alignItems: "baseline",
                justifyContent: "center",
            },

            "& img": {
                width: 150
            }
        },
    },

    grow: {
        flexGrow: 1
    },
    title: {
        display: "block"
    },
    inputRoot: {
        color: "inherit"
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("md")]: {
            width: 200
        }
    },
    sectionDesktop: {
        display: "none",
        [theme.breakpoints.up("md")]: {
            display: "flex"
        }
    },
    sectionMobile: {
        display: "flex",
        [theme.breakpoints.up("md")]: {
            display: "none"
        }
    },
    BigSlider: {
        minHeight: "100vh",
        overflow: "hidden",
        position: "relative"
    },
    WeAreOn: {
        minHeight: "25vh"
    },
    MenuList: {
        minHeight: "100vh"
    },
    News: {
        minHeight: "100vh"
    },
    Gallery: {
        minHeight: "100vh"
    },
    ContactUs: {
        minHeight: "100vh"
    },

    title: {
        fontWeight: "bold",
        borderBottom: "2px #fecb00 solid",
        paddingBottom: 5,
        margin: "0px 15%",

        [theme.breakpoints.down('xs')]: {
            fontSize: "12px",
        },
    },

    description: {

        [theme.breakpoints.down('xs')]: {
            fontSize: "10px",
        },
    },

    faqTitle: {
        fontWeight: "bold",

        [theme.breakpoints.down('xs')]: {
            fontSize: "12px",
        },
    },

    faqContainer: {
        padding: 30,
        borderTop: "1px lightgrey solid",
        borderBottom: "1px lightgrey solid",

        [theme.breakpoints.down('xs')]: {
            padding: 10
        },
    },

    questionContainer: {
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        cursor: "pointer",
        userSelect: "none",

        "& svg": {
            fontSize: 20,
            marginLeft: 5,
            color: "#fecb00"
        }
    },

    question: {
        fontWeight: "bold",

        [theme.breakpoints.down('xs')]: {
            fontSize: "10px",
        },
    },

    answerQuestion1: {
        [theme.breakpoints.down('xs')]: {
            fontSize: "10px",
        },
    },

    answerQuestion2: {
        [theme.breakpoints.down('xs')]: {
            fontSize: "10px",
            paddingLeft: 15
        },

        "& li": {
            paddingBottom: 5
        }
    },

    container: {
        margin: "0px 15% 50px 15%",
        transform: "translateY(-135px)",
        padding: 50,
        backgroundColor: "white",
        borderRadius: 12,
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        [theme.breakpoints.down('xs')]: {
            padding: 20,
            margin: "0px 10% 50px 10%",
            transform: "translateY(-100px)"
        },
        [theme.breakpoints.only('sm')]: {
            padding: 30,
            margin: "0px 10% 50px 10%",
            transform: "translateY(-120px)"
        },
    },
}));

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

    let [images, setImage] = useState([
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

function App() {
    const classes = styles();
    const [faq, setFaq] = useState({ 1: false, 2: false, 3: false });

    const handleOpenFAQ = number => () => {
        const newFaq = { ...faq, [number]: !faq[number] };

        setFaq(newFaq)
    }

    return (
        <Grid container spacing={1}>
            <Grid item xs={12}>
                <div className={classes.logo}>
                    <a href="http://localhost:3000">
                        <img id="logo-main" src="04.png" width="200" alt="Logo Thing main logo" />
                    </a>
                    <div style={{ position: "absolute", top: 0, width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 0, 0.2)" }}></div>
                </div>
            </Grid>
            <Grid item xs={12}>
                <div className={classes.container}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Typography align="center" variant="h4" className={classes.title}>JAG'S KITCHEN SIAP MELAYANI</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography className={classes.description} >
                                Melihat perkembangan terkini terkait penyebaran virus COVID-19 (Coronavirus), kami menginformasikan bahwa JAG'S KITCHEN tetap akan beroperasi untuk melayani pelanggan dengan tetap mengedepankan aspek kesehatan untuk kenyamanan seluruh pelanggan.
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <div >
                                <Grid container spacing={3}>
                                    <Grid item xs={12}>
                                        <Typography align="center" variant="h4" className={classes.faqTitle}>FAQ</Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12}>
                                                <div className={classes.faqContainer}>
                                                    <div className={classes.questionContainer} onClick={handleOpenFAQ(1)}>
                                                        <Typography className={classes.question} style={{ color: faq[1] && "#fecb00" }}>Apakah JAG'S KITCHEN tetap buka dengan kondisi covid-19?</Typography>
                                                        <CloseIcon style={{ transform: faq[1] ? "rotate(0deg)" : "rotate(-135deg)", transition: "0.5s transform" }} />
                                                    </div>
                                                    <Collapse in={faq[1]}>
                                                        <div style={{ paddingTop: 15 }}>
                                                            <Typography className={classes.answerQuestion1}>Ya, JAG'S KITCHEN kami akan tetap beroperasi dan siap melayani pelanggan.</Typography>
                                                        </div>
                                                    </Collapse>
                                                </div>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <div className={classes.faqContainer}>
                                                    <div className={classes.questionContainer} onClick={handleOpenFAQ(2)}>
                                                        <Typography className={classes.question} style={{ color: faq[2] && "#fecb00" }} >Langkah apa yang sudah dilakukan untuk memastikan kesehatan dan kebersihan di JAG'S KITCHEN?</Typography>
                                                        <CloseIcon style={{ transform: faq[2] ? "rotate(0deg)" : "rotate(-135deg)", transition: "0.5s transform" }} />
                                                    </div>
                                                    <Collapse in={faq[2]}>
                                                        <div style={{ paddingTop: 10 }}>
                                                            <ul className={classes.answerQuestion2}>
                                                                <li>Pengecekan suhu tubuh bagi semua customer dan staff JAG'S KITCHEN yg akan memasuki area resto. Setiap customer atau staff JAG'S KITCHEN dengan suhu tubuh di atas 37.5 C tidak boleh memasuki area resto.</li>
                                                                <li>
                                                                    Pembersihan dan penyemprotan disinfektan di area yang sering tersentuh tangan, termasuk:
                                                                    <ul>
                                                                        <li>
                                                                            Area layanan: Handle pintu, toilet, mesin EDC dan ATM(cabang jagakarsa)
                                                                        </li>
                                                                        <li>
                                                                            Area dispenser: Nozzle
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                                <li>Menyediakan hand sanitizer di beberapa area.</li>
                                                                <li>Menginstruksikan kepada staff JAG'S KITCHEN untuk menjaga kebersihan diri dan cuci tangan dengan air mengalir dan sabun secara rutin.</li>
                                                                <li>Menyediakan alternatif pembayaran dengan dompet digital.</li>
                                                            </ul>
                                                        </div>
                                                    </Collapse>
                                                </div>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <div className={classes.faqContainer}>
                                                    <div className={classes.questionContainer} onClick={handleOpenFAQ(3)}>
                                                        <Typography className={classes.question} style={{ color: faq[3] && "#fecb00" }}>Service apa yang JAG'S KITCHEN sediakan dengan kondisi Covid-19 ini?</Typography>
                                                        <CloseIcon style={{ transform: faq[3] ? "rotate(0deg)" : "rotate(-135deg)", transition: "0.5s transform" }} />
                                                    </div>
                                                    <Collapse in={faq[3]}>
                                                        <div style={{ paddingTop: 15 }}>
                                                            <Grid container spacing={2}>
                                                                <Grid item sm={6} md={6}>
                                                                    <img src="/jags_1.jpeg" style={{ width: "100%", borderRadius: 12 }} />
                                                                </Grid>
                                                                <Grid item sm={6} md={6}>
                                                                    <img src="/jags_3.jpeg" style={{ width: "100%", borderRadius: 12 }} />
                                                                </Grid>
                                                                <Grid item sm={6} md={4}>
                                                                    <img src="/ready_cook_menu_1.jpeg" style={{ width: "100%", borderRadius: 12 }} />
                                                                </Grid>
                                                                <Grid item sm={6} md={4}>
                                                                    <img src="/ready_cook_menu_2.jpeg" style={{ width: "100%", borderRadius: 12 }} />
                                                                </Grid>
                                                                <Grid item sm={6} md={4}>
                                                                    <img src="/ready_cook_menu_3.jpeg" style={{ width: "100%", borderRadius: 12 }} />
                                                                </Grid>
                                                                <Grid item sm={6} md={4}>
                                                                    <img src="/ready_cook_menu_4.jpeg" style={{ width: "100%", borderRadius: 12 }} />
                                                                </Grid>
                                                                <Grid item sm={6} md={4}>
                                                                    <img src="/ready_cook_menu_5.jpeg" style={{ width: "100%", borderRadius: 12 }} />
                                                                </Grid>
                                                                <Grid item sm={6} md={4}>
                                                                    <img src="/ready_cook_menu_6.jpeg" style={{ width: "100%", borderRadius: 12 }} />
                                                                </Grid>
                                                            </Grid>
                                                        </div>
                                                    </Collapse>
                                                </div>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <div className={classes.faqContainer}>
                                                    <div className={classes.questionContainer} onClick={handleOpenFAQ(4)}>
                                                        <Typography className={classes.question} style={{ color: faq[4] && "#fecb00" }} >Jag’s Kitchen Food Menu list</Typography>
                                                        <CloseIcon style={{ transform: faq[4] ? "rotate(0deg)" : "rotate(-135deg)", transition: "0.5s transform" }} />
                                                    </div>
                                                    <Collapse in={faq[4]}>
                                                        <div style={{ paddingTop: 15 }}>
                                                            <Grid container spacing={2}>
                                                                <Grid item sm={6} md={6}>
                                                                    <img src="/menu_6.jpeg" style={{ width: "100%", borderRadius: 12 }} />
                                                                </Grid>
                                                                <Grid item sm={6} md={6}>
                                                                    <img src="/menu_3.jpeg" style={{ width: "100%", borderRadius: 12 }} />
                                                                </Grid>
                                                                <Grid item sm={6} md={6}>
                                                                    <img src="/menu_2.jpeg" style={{ width: "100%", borderRadius: 12 }} />
                                                                </Grid>
                                                                <Grid item sm={6} md={6}>
                                                                    <img src="/menu_1.jpeg" style={{ width: "100%", borderRadius: 12 }} />
                                                                </Grid>
                                                                <Grid item sm={6} md={6}>
                                                                    <img src="/menu_4.jpeg" style={{ width: "100%", borderRadius: 12 }} />
                                                                </Grid>
                                                                <Grid item sm={6} md={6}>
                                                                    <img src="/menu_5.jpeg" style={{ width: "100%", borderRadius: 12 }} />
                                                                </Grid>
                                                            </Grid>
                                                        </div>
                                                    </Collapse>
                                                </div>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <div className={classes.faqContainer}>
                                                    <div className={classes.questionContainer} onClick={handleOpenFAQ(5)}>
                                                        <Typography className={classes.question} style={{ color: faq[5] && "#fecb00" }} >Paket Berbagi Sedekah</Typography>
                                                        <CloseIcon style={{ transform: faq[5] ? "rotate(0deg)" : "rotate(-135deg)", transition: "0.5s transform" }} />
                                                    </div>
                                                    <Collapse in={faq[5]}>
                                                        <div style={{ paddingTop: 15 }}>
                                                            <Grid container spacing={2}>
                                                                <Grid item sm={6} md={6}>
                                                                    <img src="/menu_sedekah.jpeg" style={{ width: "100%", borderRadius: 12 }} />
                                                                </Grid>
                                                            </Grid>
                                                        </div>
                                                    </Collapse>
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </Grid>
        </Grid>
    );
}

export default App;
