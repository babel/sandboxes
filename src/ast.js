// compact loc properties into a single line
export function compactFixture(jsonString) {
  return jsonString.replace(
    /"start": (\d+),\s+"end": (\d+),\s+"loc": \{\s+"start":\s\{\s+"line": (\d+),\s+"column": (\d+)\s+\},\s+"end":\s\{\s+"line": (\d+),\s+"column": (\d+)\s+\s+\}(?:,\s+"identifierName": "(\S+)")?\s+\}/gm,
    (_, p1, p2, p3, p4, p5, p6, p7) => {
      return (
        `"start":${p1},"end":${p2},"loc":{"start":{"line":${p3},"column":${p4}},"end":{"line":${p5},"column":${p6}}` +
        (p7 ? `,"identifierName":"${p7}"}` : "}")
      );
    }
  );
}

const serialized = "$$ babel internal serialized type";

export function serialize(value) {
  // eslint-disable-next-line valid-typeof
  if (typeof value === "bigint") {
    return {
      [serialized]: "BigInt",
      value: value.toString()
    };
  } else if (value instanceof RegExp) {
    return {
      [serialized]: "RegExp",
      source: value.source,
      flags: value.flags
    };
  } else if (value instanceof Error) {
    // Errors are serialized to a simple string, because are used frequently
    return value.toString();
  }
  return value;
}
