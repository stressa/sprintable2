# sprintable backend
RESTful backend service for persisting sprintable data.


This service uses nedb and dotenv packages which require some local configuration.
To use dotenv to configure your environment create a file named .env and put it in the root of this backend project.
All vars specified will be loaded into the process.env object in javascript. You will want to specify the PORT and DB vars.

Example File Contents:
PORT=3001
DB=path/to/your/file.db
