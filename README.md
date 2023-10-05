# Login System

This is a simple login system project built with React, TypeScript, and MongoDB. It allows users to sign in with their email and password or use OAuth with GitHub or Google. Upon the initial login, users go through an onboarding process, and their selections are saved to the database. The project utilizes Redis for cache management alongside MongoDB for storing user information.

## Features

- **User Authentication:** Users can log in using their email and password or via OAuth with GitHub or Google.
- **Onboarding Process:** Upon the initial login, users are guided through an onboarding process.
- **Data Persistence:** User selections made during onboarding can be saved to the database.
- **Dashboard:** After successful authentication and onboarding, users are redirected to their dashboard.

## Libraries Used

- [React Hook Form](https://react-hook-form.com/): Used for creating forms with React.
- [Zod](https://github.com/colinhacks/zod): A TypeScript-first schema validation library to validate forms.
- [Shadcn](https://github.com/shadcn/shadcn): A UI library for creating sleek and modern user interfaces.

## Installation

To run the project locally, follow these steps:

1. Clone this repository to your local machine.

   ```sh
   git clone https://github.com/kailamnyc/login-system.git

   ```

2. Install the project dependencies:

   ```sh
   npm install
   # or
   yarn install
   ```

3. Configure the environment variables by creating a .env file in the project root directory. You can use .env.example as a template:

4. Start the development server:

   ```sh
   npm run start
   # or
   yarn start
   ```

5. Open your web browser and visit http://localhost:3000 to see the app running locally.

## Notes

- **Dashboard:** Did not have enough time to complete dashboard UI but it would use a grid layout and indivdual cards for the selections with a corresponding picture.
- **Media Queries:** Also did not have time to make layout responsive but that would be done with tailwind media queries.
- **Redis:** Redis can be used along with MongoDB with cache aside to store any relevant data as the application scales.
- **Confirm Password:** One more issue that can be resolved is the confirm password field validation using zod refine method to make sure the passwords are actually the same.
- **User Model:** The User model has an onboarding boolean value that can be toggled to true after completing the onboarding process in the real application.
- **Middleware:** Routes are protexted by Next.js Middleware

## Things I Learned

- **User Authentication** While I've used NextAuth in previous full-stack projects, this assignment allowed me to dive deeper into its capabilities. I explored various options NextAuth provides and gained a better understanding of how to handle the User Authentication Flow, especially when it comes to logging in with credentials, a feature I hadn't used extensively before. This experience expanded my knowledge of user authentication and security practices in web development.

