
# EASY 1
1. **Project Setup:**
    - Initialize a new Node.js project (`npm init -y`).
    - Install `express` and `jsonwebtoken`.
<pre>
  install dependencies=> npm install
  start running => npm start
</pre>

2. **User Data:**
    - Create a simple in-memory array to act as a user database. No need for a real database. Each user object should have an       `id`, `username`, and `password`.
  <pre>const users = [{ id: 1, username: 'Charishma', password: '123456' }];</pre>

3. **Create Endpoints:**
    - `POST /register`: A simple endpoint that adds a new user to the in-memory array. (For this easy version, you don't need to hash the password).
### Post the user (/register)
![image](https://github.com/user-attachments/assets/931e6cfa-bdde-4003-9b93-cea7904f461e)
    -- `POST /login`:
        - Takes `username` and `password` in the request body.
        - Checks if the user exists in your array.
        - If credentials are correct, generate a JWT containing the user's `id` and `username` in the payload.
        - The token should expire in **1 hour**.
        - Send the JWT back to the client in a JSON response (e.g., `{ "accessToken": "..." }`).
### AccessToken When I login
![image](https://github.com/user-attachments/assets/1f332728-1283-4e9d-9e5b-898671a0afb7)



4. **Create Authentication Middleware:**
    - Write a middleware function that checks for an `Authorization` header with a `Bearer` token.
    - It should verify the token using your secret key.
    - If the token is valid, it should attach the decoded payload to the `request` object (e.g., `req.user = decodedPayload;`) and call `next()`.
    - If the token is missing or invalid, it should send a `401 Unauthorized` or `403 Forbidden` status.
## If not Authorized
![image](https://github.com/user-attachments/assets/f6e26bed-1f85-4765-85ba-d653e51c32fc)

5. **Create a Protected Route:**
    - Create a `GET /api/secret-quote` endpoint.
    - Apply your authentication middleware to this route.
    - If the request is successful, it should return a simple JSON response like: `{ "quote": "The secret to getting ahead is getting started." }`.
## when tried to request a url with the authorized token (/secret-quote)
![image](https://github.com/user-attachments/assets/f80c2d8e-1cd9-4687-b5f5-f748c35e3838)


# MEDIUM
## Using bycrpt
<img width="710" alt="image" src="https://github.com/user-attachments/assets/e6fbaf89-dada-4168-878e-a148103cca23" />

## Added a task
![image](https://github.com/user-attachments/assets/2cb4dd7a-a7e4-4900-9428-e8bd31c226e7)

## Get the tasks of a particular user
![image](https://github.com/user-attachments/assets/98554c8b-43f2-47a3-ab14-15709dbd0310)

## Delete the task of a particular user
![image](https://github.com/user-attachments/assets/29e300ec-498b-4da8-933f-9ae4a170187d)
