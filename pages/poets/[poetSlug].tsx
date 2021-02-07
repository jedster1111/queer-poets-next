import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import ReactMarkdown from "react-markdown";

import { Poem, Poet } from "../../types";
import { getPoetBySlug, getPoetSlugs } from "../../utils/data/poets";
import { getPoemBySlug, sortPoemsByDate } from "../../utils/data/poems";

import styles from "../../styles/PoetPage.module.css";

export const getStaticPaths: GetStaticPaths<{ poetSlug: string }> = async () => {
    const poetSlugs = getPoetSlugs();

    return {
        paths: poetSlugs.map((poetSlug) => ({ params: { poetSlug } })),
        fallback: false,
    };
};

type PoetPageParams = {
    poetSlug: string;
};

export const getStaticProps: GetStaticProps<PoetPageProps, PoetPageParams> = async (context) => {
    const poetSlug = context.params?.poetSlug;

    if (!poetSlug) throw new Error("Couldn't find that poet!");

    const poet = getPoetBySlug(poetSlug);
    const poems = sortPoemsByDate(poet.poemSlugs.map(getPoemBySlug));

    return { props: { poet, poems } };
};

type PoetPageProps = {
    poet: Poet;
    poems: Poem[];
};

export default function PoetPage({ poet, poems }: PoetPageProps): JSX.Element {
    return (
        <main className={styles.main}>
            <div className={styles.portrait} style={{ backgroundImage: `url(${poet.portraitPath})` }} />
            <section className={styles.poemsList}>
                {poems.map((poem) => (
                    <article key={poem.slug}>
                        <h3>{poem.title}</h3>
                        <ReactMarkdown>{poem.body}</ReactMarkdown>
                    </article>
                ))}
            </section>
        </main>
    );
}
