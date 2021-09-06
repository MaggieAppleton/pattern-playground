import fs from "fs";
import path from "path";

// PATTERNS_PATH is useful when you want to get the path to a specific file
export const PATTERNS_PATH = path.join(process.cwd(), "posts", "patterns");
export const PLAYTHINGS_PATH = path.join(process.cwd(), "posts", "playthings");

// patternFilePath is the list of all mdx files inside the PATTERNS_PATH directory
export const patternFilePath = fs
    .readdirSync(PATTERNS_PATH)
    // Only include md(x) files
    .filter((path) => /\.mdx?$/.test(path));

export const playthingFilePath = fs
    .readdirSync(PLAYTHINGS_PATH)
    // Only include md(x) files
    .filter((path) => /\.mdx?$/.test(path));
