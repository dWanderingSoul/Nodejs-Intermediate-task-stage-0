﻿//This is just a readme.md file and it is not part of the assessment//
# Nodejs-Intermediate-task-stage-0 #
Memory App with Basic Authentication
This Node.js application allows users to sign in, create, and view memories. It utilizes basic authentication and stores data in a JSON file.

Requirements:
Node.js

Features:
User login with basic authentication (username: 'admin', password: 'password')
Create new memories
View all memories

API Endpoints:
GET /memories: Retrieves all memories from the JSON file.
POST /memories: Creates a new memory (requires authentication and valid memory data in the request body).
Authentication:

The application uses basic authentication with username: 'admin' and password: 'password'. You need to provide these credentials in the request headers to access the API endpoints.

Memory Format:
Memories are stored in a JSON file named memories.json. Each memory object has the following properties:
id: A randomly generated string as the unique identifier.
content: The actual content of the memory (string).


This task includes the following instructions 
1. Create an app that users can sign in and post memories
2. Use only NodeJs with no external packages
3. Use basic authentication, the username should be ‘admin’ and password ‘password’
4. Use a middleware to check the username and password, if the username is ‘admin’ and the password is ‘password’, proceed to sign in by passing control to the next middleware else, respond with status code 401 and message ‘Authentication required’.
5. You are required to use only 2 files, index.js and `auth.js`auth.js will contain the middleware that will check for username and password before signing users in.
6. index.js will handle the rest of the logic with the middleware being on top to make sure users are authenticated before viewing or posting memories.
7. An authenticated user can create and view memories.
8. A memory should contain an `id` and the actual content as follows {id: string | number, content : string }
9. Do not worry about persisting content, use a json file as your database.
10. You can use either commonJs or modules
11. The logic on how to create and view memories is up to you but make sure every memory created must be saved in the json file and can also retrieved from the json file.
