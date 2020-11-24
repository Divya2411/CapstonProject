import _ from "lodash";

export function incrementStr(str, number) {
  return (_.toNumber(str) + number).toString();
}

// increment a string with a number: "11" + 1 = "12"
