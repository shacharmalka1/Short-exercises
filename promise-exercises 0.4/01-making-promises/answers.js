<<<<<<< HEAD
/**
 *
 * EXERCISE 1
 *
 * @returns {Promise<3>}
 */
function makePromiseResolveWith3() {
  return Promise.resolve(3);
  /* IMPLEMENT ME! */
}

/**
 *
 * EXERCISE 2
 *
 * @returns {Promise<,"Boo!">}
 */
function makePromiseRejectWithBoo() {
  return Promise.reject("Boo!");

  /* IMPLEMENT ME! */
}

/**
 *
 * EXERCISE 3
 *
 * @param {boolean} itShouldResolve - Whether the promise should resolve or reject
 * @returns {Promise<undefined, undefined>}
 */
function makePromiseWithConstructor(itShouldResolve) {
  return new Promise((resolve, reject) => {
    if (itShouldResolve) {
      resolve();
    } else {
      reject();
    }
  });
}

/**
 *
 * EXERCISE 4
 *
 * @param {any} value
 * @param {number} delayInMs
 * @return {Promise<any>} - A promise that will resolve with the value after delayInMs milliseconds
 */
function makeDelayPromise(value, delayInMs) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
    }, delayInMs);
  });
}

module.exports = {
  makePromiseResolveWith3,
  makePromiseRejectWithBoo,
  makePromiseWithConstructor,
  makeDelayPromise,
};
=======
/**
 *
 * EXERCISE 1
 *
 * @returns {Promise<3>}
 */
function makePromiseResolveWith3() {
  return Promise.resolve(3);
  /* IMPLEMENT ME! */
}

/**
 *
 * EXERCISE 2
 *
 * @returns {Promise<,"Boo!">}
 */
function makePromiseRejectWithBoo() {
  return Promise.reject("Boo!");

  /* IMPLEMENT ME! */
}

/**
 *
 * EXERCISE 3
 *
 * @param {boolean} itShouldResolve - Whether the promise should resolve or reject
 * @returns {Promise<undefined, undefined>}
 */
function makePromiseWithConstructor(itShouldResolve) {
  return new Promise((resolve, reject) => {
    if (itShouldResolve) {
      resolve();
    } else {
      reject();
    }
  });
}

/**
 *
 * EXERCISE 4
 *
 * @param {any} value
 * @param {number} delayInMs
 * @return {Promise<any>} - A promise that will resolve with the value after delayInMs milliseconds
 */
function makeDelayPromise(value, delayInMs) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
    }, delayInMs);
  });
}

module.exports = {
  makePromiseResolveWith3,
  makePromiseRejectWithBoo,
  makePromiseWithConstructor,
  makeDelayPromise,
};
>>>>>>> 1ea85b4d3f628edd3e5157127a402d89fb35cb8e
