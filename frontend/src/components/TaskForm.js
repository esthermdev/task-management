// src/components/TaskForm.js
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Box,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  Paper
} from '@mui/material';
import { createTask, getTask, updateTask } from '../services/api';

const TaskForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    status: 'pending',
    priority: 'medium',
    due_date: ''
  });

  useEffect(() => {
    if (id) {
      fetchTask();
    }
  }, [id]);

  const fetchTask = async () => {
    try {
      const response = await getTask(id);
      const task = response.data;
      // Format the date to YYYY-MM-DD for the input field
      const formattedDate = task.due_date ? task.due_date.split('T')[0] : '';
      setFormData({ ...task, due_date: formattedDate });
    } catch (error) {
      console.error('Error fetching task:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        await updateTask(id, formData);
      } else {
        await createTask(formData);
      }
      navigate('/');
    } catch (error) {
      console.error('Error saving task:', error);
    }
  };

  return (
    <Paper sx={{ p: 4 }}>
      <Typography variant="h5" gutterBottom>
        {id ? 'Edit Task' : 'Create New Task'}
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
        <TextField
          fullWidth
          label="Title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          margin="normal"
          multiline
          rows={4}
        />
        <FormControl fullWidth margin="normal">
          <InputLabel>Status</InputLabel>
          <Select
            name="status"
            value={formData.status}
            onChange={handleChange}
            label="Status"
          >
            <MenuItem value="pending">Pending</MenuItem>
            <MenuItem value="in_progress">In Progress</MenuItem>
            <MenuItem value="completed">Completed</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth margin="normal">
          <InputLabel>Priority</InputLabel>
          <Select
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            label="Priority"
          >
            <MenuItem value="low">Low</MenuItem>
            <MenuItem value="medium">Medium</MenuItem>
            <MenuItem value="high">High</MenuItem>
          </Select>
        </FormControl>
        <TextField
          fullWidth
          label="Due Date"
          name="due_date"
          type="date"
          value={formData.due_date}
          onChange={handleChange}
          margin="normal"
          InputLabelProps={{ shrink: true }}
        />
        <Box sx={{ mt: 3, display: 'flex', gap: 2 }}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
          >
            {id ? 'Update Task' : 'Create Task'}
          </Button>
          <Button
            variant="outlined"
            onClick={() => navigate('/')}
          >
            Cancel
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default TaskForm;