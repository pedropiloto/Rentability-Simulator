import get from "lodash.get";

const isFunction = fn => typeof fn === "function";

/**
 * Transforms an object that's a collection of selectors, into an object where
 * every prop is a function bound to the provided state slice. This reduces
 * the boilerplate necessary to colocate reducers while keeping each selector
 * decoupled the the Store schema.
 *
 * @example
 * import * as someSelectors from './whatever'
 * const selectors = bindSelectors('path.to.state.slice', someSelectors)
 *
 * @param {String|Array} slice Object path that will get bound to the Selector
 * @param {Function|Object} selectors A collection of selectors or a single function
 * @returns {Function|Object} An object with the same props as the original
 * object, but where every selector is bound to the provided state slice. If a
 * function is passed as the `selectors` arg, the return value is a single
 * function, bound to the provided state slice.
 */
export function bindSelectors(slice, selectors) {
  const bindSelector = (path, selector) => (state, ...args) =>
    selector(get(state, path), ...args);

  if (isFunction(selectors)) {
    return bindSelector(slice, selectors);
  }

  return Object.entries(selectors)
    .filter(([_, fn]) => isFunction(fn))
    .reduce((acc, [key, fn]) => {
      acc[key] = bindSelector(slice, fn);
      return acc;
    }, {});
}
