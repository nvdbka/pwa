/* eslint-disable semi */
/* eslint-disable quotes */
import { precacheAndRoute } from "workbox-precaching/precacheAndRoute";

precacheAndRoute([
  { revision: "8e4dc78be8f8a2d58bd0cf9b52826251", url: "main.js" },
  {
    revision: "17692e48fd0c161001ca28d491e6fd4d",
    url: "registerServiceWorker.js"
  },
  { revision: "f45b3792508bcd07f6415a7129316cb2", url: "router/index.js" }
]);
