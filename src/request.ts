import fetch from "node-fetch";

export const get = async (url: URL) =>
  fetch(url.toString()).catch(() => {
    console.error(`Failed to fetch ${url}`);
    process.exit(1);
  });
