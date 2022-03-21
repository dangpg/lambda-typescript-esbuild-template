const { execSync } = require("child_process");
const { readFileSync } = require("fs");

const { Parameters: data } = JSON.parse(readFileSync("env.json", "utf8"));

const parameters = Object.entries(data).map(([key, value]) => {
  const formattedKey = key
    .toLowerCase()
    .split("_")
    .map((k) => `${k[0].toUpperCase()}${k.substring(1)}`)
    .join("");

  return `${formattedKey}=${value}`;
});

execSync(`sam.cmd deploy --parameter-overrides ${parameters.join(" ")}`, {
  stdio: "inherit",
});
