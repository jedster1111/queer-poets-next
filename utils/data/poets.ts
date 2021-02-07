import { Poet, PoetCollection } from "../../types";
import { getFolderPath, parseFile, getSlugsInFolder } from "../files";

const poetDirectory = getFolderPath("content", "poets");

export function getPoetSlugs() {
  return getSlugsInFolder(poetDirectory);
}

export function getPoetBySlug(slug: string): Poet {
  const {attributes} = parseFile<PoetCollection>(poetDirectory, slug)

  return {
    name: attributes.name,
    portraitPath: attributes.portrait,
    poemSlugs: attributes.poems || [],
    slug,
  }
}

export function getAllPoets() {
  const slugs = getPoetSlugs();
  const poets = slugs.map((slug) => getPoetBySlug(slug));
  return poets;
}
