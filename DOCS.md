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

## Project Environments

### Production (HTTPS Certification with Let's Encrypt)

```bash
# Do a dry run of the certbot container because Let's Encrypt limits available free certificates
$ docker compose --profile certbot run --rm certbot certonly --webroot --webroot-path /var/www/certbot/ --dry-run -d [domain-name]

# If there are errors, actually generate the HTTPS certificate
$ docker compose --profile certbot run --rm certbot certonly --webroot --webroot-path /var/www/certbot/ -d [domain-name]

# Restart all containers to propagate changes
$ docker compose --profile prod restart -d  # -d detaches the containers from the existing shell.

$ docker compose down   # Shutdown the containers
```

> Let's Encrypt certificates last for three months, after which it is necessary to renew them. To renew certificates, use:
> ```bash
> docker-compose run --rm certbot renew
> ```

### Testing
To run what will actually be deployed in a production environment, use the `dev` profile. However, to test changes in
real-time to avoid building Docker containers after changes, use the following commands.

### Start Backend
```bash
$ cd backend

# Install all relevant packages (first-time setup)
$ pip install -r requirements.txt

# This environment makes Django switch to a light-weight SQLite database to avoid needing to run the Postgres container
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

## Common Issues
If data in the table doesn't exist using the `prod` or `dev` profiles, run the following commands (assuming the 
containers are running).

```bash
$ docker compose exec backend python3 manage.py makemigrations
$ docker compose exec backend python3 manage.py migrate
$ docker compose --profile <prod|dev> restart 
```