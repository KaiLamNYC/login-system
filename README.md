# Login System

This is a simple login system project built with React, Node.js, and MongoDB. It allows users to sign in with their email and password or use OAuth with GitHub or Google. Upon the initial login, users go through an onboarding process, and their selections are saved to the database. The project utilizes Redis for cache management alongside MongoDB for storing user information.

## Features

- **User Authentication:** Users can log in using their email and password or via OAuth with GitHub or Google.
- **Onboarding Process:** Upon the initial login, users are guided through an onboarding process.
- **Data Persistence:** User selections made during onboarding are saved to the database.
- **Dashboard:** After successful authentication and onboarding, users are redirected to their dashboard.

## Libraries Used

- [React Hook Form](https://react-hook-form.com/): Used for creating forms with React.
- [Zod](https://github.com/colinhacks/zod): A TypeScript-first schema validation library.
- [Shadcn](https://github.com/shadcn/shadcn): A UI library for creating sleek and modern user interfaces.

## Installation

To run the project locally, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-username/login-system.git
   ```
