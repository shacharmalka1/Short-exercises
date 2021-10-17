<<<<<<< HEAD
/**
 * @param {string} email
 * @param {string} password
 * @returns {User | undefined}
 */
function passwordChecker(email, password) {
  if (email === "jeff@jeff.jeff" && password === "jeff") {
    return { name: "Jeff Jeffries", email: "jeff@jeff.jeff" };
  }
  return undefined;
}

/**
 * @param {string} email
 * @param {string} password
 * @param {nodeStyleCallback} cb
 */
function passwordCheckerCb(email, password, cb) {
  const user = passwordChecker(email, password);
  if (user) {
    cb(null, user);
  } else {
    setTimeout(() => {
      cb("User Not Found!");
    }, 1000);
  }
}

/**
 *
 * EXERCISE 1:
 *
 * @param {string} email
 * @param {string} password
 * @returns {Promise<User, string>}
 */
function passwordCheckerPrms(email, password) {
  return new Promise((resolve, reject) => {
    passwordCheckerCb(email, password, (error, user) => {
      if (error) reject(error);
      else resolve(user);
    });
  });
}

/**
 *
 * EXERCISE 2
 *
 * @param {callbackStyleAsyncFunction} fn
 * @param {*} fnParams
 * @return {Promise<any, any>}
 */
function makePromiseFromFunctionWithCallback(fn, ...fnParams) {
  return new Promise((resolve, reject) => {
    fn(...fnParams, (error, res) => {
      if (error) {
        reject(error);
      }
      resolve(res);
    });
  });
}

/**
 * @callback callbackStyleAsyncFunction
 * @param {*[]} fnParams
 * @param {nodeStyleCallback}
 */

/**
 * @callback nodeStyleCallback
 * @param {*} Error
 * @param {*} Value
 */

module.exports = {
  passwordCheckerCb,
  passwordCheckerPrms,
  makePromiseFromFunctionWithCallback,
};
=======
/**
 * @param {string} email
 * @param {string} password
 * @returns {User | undefined}
 */
function passwordChecker(email, password) {
  if (email === "jeff@jeff.jeff" && password === "jeff") {
    return { name: "Jeff Jeffries", email: "jeff@jeff.jeff" };
  }
  return undefined;
}

/**
 * @param {string} email
 * @param {string} password
 * @param {nodeStyleCallback} cb
 */
function passwordCheckerCb(email, password, cb) {
  const user = passwordChecker(email, password);
  if (user) {
    cb(null, user);
  } else {
    setTimeout(() => {
      cb("User Not Found!");
    }, 1000);
  }
}

/**
 *
 * EXERCISE 1:
 *
 * @param {string} email
 * @param {string} password
 * @returns {Promise<User, string>}
 */
function passwordCheckerPrms(email, password) {
  return new Promise((resolve, reject) => {
    passwordCheckerCb(email, password, (error, user) => {
      if (error) reject(error);
      else resolve(user);
    });
  });
}

/**
 *
 * EXERCISE 2
 *
 * @param {callbackStyleAsyncFunction} fn
 * @param {*} fnParams
 * @return {Promise<any, any>}
 */
function makePromiseFromFunctionWithCallback(fn, ...fnParams) {
  return new Promise((resolve, reject) => {
    fn(...fnParams, (error, res) => {
      if (error) {
        reject(error);
      }
      resolve(res);
    });
  });
}

/**
 * @callback callbackStyleAsyncFunction
 * @param {*[]} fnParams
 * @param {nodeStyleCallback}
 */

/**
 * @callback nodeStyleCallback
 * @param {*} Error
 * @param {*} Value
 */

module.exports = {
  passwordCheckerCb,
  passwordCheckerPrms,
  makePromiseFromFunctionWithCallback,
};
>>>>>>> 1ea85b4d3f628edd3e5157127a402d89fb35cb8e
