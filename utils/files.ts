import fs from "fs";
import path from "path";
import matter from "gray-matter";

/**
 * @param locationFromTop If folder is `queerpoets-next/content/poems` args would be ("content", "poems")
 */
export function getFolderPath(...locationFromTop: string[]): string {
    return path.join(process.cwd(), ...locationFromTop);
}

/**
 * @returns The filenames in the folder, including the file extensions.
 */
export function getFileNamesInFolder(folderPath: string): string[] {
    return fs.readdirSync(folderPath);
}

export function getSlugsInFolder(folderPath: string): string[] {
    return getFileNamesInFolder(folderPath).map(getSlugFromFileName);
}

/**
 * Parses a Markdown file and returns the front loaded attributes & the body of the md file.
 * @param fileLocation From the top level of this project. Should include file extension
 */
export function parseFile<T>(folderLocation: string, slug: string): { attributes: T; body: string } {
    const fullPath = getFullFilePath(folderLocation, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const parsedContents = matter(fileContents);

    return {
        attributes: parsedContents.data as T,
        body: parsedContents.content,
    };
}

/**
 * @param filename Name of the file including the file extension.
 */
export function getSlugFromFileName(filename: string): string {
    return filename.substr(0, filename.lastIndexOf(".")) || filename;
}

export function getFullFilePath(folderPath: string, filename: string): string {
    return path.join(folderPath, filename);
}
