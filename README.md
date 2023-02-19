# Svelte-Flask-Starter

Starter for [`SvelteKit`](https://kit.svelte.dev/) frontend, powered by [`Flask`](https://flask.palletsprojects.com/en/2.2.x/) backend, using the [`Application Factory Pattern`](https://flask.palletsprojects.com/en/2.2.x/patterns/appfactories/).

Includes support for:

- [`Prettier`](https://prettier.io/)
- [`ESLint`](https://eslint.org/)
- [`Tailwind CSS`](https://tailwindcss.com/)
- [`Black`](https://black.readthedocs.io/en/stable/)

> To deploy your app, you may need to [`create an account`](https://deta.space/signup) for Deta Space.

## Frontend

Instructions for developing the frontend on Windows. You may need to install [`Node`](https://nodejs.org/en/) first.

```powershell
# navigate to frontend
cd .\frontend\
# install dependencies
npm i
# start development server
npm run dev
```

## Backend

Instructions for developing the backend on Windows. You may need to install [`Python`](https://www.python.org/) and [`Pipenv`](https://pipenv.pypa.io/en/latest/) first.

```powershell
# navigate to backend
cd .\backend\
# create virtual environment dir (optional)
md .venv
# install dependencies
pipenv install --dev
# activate virtual environment
pipenv shell
# start development server
flask run --reload
```

It is also possible to start the development server directly from the frontend without activating the virtual environment.

```powershell
# navigate to frontend
cd .\frontend\
# start development server
npm run flask
```

## Deployment

To deploy your app, first setup the [`Space CLI`](https://deta.space/docs/en/basics/cli).

Create a `requirements.txt` file which is expected in the build pipeline.

```powershell
# navigate to backend
cd .\backend\
# create requirements.txt
pipenv requirements > requirements.txt
```

Deploy from the project root directory.

```powershell
# create a new project (once)
space new
# package and upload files
space push
```
