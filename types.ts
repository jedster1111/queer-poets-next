export type PoemCollection = {
  title: string;
  author: string;
  addedDate: Date;
  body: string;
};

export type Poem = {
  title: string;
  author: string;
  addedDate: string;
  body: string;
  slug: string;
}

export type PoetCollection = {
  name: string;
  portrait: string;
  poems?: string[];
};

export type Poet = {
  name: string;
  portraitPath: string;
  poemSlugs: string[];
  slug: string;
};
