export type Poem = { title: string; author: string; writtenDate: string; body: string; };

export type Poet = {
  name: string;
  poems: Poem[]
}
