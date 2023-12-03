const BASE_PATH = import.meta.dir + "/..";

export async function getLines(filePath: string) {
  const path = BASE_PATH + filePath;
  const file = Bun.file(path, { type: "utf-8" });
  const lines = await file.text();

  return lines.split("\n");
}
