// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Anderson Carubelli - Senior Technology Leader & Principal Software Engineer";
export const SITE_DESCRIPTION =
  "Welcome to the blog of Anderson Carubelli, a seasoned Technology Leader & Software Engineer with over 20 years of experience. Explore insightful articles on modern web development, programming languages, Agile methodologies, and more.";
export const TWITTER_HANDLE = "@acarubelli";
export const MY_NAME = "Anderson Carubelli";

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
