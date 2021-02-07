import React from "react";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import ReactMarkdown from "react-markdown";
import { Poem, Poet } from "../../types";
import { getPoetBySlug, getPoetSlugs } from "../../utils/data/poets";
import { getPoemBySlug } from "../../utils/data/poems";

export const getStaticPaths: GetStaticPaths<{ poetSlug: string }> = async () => {
    const poetSlugs = getPoetSlugs();

    return {
        paths: poetSlugs.map((poetSlug) => ({ params: { poetSlug } })),
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps<
    {
        poet: Poet;
        poems: Poem[];
    },
    { poetSlug: string }
> = async (context) => {
    const poetSlug = context.params?.poetSlug;

    if (!poetSlug) throw new Error("Couldn't find that poet!");

    const poet = getPoetBySlug(poetSlug);
    const poems = poet.poemSlugs.map(getPoemBySlug);

    return { props: { poet, poems } };
};

export default function PoetPage({ poet, poems }: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
    return (
        <div>
            <div>Poet name: {poet.name}</div>
            <div>
                {poems.map((poem) => (
                    <div key={poem.slug}>
                        <h4>{poem.title}</h4>
                        <ReactMarkdown>{poem.body}</ReactMarkdown>
                    </div>
                ))}
            </div>
        </div>
    );
}
