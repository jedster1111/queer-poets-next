import React from "react";
import { AppProps } from "next/dist/next-server/lib/router/router";
import Link from "next/link";
import Head from "next/head";

import styles from "../styles/app.module.css";
import "../styles/globals.css";

const Header = (): JSX.Element => (
    <header className={styles.header}>
        <Link href="/">
            <a className={styles.homeLink}>QUEER POETS IN GREEK</a>
        </Link>
    </header>
);

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <div className={styles.layout}>
            <Head>
                <title>Queer Poets</title>
            </Head>
            <Header />
            <Component {...pageProps} />;
        </div>
    );
}

export default MyApp;
