import React from "react";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Link from "next/link";

import styles from "../styles/PoetsList.module.css";
import { Poet } from "../types";
import { getAllPoets } from "../utils/data/poets";

export const getStaticProps: GetStaticProps<{
    poets: Poet[];
}> = async () => {
    const poets = getAllPoets();

    return { props: { poets } };
};

export default function PoetsList({ poets }: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
    return (
        <section className={styles.wrapper}>
            <div className={styles.poetsList}>
                {poets.map(({ name, slug, portraitPath }) => (
                    <div key={name} className={styles.poetItem}>
                        <Link href={`/poets/${slug}`}>
                            <span className={styles.portraitWrapper}>
                                <div className={styles.name}>{name}</div>
                                <img className={styles.portrait} src={portraitPath} alt="Portrait of the poet" />
                            </span>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
}
