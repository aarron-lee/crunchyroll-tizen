# Linux port of "Crunchyroll for TIZEN"

## Description:

This is a Linux port of the Unofficial Tizen Crunchyroll App.

**INFO: Application is incomplete, some features are missing that will be added later.**

#### Current Features

- [x] Auth workflow
- [x] Home screen
- [x] Details screen
- [x] Episodes screen
- [x] Video player
- [x] Menu options screen
- [x] Search element
- [x] Auto next episode
- [x] History screen and workflow
- [x] Change audio and subtitles language inside player
- [x] Settings screen
- [x] Browse elements by categories
- [x] My list screen and workflow

### TODO Features

- [] Profiles
- [] Game Controller support
- [] External Keyboard support for inputting username/password

## Captures:

![layouts.gif](https://raw.githubusercontent.com/jhassan8/crunchyroll-tizen/master/layouts.gif)

## Development

node and npm are required dependencies.

run `npm run electron-run` for to run the app.

There is no hot-reloading, so you must re-run the command after code changes are made.

## Build

run `npm run electron-build`

This will generate an AppImage in `electron/dist`

## Attribution

Massive shoutout to [jhassan8](https://github.com/jhassan8), the original dev of the Crunchyroll app
