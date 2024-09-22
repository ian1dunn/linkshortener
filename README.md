# [clipti.me](https://clipti.me/)

This project is a full-stack link shortener implemented in **React** and **Django**.

> For more details, see [the additional documentation](./DOCS.md).

## First-time Setup

If you haven't already, [install Docker Compose](https://docs.docker.com/compose/install/).

```bash
# The prod profile uses an Nginx reverse proxy and certbot to host an https server
$ docker compose --profile dev up  # -d detaches the containers from the existing shell.

$ docker compose down   # Shutdown the containers
```

> To run in different environments (for production or restarting on changes), see [Project Environments](./DOCS.md#project-environments)

## Future Improvements
- Admin page (see all links and users)
- Email verification/password reset
- More link metrics (locations, etc.)
- Finalize production environment
  - Complete Django [deployment checklist](https://docs.djangoproject.com/en/5.1/howto/deployment/checklist/)
  - Setup database updates/migrations for dev and prod profiles
- A nice loading screen for redirects

## API
```
http://localhost:80/api/
```

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

