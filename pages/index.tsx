import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import moment from "moment";
import ReactMarkdown from "react-markdown";

import { GetStaticProps, InferGetStaticPropsType } from "next";

import { Poem } from "../types";

const poemDirectory = path.join(process.cwd(), "content", "poems");

function getPoemSlugs() {
  return fs.readdirSync(poemDirectory);
}

function getPoemBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = path.join(poemDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    ...data,
    writtenDate: moment(data.writtenDate).format(),
    body: content,
  } as Poem;
}

function getAllPoems() {
  const slugs = getPoemSlugs();
  const poems = slugs.map((slug) => getPoemBySlug(slug));
  return poems;
}

export const getStaticProps: GetStaticProps<{
  poems: Poem[];
}> = async () => {
  const poems = getAllPoems();

  return { props: { poems } };
};

export default function Home({
  poems,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          {poems.map(({ title, body }) => (
            <div key={title}>
              <h4>{title}</h4>
              <ReactMarkdown>{body}</ReactMarkdown>
            </div>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
