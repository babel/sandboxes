import toc from 'markdown-toc';
import fs from 'fs-extra';


/**
 * Find the node and its parents from spec.json 
 * 
 * @returns Array with the node and its parents
 * @param {string} nodeType Babel AST node type
 */

export const lookUpNodeType = (nodeType) => {
  const path = "spec.json";

  const spec = JSON.parse(fs.readFileSync(path, "utf-8"));

  const output = [];

  const currentNode = spec[nodeType];

  if (currentNode.parents.length !== 0)
    currentNode.parents.forEach((nodeType) => {
      output.push(spec[nodeType]);
    });

  output.push(currentNode);
  return output;
}

/**
 * Returns a JSON representing the markdown document
 * 
 * @param {string} path path to the markdown document
 * @returns {Object} Parsed json object for spec.md
 */

export const parseToJSON = (path) => {
  path = "spec.md";

  const markdown = fs.readFileSync(path, "utf-8");

  /* parse the markdown document into JSON */
  const content = toc(markdown).json;

  let result = parseToNested(content);

  let chunks = markdown.split('\n#');

  chunks.forEach((chunk, index) => {
    /* skip the table element */
    if (index == 0) return;
    let line = chunk.split('\n')[0];

    result[line.replace(/#*/, '').trim()].chunk = chunk;
  });

  /* comment result and uncomment the next two lines to generate output file */

  return result;

  // let data = JSON.stringify(result);

  // fs.writeFileSync("spec.json", data);

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
          v.parents = [acc.content];
        }
        else {
          v.parents = [acc.parents[0]]
        }
        break;
      case 3:
        if (acc.lvl == 1) {
          /* babelparser-babylon-v7 element */
          v.parents = [acc.content, acc.content];
        }
        else if (acc.lvl < v.lvl) {
          v.parents = [acc.parents[0], acc.content];
        }
        else {
          v.parents = [acc.parents[0], acc.parents[1]];
        }
        break;
      case 4:
        if (acc.lvl < v.lvl) {
          v.parents = [acc.parents[0], acc.parents[1], acc.content];
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