# photo-gallery-tdd-livestream

A photo gallery frontend with a row-based layout algorithm that was developed via test driven development (TDD).

This code was created during a [live stream](https://youtu.be/Xi8gVWzvm9s) to support the book [Rapid Fullstack Development](https://rapidfullstackdevelopment.com/).

Follow on [Twitter](https://twitter.com/codecapers) for updates.

## Pre-reqs

You need [Node.js](https://nodejs.org/) installed to run this code.

## Setup

Clone this repo, change into the directory and install dependencies:

```bash
npm install
```

## Run the tests

```bash
npm test
```

## Run the tests with live reload

```bash
npm run test:watch
```

## Run the Parcel dev server

Run the dev server like this:

```bash
npm start
```

Then click the link or point your browser at the default location for Parcel: [http://localhost:1234](http://localhost:1234).

## Build the static web page

Build the project to a static web page like this:

```bash
npm run build
```

The static web page is output to the `dist` subdirectory.

## Test the static web page

After building the static web page, you can test it locally using `live-server`.

First install live-server globally:

```bash
npm install -g live-server
```

Now change into the directory where the static web page is generated:

```bash
cd dist
```

From here, start live-server:

```bash
live-server
```

The web page should automatically be displayed in your browser.
