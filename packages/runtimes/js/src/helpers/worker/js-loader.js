/* global __parcel__importScripts__:readonly*/
const cacheLoader = require('@parcel/runtime-js/src/helpers/cacheLoader');

module.exports = cacheLoader(function loadJSBundle(bundle) {
  return new Promise(function (resolve, reject) {
    try {
      __parcel__importScripts__(bundle);
      resolve();
    } catch (e) {
      reject(e);
    }
  });
});
