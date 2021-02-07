import { Poem, PoemCollection } from "../../types";
import { getFolderPath, parseFile } from "../files";
import { dateToString } from "./collectionConversionUtils";

const poemsDirectory = getFolderPath("content", "poems");

export function getPoemBySlug(slug: string): Poem {
    const { attributes, body } = parseFile<PoemCollection>(poemsDirectory, slug);

    return {
        title: attributes.title,
        author: attributes.author,
        addedDate: dateToString(attributes.addedDate),
        body,
        slug,
    };
}
