# URL Shortener with User Authentication

This is a **URL Shortener** application built with **Express** and **EJS** that allows users to shorten long URLs and manage their shortened URLs after signing up and logging in.

## Features:
- **User Authentication**: Sign up, log in, and log out.
- **URL Shortening**: Convert long URLs into short URLs.
- **Dashboard**: View and manage your shortened URLs.
- **Persistent Storage**: Data is stored in **MongoDB** to persist user accounts and shortened URLs.

## Technologies Used:
- **Backend**: Express.js
- **Frontend**: EJS (Embedded JavaScript)
- **Database**: MongoDB (for storing users and shortened URLs)
- **Authentication**: JWT (for user authentication and session management)
- **Styling**: CSS

## Setup and Installation

Follow these steps to set up the project on your local machine:

### 1. Clone the repository:
```bash
git clone https://github.com/Rohitkhot1718/url-shortener.git
cd url-shortener
```

### 2. Install dependencies:
Make sure you have **Node.js** and **npm** installed. Then install the required dependencies using npm:
```bash
npm install
```

### 3. Set up MongoDB:
You need to set up a MongoDB database. You can either:
- Use a local MongoDB instance.
- Use a cloud-based solution like **MongoDB Atlas**.

### 4. Start the application:
```bash
npm start
```

By default, the app will be running on `http://localhost:3000`.

## Features Walkthrough

### 1. **Sign Up and Log In**
- To use the URL shortening feature, you need to first sign up or log in.
- Users can sign up with a username, email, and password.
- Once logged in, users can start shortening URLs.

### 2. **Shorten URLs**
- After logging in, you can shorten any URL by entering the long URL in the provided input field.
- Click "Shorten URL" to generate a unique short URL.
- The short URL will be displayed and linked to the original URL.

### 3. **User Dashboard**
- After logging in, you’ll be able to see all the URLs you’ve shortened under the "My URLs" section.
- Each shortened URL has options to:
  - **Copy** the short URL to your clipboard.
  - **Delete** the shortened URL.

### 4. **Log Out**
- You can log out at any time, which will redirect you to the homepage or login page.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Feel free to open an issue or submit a pull request if you find any bugs or want to contribute to this project.

---
