# linkshortener

## Quickstart Guide

### Backend
```bash
$ cd backend

# Install all relevant packages
$ pip install -r requirements.txt

# First-time SQLite database setup
$ python manage.py makemigrations
$ python manage.py migrate

# Start the server
$ python manage.py runserver
```

### Frontend
```bash
# After starting the backend
$ cd ../frontend

# Install all relevant packages
$ npm install

# Start React app (development)
$ npm run start
```

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
