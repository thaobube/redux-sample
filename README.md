# React-ReduxToolkit-Photo-App

This assignment uses React & Typescript, Redux Toolkit, Formik, Yup and reactstrap.

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
npm install yup

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
