import React from "react";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { Poem, Poet } from "../../types";
import { getPoetBySlug, getPoetSlugs } from "../../utils/data/poets";
import { getPoemBySlug } from "../../utils/data/poems";

export async function getStaticPaths() {
  const poetSlugs = getPoetSlugs();

  return {
    paths: poetSlugs.map((poetSlug) => ({ params: { poetSlug } })),
    fallback: false,
  };
}

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

export default function PoetPage({
  poet,
  poems,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <div>Poet name: {poet.name}</div>
      <div>
        Poems:{" "}
        {poems.map((poem) => (
          <div key={poem.slug}>{poem.title}</div>
        ))}
      </div>
    </div>
  );
}
