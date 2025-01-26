# Task Management Application

A full-stack task management application built with React and Node.js, featuring a PostgreSQL database. The application allows users to create, read, update, and delete tasks, with support for task priorities, status tracking, and due dates.

## Features

- Create, view, edit, and delete tasks
- Sort tasks by status, priority, and due date
- Priority levels with visual indicators (Low, Normal, Urgent)
- Task status tracking (Pending, In Progress, Completed)
- Due date assignment and tracking
- Responsive Material-UI design

## Backend Setup

### Prerequisites

- Node.js (v14 or higher)
- PostgreSQL (v12 or higher)
- npm or yarn

### Database Setup

1. Create a new PostgreSQL database for the application
2. Create a `.env` file in the backend directory with the following variables:
   ```
   DB_USER=your_db_user
   DB_HOST=localhost
   DB_NAME=your_db_name
   DB_PASSWORD=your_db_password
   DB_PORT=5432
   PORT=5000
   ```

3. Create the tasks table in your database:
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

### Starting the Backend

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

4. Start the server:
   ```bash
   npm start
   ```

The backend server should now be running on `http://localhost:5000`.

## Frontend Setup

> **Important**: Make sure the backend server is running and properly connected to the database before proceeding with the frontend setup.

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

The frontend application should now be running on `http://localhost:3000`.

## API Endpoints

- `GET /api/tasks` - Retrieve all tasks
- `GET /api/tasks/:id` - Retrieve a specific task
- `POST /api/tasks` - Create a new task
- `PUT /api/tasks/:id` - Update an existing task
- `DELETE /api/tasks/:id` - Delete a task

## Contributing

Feel free to submit issues and enhancement requests.