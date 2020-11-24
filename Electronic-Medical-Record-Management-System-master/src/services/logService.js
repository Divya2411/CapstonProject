// import Raven from "raven-js";

function init() {
  // Raven.config(
  //   "https://2a7a12a5976b4d9683b3e66f2757c29d@o429978.ingest.sentry.io/5377705",
  //   { release: "1-0-0", environment: "development-test" }
  // ).install();
}

function log(error) {
  // Raven.captureException(error);
  console.error(error);
}

export default {
  init,
  log,
};
