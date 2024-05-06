
function merge<T extends object, U extends obj> (objA:T, objB:U)<T & U> {
    return Object.assign(objA, objB);
  }