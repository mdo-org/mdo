import fs from "fs";
import path from "path";
import { promisify } from "util";

const fsReadFile = promisify(fs.readFile);

const printVersion = async () => {
  const str = await fsReadFile(
    path.join(__dirname, "../package.json"),
    "utf-8"
  );
  const { version } = JSON.parse(str.toString());
  process.stdout.write(version);
};

export default printVersion;
