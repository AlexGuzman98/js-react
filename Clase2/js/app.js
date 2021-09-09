function multi(...args) {
    return args.reduce((prev, curr) => prev * curr);
  }
  
function sum(...args) {
    return args.reduce((prev, curr) => prev + curr);
  }

export { multi, sum };