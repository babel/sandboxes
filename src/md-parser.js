import toc from 'markdown-toc';
import fs from 'fs-extra';


/**
 * Returns a Promise of JSON representing the markdown document
 * 
 * @param {string} path path to the markdown document
 * @returns {Promise<Object>} Parsed json object for spec.md
 */

export const parseToJSON = async (path) => {
  path = "src/spec.md";

  /* parse the markdown document into html */
  const markdown = await fs.readFileSync(path, "utf-8");

  /* parse the markdown document into JSON */
  const content = await toc(markdown).json;

  let result = parseToNested(content);

  let chunks = markdown.split('\n#');

  chunks.forEach((chunk, index) => {
    /* skip the table element */
    if (index == 0) return;
    let line = chunk.split('\n')[0];

    result[line.replace(/#*/, '').trim()].chunk = chunk;
  });

  return result;

  // let data = JSON.stringify(result);

  // fs.writeFileSync("output.json", data);

}

/**
 * Return markdown-toc objects with nested structure
 * 
 * @param {Object} content Original markdown-toc objects
 * @returns {Object} Parsed objects with parents
 */

const parseToNested = (content) => {
  const result = {};

  const initialValue = {
    "lvl": 1,
    "parents": [],
  };

  content.reduce((acc, v) => {
    switch (v.lvl) {
      case 1:
        v.parents = [];
        break;
      case 2:
        if (acc.lvl < v.lvl) {
          v.parents = [acc.i];
        }
        else {
          v.parents = [acc.parents[0]]
        }
        break;
      case 3:
        if (acc.lvl == 1) {
          /* babelparser-babylon-v7 element */
          v.parents = [acc.i, acc.i];
        }
        else if (acc.lvl < v.lvl) {
          v.parents = [acc.parents[0], acc.i];
        }
        else {
          v.parents = [acc.parents[0], acc.parents[1]];
        }
        break;
      case 4:
        if (acc.lvl < v.lvl) {
          v.parents = [acc.parents[0], acc.parents[1], acc.i];
        }
        else {
          v.parents = acc.parents;
        }
        break;
    }
    result[v.content] = v;
    return v;

  }, initialValue);
  return result;
}