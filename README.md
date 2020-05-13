# CORS Example

> Watch my slides here: https://dci-presentations.oliverwebr.now.sh/00_MISC/CORS/

## How to test CORS

Because CORS (Cross-Origin Resource Sharing) is a Browser feature we need to create a "front-end" that we can use to request resources from our backend. Luckily the `port` is part of an origin definition that means the following constellation is sufficient:

- frontend: `http://localhost:3001`
- backend: `http://locahost:3000`

If the front-end requests from the backend it would be considered a cross-origin request.

## Let`s start this

1. Open two terminal windows

- in terminal one navigate to the server folder `cd server`
- in terminal two navigate to the front-end folder `cd frontend`

2. Start the server for front-end and back-end

- **server**: `npm run dev`
- **frontend**: You your tool to start a server for the index.html (e.g.: https://www.browsersync.io)

3. The important bits

- open your dev-tools (front-end)
- `frontend/index.js` performs a request against our backend you might need to change the url
- app.js line 11 to 15 implement the cors middleware

## Extra

You can checkout a previous commit (4ad9d0486 -- custom) to see a custom approach.
https://github.com/dci-ber-fbw21/cors-with-express/blob/4ad9d04868bf83e9b8a20856340bbf2a273442ab/server/app.js#L11-L13
