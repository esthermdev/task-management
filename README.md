# Task Management Application

A full-stack task management application built with React and Node.js, featuring a PostgreSQL database. The application allows users to create, read, update, and delete tasks, with support for task priorities, status tracking, and due dates.

## Live Demo

A deployed version of the application is available at:
[Task Management App](https://task-management-frontend-jk08uwhc0-esthermdevs-projects.vercel.app/)

This demo version is deployed using:
- Frontend: Vercel
- Backend: Render
- Database: Supabase

## Features

- Create, view, edit, and delete tasks
- Sort tasks by status, priority, and due date
- Priority levels with visual indicators (Low, Normal, Urgent)
- Task status tracking (Pending, In Progress, Completed)
- Due date assignment and tracking
- Responsive Material-UI design

## Local Development Setup

The instructions below will help you set up your own local instance of the application, separate from the deployed version. This is useful for development, testing, or running your own instance of the application.

### Prerequisites

- Node.js (v14 or higher)
- PostgreSQL (v12 or higher)
- npm or yarn

### Local Database Setup

1. Create a new PostgreSQL database for your local instance
2. Create a `.env` file in the backend directory with your local database credentials:
   ```
   DB_USER=your_local_db_user
   DB_HOST=localhost
   DB_NAME=your_local_db_name
   DB_PASSWORD=your_local_db_password
   DB_PORT=5432
   PORT=5000
   ```

3. Set up the tasks table in your local database:
   ```sql
   CREATE TABLE tasks (
     id SERIAL PRIMARY KEY,
     title VARCHAR(255) NOT NULL,
     description TEXT,
     status VARCHAR(50) NOT NULL,
     priority VARCHAR(50) NOT NULL,
     due_date DATE,
     created_at TIMESTAMP NOT NULL,
     updated_at TIMESTAMP NOT NULL
   );
   ```

### Local Backend Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the backend directory:
   ```bash
   cd backend
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the local server:
   ```bash
   npm start
   ```

Your local backend server will run on `http://localhost:5000`.

### Local Frontend Setup

> **Important**: Make sure your local backend server is running and properly connected to your local database before proceeding.

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure the frontend to use your local backend:
   - In `src/services/api.js`, update the API_URL to point to your local backend:
     ```javascript
     const API_URL = 'http://localhost:5000/api';
     ```

4. Start the local development server:
   ```bash
   npm start
   ```

Your local frontend application will run on `http://localhost:3000`.

## API Endpoints

The following endpoints are available on both the deployed version and your local instance:

- `GET /api/tasks` - Retrieve all tasks
- `GET /api/tasks/:id` - Retrieve a specific task
- `POST /api/tasks` - Create a new task
- `PUT /api/tasks/:id` - Update an existing task
- `DELETE /api/tasks/:id` - Delete a task

## Contributing

Feel free to submit issues and enhancement requests. For substantial changes:

1. Fork the repository
2. Create a local development setup following the instructions above
3. Create your feature branch
4. Commit your changes
5. Push to the branch
6. Create a Pull Request