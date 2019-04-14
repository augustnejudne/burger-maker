export const toggleKetchup = () => {
  this.setState({ ketchup: this.state.ketchup ? false : true });
};

export const toggleMayo = () => {
  this.setState({ mayo: this.state.mayo ? false : true });
};

export const addPart = (array, part) => {
  if (array.length === 6) {
    return array;
  }
  array.unshift(part);
  return array;
};

export const removePart = (array, i) => {
  array.splice(i, 1);
  return array;
};

export const moveup = i => {
  const partsCopy = this.state.parts;
  partsCopy.splice(i - 1, 0, partsCopy.splice(i, 1)[0]);
  this.setState({ parts: partsCopy });
};

export const movedown = i => {
  const partsCopy = this.state.parts;
  partsCopy.splice(i + 1, 0, partsCopy.splice(i, 1)[0]);
  this.setState({ parts: partsCopy });
};
