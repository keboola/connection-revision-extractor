import * as File from "./file.js";
import * as Request from "./request.js";
import * as CSV from "./csv.js";
import * as DateUtil from "date-fns";

export default async function () {
  const config = JSON.parse(await File.read("config.json"));
  const host = config.parameters?.host;
  if (!host) {
    return console.error("Missing parameter 'host'");
  }

  if (!/^https:\/\/connection\.(.+\.)?keboola\.com$/.test(host)) {
    return console.error("Parameter 'host' has invalid format");
  }

  console.log("Reading revision");
  const storage: any = await Request.get(new URL("v2/storage", host)).then((body) => body.json());

  console.log("Exporting data");
  await File.write(
    "out/tables/revisions.csv",
    await CSV.serialize([
      ["date", "host", "revision"],
      [DateUtil.format(new Date(), "yyyy-MM-dd"), host, storage.revision]
    ])
  );
  await File.write(
    "out/tables/revisions.csv.manifest",
    JSON.stringify({
      incremental: true,
      primary_key: ["date", "host", "revision"]
    })
  );

  console.log("Done");
}
