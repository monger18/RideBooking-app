Here is a `readme.md` file for the 

backend

 folder documenting the `/user/register` endpoint:

backend/readme.md:

```markdown
# User Registration API Documentation

## Endpoint

`POST /user/register`

## Description

Registers a new user in the system. The endpoint validates the input, hashes the password, creates the user, and returns an authentication token along with the user data.

## Request Body

Send a JSON object with the following structure:

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "yourpassword"
}
```

### Field Requirements

- 

fullname.firstname

 (string, required): Minimum 3 characters.
- 

fullname.lastname

 (string, optional): Minimum 3 characters if provided.
- 

email

 (string, required): Must be a valid email address.
- 

password

 (string, required): Minimum 8 characters.

## Responses

| Status Code | Description                                                                                 | Response Example                                      |
|-------------|---------------------------------------------------------------------------------------------|-------------------------------------------------------|
| 201         | User registered successfully. Returns token and user object.                                 | `{ "token": "...", "user": { ... } }`                 |
| 400         | Validation failed. Returns an array of validation errors.                                    | `{ "errors": [ { "msg": "...", ... } ] }`             |
| 500         | Internal server error (unexpected error during registration).                                | `{ "error": "Internal Server Error" }`                |

## Example Success Response

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "60c72b2f9b1d8e001c8e4b8a",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

## Example Error Response

```json
{
  "errors": [
    {
      "msg": "First name must be at least 3 characters",
      "param": "fullname.firstname",
      "location": "body"
    }
  ]
}
```


## Endpoint

`POST /user/login`

## Description

Authenticates a user with email and password. Returns an authentication token and the user object if credentials are valid.

## Request Body

Send a JSON object with the following structure:

```json
{
  "email": "john.doe@example.com",
  "password": "yourpassword"
}
```

### Field Requirements

- **email** (string, required): Must be a valid email address.
- **password** (string, required): Minimum 8 characters.

## Responses

| Status Code | Description                                                        | Response Example                                      |
|-------------|--------------------------------------------------------------------|-------------------------------------------------------|
| 200         | Login successful. Returns token and user object.                   | `{ "token": "...", "user": { ... } }`                 |
| 400         | Validation failed. Returns an array of validation errors.          | `{ "errors": [ { "msg": "...", ... } ] }`             |
| 401         | Invalid email or password.                                         | `{ "message": "Invalid email or password" }`          |

## Example Success Response

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "60c72b2f9b1d8e001c8e4b8a",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

## Example Error Response

```json
{
  "message": "Invalid email or password"
}
```

## Endpoint

`GET /user/profile`

## Description

Returns the authenticated user's profile information. Requires a valid authentication token.

## Authentication

- Requires Bearer token in the `Authorization` header or a valid `token` cookie.

## Responses

| Status Code | Description                                  | Response Example                                      |
|-------------|----------------------------------------------|-------------------------------------------------------|
| 200         | Returns the user profile object.             | `{ "user": { ... } }`                                 |
| 401         | Authentication failed or token missing/invalid. | `{ "message": "Unauthorized" }`                    |

## Example Success Response

```json
{
  "user": {
    "_id": "60c72b2f9b1d8e001c8e4b8a",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

---

For more details, see the implementation in 

user.routes.js

, 

user.controllers.js

, and 

user.model.js

.
