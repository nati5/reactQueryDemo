import * as fs from "fs/promises";
import { join } from "path";
export async function readJson(fileName: string) {
  const fileData = await fs.readFile(
    'consts/json/' + fileName + '.json', 
    "utf8",
  );
  return JSON.parse(fileData);
}
