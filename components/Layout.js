import React, { Component } from "react";
import NavBar from './nav';
import Head from 'next/head';


function setTheme(isWhiteNav) {
    if (typeof window !== 'undefined'){
        if (isWhiteNav) {
            document.documentElement.style.setProperty("--pri", "white");
            document.documentElement.style.setProperty("--sec", "black");
        } else {
            document.documentElement.style.setProperty("--pri", "black");
            document.documentElement.style.setProperty("--sec", "white");
        }
    }
}


const Layout = (props) => (
    < div onLoad={setTheme(props.isWhiteNav)} >
        <Head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
            <title>TEDxKasetsartU</title>
            <link rel="shortcut icon" href="img/favicon.png" type="image/x-icon" />
            <script src="https://kit.fontawesome.com/21af1254cb.js"></script>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"></link>
            <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/css?family=Kanit&display=swap" rel="stylesheet"></link>
        </Head>

        <NavBar isWhiteNav={props.isWhiteNav} />
        <div className="top-push"></div>
        {props.children}
        <div className="bot-push"></div>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>

        <script>
            AOS.init();
        </script>
    </div >
);

export default Layout;