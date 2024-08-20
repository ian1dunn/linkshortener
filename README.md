# linkshortener

## Models

### Link
* Short URL
* URL
* Owner
* Number of Clicks
* Timestamp

### User
* First Name
* Last Name
* Username
* Email
* Password
* Timestamp

## API

### `/links`

| Request | Endpoint     | Behavior             |
|---------|--------------|----------------------|
| GET     | `/links`     | Get all links        |
| POST    | `/links/`    | Create/update a link |
| GET     | `/links/:id` | Get a single link    |
| PUT     | `/links/:id` | Update a link        |
| DELETE  | `/links/:id` | Delete a link        |

### `/users`

| Request | Endpoint     | Behavior             |
|---------|--------------|----------------------|
| GET     | `/users`     | Get all users        |
| POST    | `/users/`    | Create/update a user |
| GET     | `/users/:id` | Get a single user    |
| PUT     | `/users/:id` | Update a user        |
| DELETE  | `/users/:id` | Delete a user        |
