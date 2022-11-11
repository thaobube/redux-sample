# React-ReduxToolkit-Photo-App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) TS template.

## Setup Environment

1. Setup SCSS

```
npm install --save-dev node-sass
npm install --save-dev @types/node-sass
```

2. Setup React-router

```
npm install react-router-dom
npm install --save @types/react-router-dom
```

3. Setup UI

```
npm i bootstrap
npm i --save reactstrap
npm install --save react-select
npm install --save formik
```

## Folder Structure

```
src
|__ assets
|  |__images
|  |__styles (global styles)
|
|__components (shared components)
|
|__features
  |__Photo
    |__components
    |  |__PhotoList
    |  |__PhotoCard
    |  |__PhotoForm
    |
    |__pages
    |  |__MainPage
    |  |__AddEditPage
    |__photoSlice.js
    |__index.js
```

## Routing structure

-   use lazy load components
-   only load necessary feature
