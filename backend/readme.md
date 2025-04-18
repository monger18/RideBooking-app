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

- **fullname.firstname** (string, required): Minimum 3 characters.
- **fullname.lastname** (string, optional): Minimum 3 characters if provided.
- **email** (string, required): Must be a valid email address.
- **password** (string, required): Minimum 8 characters.

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

# Captain Registration API Documentation

## Endpoint

`POST /captain/register`

## Description

Registers a new captain (driver) in the system. The endpoint validates the input, hashes the password, creates the captain, and returns an authentication token along with the captain data.

## Request Body

Send a JSON object with the following structure:

```json
{
  "fullname": {
    "firstname": "Jane",
    "lastname": "Smith"
  },
  "email": "jane.smith@example.com",
  "password": "yourpassword",
  "vehicle": {
    "color": "Red",
    "plate": "ABC12345",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

### Field Requirements

- **fullname.firstname** (string, required): Minimum 3 characters.
- **fullname.lastname** (string, optional): Minimum 3 characters if provided.
- **email** (string, required): Must be a valid email address.
- **password** (string, required): Minimum 8 characters.
- **vehicle.color** (string, required): Minimum 3 characters.
- **vehicle.plate** (string, required): Minimum 8 characters.
- **vehicle.capacity** (number, required): Must be a number.
- **vehicle.vehicleType** (string, required): One of `"car"`, `"motorcycle"`, `"auto"`.

## Responses

| Status Code | Description                                                                                 | Response Example                                      |
|-------------|---------------------------------------------------------------------------------------------|-------------------------------------------------------|
| 201         | Captain registered successfully. Returns token and captain object.                           | `{ "token": "...", "captain": { ... } }`              |
| 400         | Validation failed or captain already exists. Returns error message or validation errors.     | `{ "errors": [ { "msg": "...", ... } ] }` or `{ "message": "Captain already exists" }` |
| 500         | Internal server error (unexpected error during registration).                                | `{ "error": "Internal Server Error" }`                |

## Example Success Response

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "captain": {
    "_id": "60c72b2f9b1d8e001c8e4b8b",
    "fullname": {
      "firstname": "Jane",
      "lastname": "Smith"
    },
    "email": "jane.smith@example.com",
    "vehicle": {
      "color": "Red",
      "plate": "ABC12345",
      "capacity": 4,
      "vehicleType": "car"
    },
    "status": "inactive"
  }
}
```

## Example Error Response

```json
{
  "errors": [
    {
      "msg": "Plate must be at least 8 characters",
      "param": "vehicle.plate",
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

[user.routes.js](backend/routes/user.routes.js)

, 

[user.controllers.js](backend/controllers/user.controllers.js)

, 

[captain.routes.js](backend/routes/captain.routes.js)

, 

[captain.controllers.js](backend/controllers/captain.controllers.js)

, and 

[captain.model.js](backend/models/captain.model.js)

.
