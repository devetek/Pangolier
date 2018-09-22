import "zone.js/dist/zone";

import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "@app/init";

let env = "development";

if (env === "production") {
  enableProdMode();
}

export function main() {
  return platformBrowserDynamic().bootstrapModule(AppModule);
}

/**
 * this function use for remove our loader, it will moving into state management on angular
 * please makesure or move this as soon as possible if you can
 * its not sync with angular flow and async process
 */
const removeLoader = () => {
  setTimeout(() => {
    const element = document.getElementById("preloader");
    element.remove();
  }, 2000);
};

if (document.readyState === "complete") {
  main();
} else {
  document.addEventListener("DOMContentLoaded", main);
}

removeLoader();
