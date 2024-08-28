# linkshortener

This project is a link shortener using two main Django API endpoints: user and link. These
endpoints enable CRUD operations on the Django default User model and a custom Link model
that I created with fields Short URL, URL, Owner, Number of Clicks, and Timestamp. I also
added an endpoint to get all Links registered to a User (under the Owner field).

Creating a link is protected via token access (using the JSON Web Token standard of an access
and refresh token). The React frontend uses a login system that requests an access token and
then periodically sends requests to the backend to refresh the access token, keeping the user
logged in across sessions. A user can create their own account and then log in (all via the
frontend), allowing them access to the dashboard.

The dashboard contains a table of links belonging to the user, along with attributes. Creating a
new link is simple - pressing the button opens a modal with a form, and upon submission the
link is created and the page automatically displays the updated link table. Each row has a button
to delete the respective link.

When navigating to a link (i.e. localhost:3000/google), it will automatically redirect to that
website after sending a PATCH API request to the backend to increment the number of clicks of
the link. This can be scaled to add more metrics in the future

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

## Future Improvements
- Admin page (see all links and users)
- Email verification/password reset
- More link metrics (locations, etc.)
- 

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

| Request | Endpoint           | Behavior                        |
|---------|--------------------|---------------------------------|
| GET     | `/users`           | Get all users                   |
| POST    | `/users/`          | Create/update a user            |
| GET     | `/users/:id`       | Get a single user               |
| PUT     | `/users/:id`       | Update a user                   |
| DELETE  | `/users/:id`       | Delete a user                   |
| GET     | `/users/:id/links` | Get the links created by a user |

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
* Created Timestamp
* Most Recent Login Timestamp
