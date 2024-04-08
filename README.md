# TechTalks-Blog

TechTalks-Blog is a CMS-style blog platform built with the Model-View-Controller (MVC) architectural paradigm, designed for developers to publish articles, blog posts, and share their thoughts and opinions on technology. The platform supports user authentication, allowing developers to engage with the content by publishing their own posts and commenting on posts by others. Deployed on Heroku, this application utilizes Handlebars.js, Sequelize, express-session, and several other packages to offer a comprehensive blogging experience.

## Features

- User Authentication: Sign up, sign in, and logout capabilities.
- Blog Posts: Create, view, update, and delete blog posts.
- Comments: Add comments to blog posts.
- Dashboard: A personal dashboard for managing your blog posts.
- MVC Architecture: Organized codebase following the MVC paradigm.

## Technologies Used

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MySQL](https://www.mysql.com/)
- [Sequelize](https://sequelize.org/)
- [Handlebars.js](https://handlebarsjs.com/)
- [bcrypt](https://www.npmjs.com/package/bcrypt)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [express-session](https://www.npmjs.com/package/express-session)
- [connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize)

## Getting Started

### Prerequisites

- Node.js
- MySQL

### Installation

1. Clone the repository:

- git clone https://github.com/your-username/your-repo-name.git

2. Navigate to the project directory:

 - cd your-repo-name

3. Install dependencies

- Npm Install


4. Create a `.env` file in the root directory and add your MySQL credentials and session secret:

- DB_NAME='your_db_name'
- DB_USER='your_db_user'
- DB_PASSWORD='your_db_password'
- SESSION_SECRET='your_session_secret'

5. Run the schema.sql in MySQL to create your database.

- Npm run seed
  
6. Seed the database (optional):

7. Start the server

- Npm start




