# CITRUX TECHNICAL TEST BACKEND

The backend of this project is built using Express and Node.js, written in TypeScript. It utilizes the Typegoose library for MongoDB database management. The API enables CRUD operations on articles and queries. Articles store summaries, content, and timestamps for efficient retrieval and management of information.

## Installation 
To install the project dependencies, ensure you have Yarn installed and follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Run yarn to install all dependencies

Important: Ensure you have Node.js version >18.17 installed on your system.

## Usage

1. Create a `.env` file in the project directory.
2. Inside the `.env `file, define the necessary environment variables as per your configuration.
```bash 
    PORT = 4000
    API_VERSION_ROUTE = /api/v1
    OPENAI_API_KEY = sk-proj-<Your API KEY>
    MONGO_DB_URI = mongodb+srv://<Username>:<Password>@...mongodb.net
```
It's important to set the variables `PORT` and `API_VERSION_ROUTE` as i show you to for proper usage.

3. Run the development server with the following command:

```bash
yarn dev
```

## Deployment
While this backend is deployed on Render, it's recommended to use it locally for optimal interaction with the frontend. However, if you wish to explore the deployed version, you can access it via the provided link.

[Render Deployment](https://citruxtechnicaltestbackend.onrender.com)

## Contributors
1. [Esteban Maya](www.linkedin.com/in/estebanmaya-fullstackdeveloper)

