# User Profile with React

API for registering users with mongodb and authentication using a JWT (JSON Web Token). This app uses passport and passport-jwt and uses a JWT strategy.

## Getting Started

1. Download or clone the [project source code](https://github.com/lifeanddoodles/react-user-profile).
2. Install all required npm packages by running `npm install` from the command line in the project root folder (where the `package.json` is located).
3. Run `npm run build:client` to create `dist` folder.
4. Start the application by running `npm run dev` from the command line in the project root folder.
5. Your browser should automatically open at `http://localhost:8080` with the login page of the demo React JWT authentication app displayed.

## Endpoints

    POST /users/register
    POST /users/login // Gives back a token
    GET /user-profile // Needs JSON Web Token to authorize access
