# Advanced RSVP System

A comprehensive event management platform with user and admin panels, built with Next.js and MongoDB.

## Features

- **User Authentication**
  - Email/password registration and login
  - Forgot password functionality
  - Profile management

- **Event Management**
  - Create, edit, and delete events
  - Set event capacity, date, time, location
  - Private or public event settings
  - Event categorization
  - RSVP deadline configuration

- **RSVP Functionality**
  - Users can respond with "Attending", "Maybe", or "Decline"
  - Attendees can bring additional guests (within capacity limits)
  - Add notes for dietary requirements or special needs
  - Real-time capacity tracking

- **Admin Panel**
  - Dashboard with system statistics
  - Manage all events and users
  - System settings
  - Default admin credentials: username `admin`, password `admin123`

- **User Dashboard**
  - View upcoming, maybe, and past events
  - Track events organized
  - Manage RSVPs

## Tech Stack

- **Frontend**:
  - Next.js 15+
  - React 19+
  - TailwindCSS for styling
  - React Hook Form for form handling
  - Zod for validation

- **Backend**:
  - Next.js API routes
  - NextAuth.js for authentication
  - MongoDB/Mongoose for database

- **Additional Tools**:
  - date-fns for date formatting
  - React Hot Toast for notifications
  - Nodemailer for email functionality

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- MongoDB instance (local or Atlas)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/rsvp-system.git
   cd rsvp-system
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env.local` file with the following:
   ```
   MONGODB_URI=your_mongodb_connection_string
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your_nextauth_secret
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASS=your_email_app_password
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   ```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Initial Setup

When you first start the application, you can register with the username `admin` and password `admin123` to create an admin account.

## Project Structure

```
rsvp/
├── src/
│   ├── app/                 # Next.js app directory
│   │   ├── api/             # API routes
│   │   ├── admin/           # Admin dashboard
│   │   ├── events/          # Event pages
│   │   ├── login/           # Authentication pages
│   │   ├── profile/         # User profile pages
│   │   └── ...
│   ├── components/          # UI components
│   ├── lib/                 # Utility functions
│   ├── models/              # Mongoose models
│   └── providers/           # Context providers
├── public/                  # Static assets
└── ...config files
```

## API Routes

- `/api/auth/*` - Authentication endpoints (NextAuth.js)
- `/api/events` - Event management
- `/api/events/:id` - Single event operations
- `/api/events/:id/rsvp` - RSVP management
- `/api/users/*` - User management

## Deployment

This application can be deployed on platforms like Vercel or Netlify.

1. Push your code to a Git repository
2. Connect your repository to Vercel/Netlify
3. Set the environment variables
4. Deploy

## License

[MIT](LICENSE)
