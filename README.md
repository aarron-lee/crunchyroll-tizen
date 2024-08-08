# Crunchyroll for Linux

![layouts.gif](https://raw.githubusercontent.com/aarron-lee/crunchyroll-tizen/master/layouts.gif)

## Description:

This is a Linux port of the [Unofficial Tizen Crunchyroll App](https://github.com/jhassan8/crunchyroll-tizen).

**INFO: Application is incomplete, some features are missing that will be added later.**

#### Current Features

- [x] Auth workflow
- [x] Home screen
- [x] Profiles
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

### Todo Features

- [] Game Controller support - steam deck workaround is to use a steam input community controller profile
- [] External Keyboard support for inputting username/password

# Installation

Download the latest AppImage from [releases](https://github.com/aarron-lee/crunchyroll-linux/releases)

Install it with an AppImage manager, my recommendation would be [GearLever](https://flathub.org/apps/it.mijorus.gearlever), but other alternatives like AppImageLauncher also works

# Development

node and npm are required dependencies.

run `npm run electron-run` for to run the app.

There is no hot-reloading, so you must re-run the command after code changes are made.

## Build

run `npm run electron-build`

This will generate an AppImage in `electron/dist`

## Attribution

Massive shoutout to [jhassan8](https://github.com/jhassan8), the original dev of the Crunchyroll app

Electron App Icon: https://www.flaticon.com/free-icons/crunchyroll
