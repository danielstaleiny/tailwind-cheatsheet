# `parceleventy`

A basic @11ty/eleventy starter using parcel-bundler for asset
processing, minification, and bundling.

Makes it easy to write HTML, JS, and CSS in your flavour of choosing,
and get a production-ready website bundle.

## Why?

This starter allows anyone to get started with modern web languages
simply by installing it and writing code.

No configuration is necessary, with sensible defaults provided by both
Eleventy and Parcel Bundler, but can be provided as needed.

This starter allows you to quickly develop a modern website using
JAMStack technology, and can be extended to handle many use-cases.

## Installation

First, you must have Git, Nodejs and NPM installed.

Then, clone the repository to your local machine:

``` bash
git clone https://github.com/chrisdmacrae/eleventy-starter-parcel.git
```

Then install the project dependencies:

``` bash
cd eleventy-starter-parcel
npm install
```

## Development

To start the development environment run the `start` command:

``` bash
npm start
```

This will start eleventy in watch mode, Parcel's HMR server, and a
BrowserSync proxy server to give you a seamless development experience,
and allowing you to do multi-device testing.

## Building

To generate a production build with all assets minified, optimized, and
hashed for cachebusting, run:

``` bash
npm run build
```

The production build will be available in `dist/` for deployment.

## How it works

This starter combines Eleventy and Parcel bundler to create a
zero-config build of a modern website/web application, using a variety
of modern programming practices.

It does this by post-processing, pre-processing, and bundling a group of
***assets***, or files, in 4 steps:

### 1. Pre-processing with Eleventy

Eleventy is used as a text-preprocessor, allowing you to use Nunjucks,
or a variety of other template formats, to generate text-based
documents.

In most cases, this is HTML.

Any files found in `src/pages` whose extensions match [supported
template formats](https://www.11ty.io/docs/languages/) will be
post-processed, and then copied to `.tmp/11ty`.

*Any file extensions not supported by Eleventy's templates will be
copied over to `.tmp/11ty` as-is.*

### 2. Parsing with Parcel Bundler

Then, all output HTML assets in `.tmp/11ty` are parsed by Parcel
Bundler.

From this, a list of all dependencies referenced in post-processed HTML
assets are assembled, and prepared for processing.

*Any assets in `.tmp/11ty` that are not referenced in your HTML output
are copied over to the `dist/` folder as-is.*

### 3. Pre-processing with Parcel Bundler

Parcel is then used to pre-process supported assets, including CSS and
JS.

-   [Sass is pre-processed into CSS](https://parceljs.org/scss.html)
-   [Less is pre-processed into CSS](https://parceljs.org/less.html)
-   [Stylus is pre-processed into CSS](https://parceljs.org/stylus.html)
-   Inline style tags of type `text/sass`, `text/scss`, `text/less`,
    `text/stylus` are transformed into CSS
-   [Typescript is pre-processed into
    JS](https://parceljs.org/typeScript.html)
-   [Coffeescript is pre-processed into
    JS](https://parceljs.org/coffeeScript.html)
-   [ReasonML is pre-procesed into
    JS](https://parceljs.org/reasonML.html)

### 4. Post-processing with Parcel Bundler

Parcel is then used on all of the pre-processed assets to do final
post-processing:

-   [HTML is post-processed with
    PostHTML](https://parceljs.org/html.html)
-   [CSS is post-processed with PostCSS](https://parceljs.org/css.html)
-   [JS is post-processed with
    Babel](https://parceljs.org/javascript.html)
-   Inline script tags of the type type `application/javascript` and
    `text/javascript` are post-processed with Babel
-   [Images are post-processed with Imagemin](#)

## Advanced Features

This setup allows you to do a lot of cool things, without any
configuration. This highlights some of them until I write better
documentation.

### No 404-builds

Parcel does not ***allow*** 404s, let alone like them. If Parcel
ecounters a relative file path in your assets that don't exist, it will
throw an error and exit a build with a non-zero exit code.

This means it's a *lot* harder to deploy a broken site. Cool, eh?

### Asset resolution

Parcel modifies the module resolution for JavaScript files, as well as
the URL resolution algorithm for HTML and CSS.

**For JavaScript:** - Support for requiring/importing [all supported
asset types](https://parceljs.org/assets.html) is added. - Relative
paths beginning with `/` are resolved from `src/pages/`. - Relative
paths beginning with `~` will be resolve from the root of a matching
package, allowing you to require files from outside your assets folder.
- Glob support is added, allowing you to do things like:
`require('./**/*.js')`; -
[Aliases](https://parceljs.org/module_resolution.html#aliases) can be
created, allowing you to: - Swap out one module for another, e.g.
`react` `> =preact` - Create a shortcut to a local module, e.g.
`./src/pages/` `> =pages/`.

**For HTML and CSS:** - Relative paths beginning with `./` are resolved
from the current file's directory. - Relative paths beginning with `../`
are resolved up one directory from the current file, and `../` may be
repeated. - Relative paths beginning with `/` are resolved from
`src/pages/`. - Relative paths beginning with `~` will be resolve from
the root of a matching package, allowing you to require files from
outside your assets folder.

### Isomorphic Nunjucks

Any Nunjucks templates found in `src/pages/` or `src/includes/` can be
`require()`'d or `import`'d into your JavaScript assets, and be used to
render HTML client-side.

E.g, if you wanted to access the `html5boilerplate` extend in your
JavaScript:

In `src/pages/assets/js/index.js`:

``` example
const nunjucks = require('nunjucks/browser/nunjucks-slim');
const html5boilerplate = require('includes/extends/html5boilerplate.njk');
const html = nunjucks.render('/src/includes/extends/html5boilerplate.njk', {
    title: "My new title"
});

console.log(html);
```

\#+BEGINQUOTE \*\* Want to create an Nunjucks template for client-use
only?

That's easy! Simply set `permalink` to `false` in the template's front
matter, and it will not be output as a file, but will stil be available
to your JS!

\#+ENDQUOTE

### Isomorphic Data Files

Supported data file formats can be `require()`'d or `import`'d in your
JavaScript, allowing you to access the data as JavaScript types.

Currently you can import:

-   [YAML](https://parceljs.org/yaml.html)
-   [TOML](https://parceljs.org/toml.html)
-   [JSON](https://parceljs.org/json.html)
-   JS

E.g, if you wanted to use the data in `src/data/site.yml`:

``` example
const siteData = require('data/site.yml`);

console.log(siteData);
```

### Custom output formats

Eleventy allows you to output *any* type of text-based file. You can use
a Nunjucks or other supported template format to generate HTML, JSON,
YAML, TOML, CSS, or whatever other text-based files you'd like to
generate.

To do so, you simply change the `permalink` setting in the frontmatter
of the file.

E.g, to have `src/pages/index.njk` output to valid JSON to
`src/pages/index.json` instead of outputting HTML to
`src/pages/index.html`, simply do:

``` example
---
permalink: index.json
data: [
    "value1",
    "value2",
    "value3"
]
---
{{ data | dump }}
```

### Generating multiple files from a single template

Eleventy also allows you to generate multiple output files from a single
template, using it's [pagination
feature](https://www.11ty.io/docs/pagination/).

The pagination feature works by looping an array of data over the same
template multiple times, in order to generate different pages or assets.

To do so, add a `pagination` object to your template's front matter,
with the properties:

-   `data`: is the key for any variable accessible to the template (e.g,
    from frontmatter, data files, or collections)
-   `size`: is the number of items to pass to the template in each loop
-   `alias`: the key you wish to access the pagination data for each set
    of the loop

E.g, in `src/pages/blog.njk`

``` example
---
pagination:
  data: collections.posts
  size: 6
  alias: posts
---
{{ posts | dump }}
```

1.  Generating an archive

    Pagination can be used to generate multiple pages using the same
    template, but with different data, allowing you to get similar
    functionality to server-side rendered pages.

    The `permalink` key is processed using the template's parser,
    allowing you to use any data available to the template to change the
    permalink of the page during pagination, allowing you to generate
    many unique pages.

    E.g, in `src/pages/blog.njk`:

    ``` example
    ---
    pagination:
      data: collections.posts
      size: 6
      alias: posts
    permalink: blog/{{ pagination.pageNumber + 1 }}/index.html
    ---
    {{ posts | dump }}
    ```

2.  Generating multiple file types from a single template

    Pagination can also be used to output multiple file formats for a
    given page, such as outputting JSON representations for all pages.

    To output a different file type for each iteration of the loop, you
    can do something like:

    In `src/pages/index.njk`:

    ``` example
    ---
    outputTypes:
      - html
      - json
    pagination:
      data: outputTypes
      size: 1
      alias: ext
    permalink: {{ permalink | replace('html', ext) }}
    ---
    {% if ext === "html %}
      {# Output HTML here #}
    {% elif ext === "json" %}
      {# Output JSON here #}
    {% endif %}
    ```

### Service worker

A service worker as generated at the end of every build using Google's
[Workbox](https://developers.google.com/web/tools/workbox/). By default
it precaches all HTML, CSS, and image assets in your `dist/` directory,
and makes them available when offline.

The generation supports two strategies for generating a service worker:

| Key | Name     | Description                                                                                                   |
|-----|----------|---------------------------------------------------------------------------------------------------------------|
| `0` | Generate | Automatically generates a fully-functioning service worker with precaching at `dist/sw.js`                    |
| `1` | Inject   | Automatically inject a service worker configuration into an existing service worker file at `src/pages/sw.js` |

The strategy can be configured by:

-   Creating a `package` key in `package.json` with the following…
-   Creating a `.workboxrc` with a JSON configuration with the
    following..
-   Creating a `.workbox.js` that exports a valid configuration object
    with the following…

<!-- -->

``` example
{
    "strategy": 0
    "generate": {}
    "inject": {}
}
```

### Generate

Generating gives you the most basic service worker, allowing your
site/app to be available offline when network connection is not
available.

This method always overwrites the content of `src/pages/sw.js`.

The options available to generation can be [found
here](https://developers.google.com/web/tools/workbox/modules/workbox-build#generatesw_mode).

### Inject

Injection allows you to fully customize your service worker, and enable
custom functionality like push notifications and preloading.

This method uses the asset found at `src/pages/sw.js`, which is already
pre-configured for injection.

APIs for configuring and adding features to your custom `sw.js` can be
[found
here](https://developers.google.com/web/tools/workbox/modules/workbox-sw).

The options available to inject can be [found
here](https://developers.google.com/web/tools/workbox/modules/workbox-build#injectmanifest_mode).

### Code splitting

Parcel enables you to do code-splitting easily by [using dynamic
imports](https://parceljs.org/code_splitting.html).

Code splitting allows you to break up your Javascript into small
bundles, or files, that are loaded on-demand as they are needed in the
browser.

This dramatically reduces the amount of JavaScript a user has to
download, by ensuring they only download what the browser needs to use.

### Linters

You can add [linters](https://www.11ty.io/docs/config/#linters) to
Eleventy's template pre-processing process to add checks to your build
process.

To do so, add Javascript files to `lib/linters`:

``` example
module.exports = (content, inputPath, outputPath) => {
    // Review content and log console output if necessary...
    // console.warn(`warning message`);
    //
    // Or throw an error to stop builds!
    // throw new Error(`error message`);
}
```

E.g, add a natural language linter to markdown files, to ensure
off-brand langauge isn't used!

``` example
module.exports = (content, inputPath, outputPath) => {
  const isMarkdownFile = inputPath.endsWith(".md");
  let words = ["the","seven","words","you","can't","say","on","television"]
  if (inputPath.endsWith(".md")) {
    for (let word of words) {
      let regexp = new RegExp("\\b(" + word + ")\\b", "gi");
      if (content.match(regexp)) {
        console.warn(
          `Inclusive Language Linter (${inputPath}) Found: ${word}`
        );
      }
    }
  }
};
```

### Transforms

Custom [transforms](https://www.11ty.io/docs/config/#transforms) can be
applied at the end of Eleventy's pre-processing step, before the
templates are processed by Parcel.

To do so, add Javascript files to `lib/transforms`:

``` example
module.exports = (content, outputPath) => {
    // Do something to content...

    return content;
}
```

E.g, pretty print HTML output before sending it to Parcel:

``` example
const pretty = require('pretty');

module.exports = (content, outputPath) => {
    const isHTML = outputPath.endsWith('.html');

    if (isHTML) {
        return pretty(content);
    }

    return content;
}
```

## Filters & Shortcodes

Custom filters and shortcodes can be added for use in your templates:

-   **Filters** allow you to modify a value, such as changing a string
    or converting an array to a delimited list
-   **Shortcodes** return content (a JavaScript string or template
    literal) that is injected into the template. They can also take
    paramaters to customize their output.

### Adding Filters

To add a filter, add a JS file to `lib/filters` with the desired name.
I.e, `lib/filters/example.js` becomes `example` in your templates:

``` example
module.exports = (value) => {
    // Do something with value

    return value;
}
```

``` example
{# Use as a function #}
{{ example exampleValue }}

{# Or use as a pipe #}
{{ exampleValue | example }}
```

### Adding shortcodes

To add a shortcode, add a JS file to `lib/shortcodes` with the desired
name. I.e, `lib/shortcodes/example.js` becomes `{% example %}` in your
templates.

``` example
module.exports = (slot, value) => {
    // Do something with paramaters, and return output

    return value;
}
```

``` example
{% example "exampleForValue1" %}
{# Outputs: "exampleForValue1" #}
```

Shortcodes can take as many paramaters as you like, just add additional
arguments to your function:

``` example
module.exports = (slot, value1, value2) => {
    // Do something with values, and return output

    return value1 + " " + value2;
}
```

``` example
{% example "Hello", "World!" %}
{# Outputs: "Hello World!" %}
```

Lastly, shortcodes can tag pairs, allowing you to slot variable content
into the shortcode, accessible through the first paramater of the
function:

``` example
module.exports = (slot, value1, value2) {
    return `
        <h1>{{ value1 }} {{ value2 }}</h1>
        <p>{{ slot }}</p>
    `
}
```

``` example
{% example "Hello", "world!" %}
    I'm <strong>alive</strong>!
{% endexample %}
{# Outputs:
    <h1>Hello world!</h1>
    <p>I'm <strong>alive</strong>!</p>
#}
```

## Common pitfalls

## Getting 404s for files in `src/pages/`

Problems with HTML

Ensure when referencing assets in your HTML, you're using the permalink
of the file, not the original extension!

E.g, `src/pages/index.njk` becomes `/index.html`.

Changes to assets aren't showing up on my dev server?

This is likely caused by either:

-   If your having issues with pre-processed CSS or JS assets like Sass
    or Typescript, your assets are likely not being referenced in your
    HTML documents. Assets that require any pre or post-processing must
    be referenced in an HTML document, or a supported asset format that
    *is* referenced in an HTML document.

-   The service worker is caching your assets. You can:

    -   [Disable the service
        worker](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers#Developer_tools)
        in your browser's developer tools
    -   Force a hard refresh of the page (this is usually done by
        pressing `ctrl` + `shift` + `R`).
