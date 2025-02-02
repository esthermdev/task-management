// backend/src/controllers/taskController.js
const db = require('../config/database');

const taskController = {
  // Get all tasks
  getAllTasks: async (req, res) => {
    try {
      const result = await db.query(
        'SELECT id, title, description, status, priority, due_date, created_at, updated_at FROM tasks ORDER BY created_at DESC'
      );
      res.json(result.rows);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error', details: error.message });
    }
  },

  // Get single task
  getTask: async (req, res) => {
    const { id } = req.params;
    try {
      const result = await db.query(
        'SELECT id, title, description, status, priority, due_date, created_at, updated_at FROM tasks WHERE id = $1',
        [id]
      );
      if (result.rows.length === 0) {
        return res.status(404).json({ error: 'Task not found' });
      }
      res.json(result.rows[0]);
    } catch (error) {
      console.error('Error getting task:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  // Create task
  createTask: async (req, res) => {
    const { title, description, status, priority, due_date } = req.body;
    try {
      const result = await db.query(
        `INSERT INTO tasks (title, description, status, priority, due_date, created_at, updated_at) 
         VALUES ($1, $2, $3, $4, $5, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP) 
         RETURNING id, title, description, status, priority, due_date, created_at, updated_at`,
        [title, description, status, priority, due_date]
      );
      res.status(201).json(result.rows[0]);
    } catch (error) {
      console.error('Error creating task:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  // Update task
  updateTask: async (req, res) => {
    const { id } = req.params;
    const { title, description, status, priority, due_date } = req.body;
    try {
      const result = await db.query(
        `UPDATE tasks 
         SET title = $1, description = $2, status = $3, priority = $4, due_date = $5, updated_at = CURRENT_TIMESTAMP 
         WHERE id = $6 
         RETURNING id, title, description, status, priority, due_date, created_at, updated_at`,
        [title, description, status, priority, due_date, id]
      );
      if (result.rows.length === 0) {
        return res.status(404).json({ error: 'Task not found' });
      }
      res.json(result.rows[0]);
    } catch (error) {
      console.error('Error updating task:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  // Delete task
  deleteTask: async (req, res) => {
    const { id } = req.params;
    try {
      const result = await db.query('DELETE FROM tasks WHERE id = $1 RETURNING id', [id]);
      if (result.rows.length === 0) {
        return res.status(404).json({ error: 'Task not found' });
      }
      res.json({ message: 'Task deleted successfully', id: result.rows[0].id });
    } catch (error) {
      console.error('Error deleting task:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};

module.exports = taskController;