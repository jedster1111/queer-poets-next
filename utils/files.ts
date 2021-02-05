import fs from "fs";
import path from "path";

/** 
 * @param locationFromTop If folder is `queerpoets-next/content/poems` args would be ("content", "poems")
 */
export function getFolderPath(...locationFromTop: string[]): string {
  return path.join(process.cwd(), ...locationFromTop)
}

/** 
 * @returns The filenames in the folder, including the file extensions.
 */
export function getFileNamesInFolder(folderPath: string): string[] {
  return fs.readdirSync(folderPath)
}
