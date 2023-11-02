This is a code challenge project for [Rabobank](https://www.rabobank.nl). 

## The challenge
The idea is that we need to process customer statements and generate a report.
These statements can be provided in either CSV or XML format and use the MT940 format.

There are two validations that need to be performed:
- All transaction references should be unique
- The end balance needs to be validated

The project can be viewed here: https://rabo-challenge.vercel.app

## Getting Started
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

If you want to run this locally, you can clone this repository and run `npm install` to install all dependencies. After that you can run `npm run dev` to start the development server.

You need a MongoDB connection string in your local environment to run this project. You can create a `.env` file in the root of the project and add the following line to it:<br>
`MONGODB_URI="mongodb+srv://<send me an e-mail for the secret url>"`

## Technological Stack

Why Next.js? It's really opinionated which forces you to use their API's. This makes it easier to get started and to get a project up and running. It also has a lot of built-in features like server-side rendering, static site generation, file-based routing, etc.

With Next.js you don't need a separate front- and back-end because it handles it all for you. This makes it easier to deploy and maintain using the Vercel infrastructure.

My personal concerns when building apps are:
- Maintainability
- Security
- Performance

The stack that this project is build on delivers on all of these concerns.

- Server/Framework - [Next.js](https://nextjs.org/)<br>
- React - [React](https://reactjs.org/)<br>
- Typescript - [Typescript](https://www.typescriptlang.org/)<br>
- Component Library - [shadcn](https://ui.shadcn.com/)<br>
- Styling Library - [Tailwind CSS](https://tailwindcss.com/)<br>
- Database - [MongoDB](https://www.mongodb.com/)<br>
- Schema validation - [zod](https://github.com/colinhacks/zod)<br>

## Train of thoughts

### 1. What is the best way to validate the statements?
You really don't want to upload files to a server to process the data. Uploading files is a major security risk and takes great skill to do it right. I've decided to use the FileReader API to read the files and process them in the browser using a custom parser (utilising [d3/fetch](https://d3js.org/d3-fetch)). 
By using ZOD schema validation both on the client and server side, we can validate the data before sending it to the database. This way we can prevent unnecessary requests to the server and save bandwidth. Also this prevents an attacker from sending malicious data to the server.

### 2. How to handle the data?
I've decided to use MongoDB as a database because it's easy to set up and it's schemaless. By converting both CSV and XML data into the same typed format all statements are stored in the same format. We can also easily query the data using MongoDB's query language. 

### 3. Putting it al together
I really wanted to use the latest Next.js features for this project. Such as:<br>
- [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating#fetching-data-on-the-server-with-fetch)<br>
- [App Router](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts)<br>
- [React Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components)<br>

### 4. What about the UI?
I've decided to use [shadcn](https://ui.shadcn.com/) as a component library. And Tailwind CSS for styling because it's easy to customise. It also has a lot of built-in features that make it easy to build a responsive website. All statements are stored in MongoDB, therefore I've decided to create an archive page that show a log of all statements that are processed. Also it's nice to have a theme toggle to demonstrate the power of Tailwind CSS.

### 5. What I wanted to do but time was running out
- Integrate some kind of authentication using [NextAuth.js](https://next-auth.js.org/)
- Setup monitoring/dashboard for errors using [Sentry](https://sentry.io/welcome/) or [New Relic](https://newrelic.com/)
- Create some unit/integration tests using [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

### 6. What I've learned
- Next.js is awesome! But it takes time to learn all the new features in v14.
- Go for the MVP route. Make sure your users can use the app and add improvements later.
- It's hard to create multiple themes when you don't have a proper Rabobank style guide. 

### The End
Thanks for reading and feel free to contact me [andremuijen@passionatepeople.io](mailto:andremuijen@passionatepeople.io)