# Documentation Elaborated

## About

### Backend (Django)
The website uses two main API endpoints: user and link. These
endpoints enable CRUD operations on the Django default User model and a custom Link model
that I created with fields Short URL, URL, Owner, Number of Clicks, and Timestamp. I also
added an endpoint to get all Links registered to a User (under the Owner field).

Creating a link is protected via token access (using the JSON Web Token standard of an access
and refresh token). The React frontend uses a login system that requests an access token and
then periodically sends requests to the backend to refresh the access token, keeping the user
logged in across sessions. A user can create their own account and then log in (all via the
frontend), allowing them access to the dashboard.

### Frontend (React)
The dashboard contains a table of links belonging to the user, along with attributes. Creating a
new link is simple - pressing the button opens a modal with a form, and upon submission the
link is created and the page automatically displays the updated link table. Each row has a button
to delete the respective link.

When navigating to a link (i.e. localhost:3000/google), it will automatically redirect to that
website after sending a PATCH API request to the backend to increment the number of clicks of
the link. This can be scaled to add more metrics in the future.

## Development Setup

### Start Database
```bash
$ docker compose up -d db  # Run detached
```

### Start Backend
```bash
$ cd backend

# Install all relevant packages (first-time setup)
$ pip install -r requirements.txt

$ export DJANGO_DATABASE='dev'

# Setup Postgres tables (only required when changing models)
$ python manage.py makemigrations
$ python manage.py migrate

# Start the server
$ python manage.py runserver
```

### Start Frontend
```bash
# After starting the backend
$ cd ../frontend

# Install all relevant packages (first-time setup)
$ npm install

# Start React app (development)
$ npm run start
```