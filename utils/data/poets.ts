import { Poet, PoetCollection } from "../../types";
import { getFolderPath, parseFile, getSlugsInFolder } from "../files";

const poetDirectory = getFolderPath("content", "poets");

const assetPrefix = process.env.assetPrefix || "";
console.log(assetPrefix);

export function getPoetSlugs(): string[] {
    return getSlugsInFolder(poetDirectory);
}

export function getPoetBySlug(slug: string): Poet {
    const { attributes } = parseFile<PoetCollection>(poetDirectory, slug);

    return {
        name: attributes.name,
        portraitPath: assetPrefix + attributes.portrait,
        poemSlugs: attributes.poems || [],
        slug,
    };
}

export function getAllPoets(): Poet[] {
    const slugs = getPoetSlugs();
    const poets = slugs.map((slug) => getPoetBySlug(slug));
    return poets;
}
