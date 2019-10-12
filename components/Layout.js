import NavBar from './nav';
import Head from 'next/head';

const Layout = (props) => (
    <div>
        <Head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <title>TEDxKasetsartU</title>
            <link rel="shortcut icon" href="img/favicon.png" type="image/x-icon" />
            <script src="https://kit.fontawesome.com/21af1254cb.js"></script>
        </Head>
        <NavBar />
        {props.children}
    </div>
);

export default Layout;