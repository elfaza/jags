
import React, { useState, useEffect } from "react";
import { fade, makeStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import { Grid, Grow, Slide, Collapse } from "@material-ui/core";
import Lightbox from "react-image-lightbox";

import "react-image-lightbox/style.css";

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

function FAQ(props) {
    const classes = styles();
    const [faq, setFaq] = useState({ 1: false, 2: false, 3: false, 4: false, 5: false });
    const [photoIndex, setPhotoIndex] = useState(null);
    const [images, setImages] = useState(null);
    const [ref, setRef] = useState(null)
    const menuImages = [
        "/menu_6.jpeg",
        "/menu_3.jpeg",
        "/menu_2.jpeg",
        "/menu_1.jpeg",
        "/menu_4.jpeg",
        "/menu_5.jpeg",
    ];
    const faq3Images = [
        "/jags_1.jpeg",
        "/jags_3.jpeg",
        "/ready_cook_menu_1.jpeg",
        "/ready_cook_menu_2.jpeg",
        "/ready_cook_menu_3.jpeg",
        "/ready_cook_menu_4.jpeg",
        "/ready_cook_menu_5.jpeg",
        "/ready_cook_menu_6.jpeg",
        "/ready_cook_menu_7.jpeg",
        "/ready_cook_menu_8.jpeg",
        "/ready_cook_menu_9.jpeg"
    ];
    const faq5Images = [
        "/menu_sedekah.jpeg",
    ]

    const handleOpenFAQ = number => () => {
        const newFaq = { ...faq, [number]: !faq[number] };

        setFaq(newFaq)
    }

    useEffect(() => {
        console.log(props.location.hash)
        if ((props.location.hash === "#menu") && ref) {
            handleOpenFAQ(4)()

            setTimeout(function wait() {
                // After waiting for five secon
                window.scrollTo(0, ref.offsetTop)
            }, 1000);
        }

    }, [ref])

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
                                                                            Area layanan: Handle pintu, toilet dan mesin EDC
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
                                                            <Grid container spacing={2} justify="center">
                                                                {faq3Images.map((image, index) =>
                                                                    <Grid
                                                                        key={index}
                                                                        item
                                                                        sm={6} md={6}
                                                                        style={{ cursor: "pointer" }}
                                                                        onClick={() => {
                                                                            setPhotoIndex(index)
                                                                            setImages(faq3Images)
                                                                        }}
                                                                    >
                                                                        <img src={image} style={{ width: "100%", borderRadius: 12 }} />
                                                                    </Grid>
                                                                )}
                                                            </Grid>
                                                        </div>
                                                    </Collapse>
                                                </div>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <div className={classes.faqContainer} ref={ref => setRef(ref)}>
                                                    <div className={classes.questionContainer} onClick={handleOpenFAQ(4)}>
                                                        <Typography className={classes.question} style={{ color: faq[4] && "#fecb00" }} >Jag’s Kitchen Food Menu list</Typography>
                                                        <CloseIcon style={{ transform: faq[4] ? "rotate(0deg)" : "rotate(-135deg)", transition: "0.5s transform" }} />
                                                    </div>
                                                    <Collapse in={faq[4]}>
                                                        <div style={{ paddingTop: 15 }}>
                                                            <Grid container spacing={2}>
                                                                {menuImages.map((menu, index) =>
                                                                    <Grid
                                                                        key={index}
                                                                        item
                                                                        sm={6} md={6}
                                                                        style={{ cursor: "pointer" }}
                                                                        onClick={() => {
                                                                            setPhotoIndex(index)
                                                                            setImages(menuImages)
                                                                        }}
                                                                    >
                                                                        <img src={menu} style={{ width: "100%", borderRadius: 12 }} />
                                                                    </Grid>
                                                                )}
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
                                                                {faq5Images.map((image, index) =>
                                                                    <Grid
                                                                        key={index}
                                                                        item
                                                                        sm={6}
                                                                        md={6}
                                                                        onClick={() => {
                                                                            setPhotoIndex(index)
                                                                            setImages(faq5Images)
                                                                        }}
                                                                    >
                                                                        <img src={image} style={{ width: "100%", borderRadius: 12 }} />
                                                                    </Grid>
                                                                )}
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
            {photoIndex !== null &&
                <Lightbox
                    mainSrc={images[photoIndex]}
                    nextSrc={images[(photoIndex + 1) % images.length]}
                    prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                    onCloseRequest={() => {
                        setPhotoIndex(null)
                        setImages(null)
                    }}
                    onMovePrevRequest={() =>
                        setPhotoIndex((photoIndex + images.length - 1) % images.length)
                    }
                    onMoveNextRequest={() =>
                        setPhotoIndex((photoIndex + 1) % images.length)
                    }
                />
            }
        </Grid>
    );
}

export default FAQ;
