import * as fs from "fs";
import { IncomingMessage } from "http";
import * as https from "https";
import * as path from "path";

const TLD_URL = "https://data.iana.org/TLD/tlds-alpha-by-domain.txt";

https
  .get(TLD_URL, (res: IncomingMessage): void => {
    let data: string = "";

    res.on("data", (chunk: Buffer): void => {
      data += chunk.toString();
    });

    res.on("end", (): void => {
      const tlds: string[] = data
        .split("\n")
        .filter(
          (line: string): boolean => Boolean(line) && !line.startsWith("#")
        )
        .map((tld: string): string => tld.trim());

      const filePath = path.join(__dirname, "../dist/tlds.json");
      fs.writeFileSync(filePath, JSON.stringify(tlds, null, 2));
      console.log("TLD list updated successfully.");
    });
  })
  .on("error", (err: Error): void => {
    console.error("Error fetching TLD list:", err.message);
  });
