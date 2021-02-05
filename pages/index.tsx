import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import moment from "moment";
import ReactMarkdown from "react-markdown";
import Link from "next/link";

import { GetStaticProps, PageConfig } from "next";

import { PoetCollection, Poet } from "../types";
import { getFileNamesInFolder, getFolderPath } from "../utils/files";

const poetDirectory = getFolderPath("content", "poets");

function getPoetSlugs() {
  return getFileNamesInFolder(poetDirectory);
}

function getPoetsBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = path.join(poetDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    name: data.name,
    portraitPath: data.portrait,
    poems: data.poems || [],
    slug: realSlug,
  } as Poet;
}

function getAllPoets() {
  const slugs = getPoetSlugs();
  const poets = slugs.map((slug) => getPoetsBySlug(slug));
  return poets;
}

export const getStaticProps: GetStaticProps<{
  poets: Poet[];
}> = async () => {
  const poets = getAllPoets();

  return { props: { poets } };
};

export default function Home({ poets }: { poets: Poet[] }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
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
