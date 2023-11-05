const withTimeout = (fn, options = {}) => {
  const { timeout = 5000, errorMessage = "Request timed out." } = options;
  let timer;
  const timeouter = () =>
    new Promise((_, reject) => {
      timer = setTimeout(() => {
        reject(new Error(errorMessage));
      }, timeout);
    });
  return () =>
    Promise.race([fn(), timeouter()]).finally(() => clearTimeout(timer));
};

const retryPromise = (fn, options = {}) => {
  const { retries = 3, delay = 1000 } = options;
  let triesLeft = retries;
  return new Promise((resolve, reject) => {
    const attempt = () => {
      fn()
        .then(resolve)
        .catch((err) => {
          if (triesLeft === 0) {
            reject(err);
          } else {
            setTimeout(() => {
              triesLeft--;
              attempt();
            }, delay);
          }
        });
    };
    attempt();
  });
};

module.exports = { withTimeout, retryPromise };
