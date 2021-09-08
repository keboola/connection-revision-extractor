import fs from "fs-extra";
import path from "path";
import url from "url";

const dirname = path.dirname(url.fileURLToPath(import.meta.url));
const DATA_DIR = "/data/";

export async function read(file: string) {
  const p = path.resolve(dirname, path.join(DATA_DIR, file));
  if (!(await fs.pathExists(p))) {
    console.error(`Failed to read '${file}'`);
    process.exit(1);
  }
  return await fs.readFile(p, "utf-8");
}

export async function write(file: string, data: string) {
  const p = path.resolve(dirname, path.join(DATA_DIR, file));
  await fs.ensureFile(p);
  return await fs.writeFile(p, data, "utf-8");
}
