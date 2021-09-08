import * as csv from "fast-csv";

export async function serialize(data: string[][]) {
  return await csv.writeToString(data);
}
