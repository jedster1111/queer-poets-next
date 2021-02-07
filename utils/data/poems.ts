import moment from "moment";
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

/**
 *  Sorts so that newest poems are at the start and the oldest are at the end.
 */
export const sortPoemsByDate = (poems: Poem[]): Poem[] => [
    ...poems.sort((left, right) => moment.utc(right.addedDate).diff(moment.utc(left.addedDate))),
];
