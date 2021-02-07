import React from "react";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import Link from "next/link";

import styles from "../styles/Home.module.css";
import { Poet } from "../types";
import { getAllPoets } from "../utils/data/poets";

export const getStaticProps: GetStaticProps<{
    poets: Poet[];
}> = async () => {
    const poets = getAllPoets();

    return { props: { poets } };
};

export default function Home({ poets }: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
    return (
        <div className={styles.container}>
            <Head>
                <title>Queer Poets</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <div>
                    {poets.map(({ name, slug, portraitPath }) => (
                        <div key={name}>
                            <h4>{name}</h4>
                            <img src={portraitPath} />
                            <Link href={`/poets/${slug}`}>
                                <a>Click Me!</a>
                            </Link>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
