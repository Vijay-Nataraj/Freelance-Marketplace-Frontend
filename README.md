# Full Stack Platform Frontend

## Overview

This is a full-stack React application that serves as the frontend for a platform offering services for both freelancers and clients. The platform includes various features like user authentication (login/register), password reset functionality, freelancer dashboards, client dashboards, job listings, service creation, and payments.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Components](#components)
- [Routing Structure](#routing-structure)
- [Contributing](#contributing)

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **React Router**: A routing library for React to navigate between pages.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **Axios**: Promise-based HTTP client for making API requests (though not explicitly mentioned in your code, it's often used in such projects).

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name

   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the application**:

   ```bash
   npm start
   ```

## Usage

Navigate to different pages using the following routes:

- `/` - Home Page
- `/login` - Login Page
- `/register` - Register Page
- `/forgot-password` - Forgot Password Page
- `/reset-password/:token` - Reset Password Page (for token-based password reset)
- `/user/freelancer-dashboard` - Freelancer Dashboard
- `/user/freelancer-dashboard/services` - Freelancer Services List
- `/user/freelancer-dashboard/services/create` - Create a New Service (Freelancer)
- `/user/profile` - User Profile Page
- `/user/client-dashboard` - Client Dashboard
- `/user/client-dashboard/jobs` - Job Listings Page (Client)
- `/user/client-dashboard/create-job` - Create a New Job (Client)
- `/user/client-dashboard/freelancer-search` - Freelancer Search (Client)
- `/payment` - Payment Page

---

## Components Overview

### Navbar

The `Navbar` component provides navigation links to different pages in the app, including login, registration, and dashboard pages.

### Footer

The `Footer` component provides footer content across the site.

### Home

The `Home` page is the landing page for the application with an overview and introduction to the platform.

### LoginPage

The `LoginPage` component allows users to log into the platform by providing their credentials.

### RegisterPage

The `RegisterPage` component enables new users to sign up by providing their email, password, and other necessary details.

### ForgotPassword

The `ForgotPassword` component allows users to request a password reset by entering their registered email.

### ResetPassword

The `ResetPassword` component allows users to reset their password using a token sent to their email.

### FreelancerDashboard

The `FreelancerDashboard` component provides freelancers with an overview of their activities, services, and stats.

### ClientDashboard

The `ClientDashboard` component is for clients to manage job listings, view and post new jobs, and search for freelancers.

### ServiceList

The `ServiceList` component displays a list of services offered by freelancers.

### CreateService

The `CreateService` component allows freelancers to create and add new services to the platform.

### ProfilePage

The `ProfilePage` component displays and allows the editing of a user's profile information.

### CreateJob

The `CreateJob` component allows clients to create new job listings that freelancers can apply for.

### JobListingsPage

The `JobListingsPage` component displays a list of job listings for clients.

### FreelancerSearch

The `FreelancerSearch` component allows clients to search for freelancers based on different filters.

### Payment

The `Payment` component facilitates the payment process on the platform, allowing for transactions between clients and freelancers.
