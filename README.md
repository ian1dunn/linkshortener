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
| GET     | `/links/:id` | Get a single link    |
| POST    | `/links/:id` | Create/update a link |
| DELETE  | `/links/:id` | Delete a link        |

### `/users`

| Request | Endpoint     | Behavior             |
|---------|--------------|----------------------|
| GET     | `/users`     | Get all users        |
| GET     | `/users/:id` | Get a single user    |
| POST    | `/users/:id` | Create/update a user |
| DELETE  | `/users/:id` | Delete a user        |
