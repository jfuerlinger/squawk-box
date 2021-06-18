# Squawk Box

[![Azure Static Web Apps CI/CD](https://github.com/jfuerlinger/squawk-box/actions/workflows/build-and-deploy.yml/badge.svg?branch=main)](https://github.com/jfuerlinger/squawk-box/actions/workflows/build-and-deploy.yml)

The purpose is to implement a squawk box on base of Azure communication services on a raspberry pi 4 with an 7'' touchscreen display.

To join the session run the following URL

```
https://calm-sky-0226bb303.azurestaticapps.net/?groupId=7e723f30-ce89-11eb-bea5-ef058edc4a13&name=<name>
```


## Development server

Increase limit of filesystem watchers when using WSL2 Ubuntu on the docker host:
`echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf`

Run `$ docker compose up -d` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## Commands for audio

### Record audio file

```sh
arecord -D plughw:2,0 -d 3 -f cd test.wav
```

### Play audio file

```sh
aplay -D plughw:Headphones,0  test.wav
```


## Resources

* [RASPBERRY PI TOUCHSCREEN KIOSK SETUP (10 STEPS)](https://desertbot.io/blog/raspberry-pi-touchscreen-kiosk-setup)
* [Angular Development with Docker](https://markfknight.dev/posts/angular-in-docker/)
* [Raspberry Pi 7'' Touchscreen Display](https://www.element14.com/community/docs/DOC-78156/l/raspberry-pi-7-touchscreen-display)
* [Rotate LCD](https://maker-tutorials.com/raspberry-pi-touchscreen-installieren-und-anschliessen-tipps-tricks/)
