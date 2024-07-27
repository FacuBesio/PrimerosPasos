import _ from "lodash";

const arraysCompare = (arr1, arr2) => {
  if (Array.isArray(arr1) && Array.isArray(arr2)) {
    if (arr1.length !== arr2.length) return false;

    const sortedArr1 = [...arr1].sort((a, b) => (a.id > b.id ? 1 : -1));
    const sortedArr2 = [...arr2].sort((a, b) => (a.id > b.id ? 1 : -1));

    return _.isEqual(sortedArr1, sortedArr2);
  }
};

export default arraysCompare;
