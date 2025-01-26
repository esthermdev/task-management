// src/components/TaskItem.js
import React from 'react';
import { TableRow, TableCell, Button, Box, Chip } from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';
import OutlinedFlagRoundedIcon from '@mui/icons-material/OutlinedFlagRounded';
import { useNavigate } from 'react-router-dom';

const TaskItem = ({ task, onDeleteClick }) => {
  const navigate = useNavigate();

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'Urgent': return 'error';
      case 'Normal': return 'warning';
      case 'Low': return 'success';
      default: return 'default';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return 'success';
      case 'In Progress': return 'warning';
      case 'Pending': return 'info';
      default: return 'default';
    }
  };

  return (
    <TableRow>
      <TableCell>{task.title}</TableCell>
      <TableCell>{task.description}</TableCell>
      <TableCell>
        <Chip
          label={task.status}
          color={getStatusColor(task.status)}
          size="small"
        />
      </TableCell>
      <TableCell>
      <Chip
          icon={
            <OutlinedFlagRoundedIcon 
              sx={{ fontSize: 16 }}
              color={getPriorityColor(task.priority)}
            />
          }
          label={task.priority}
          variant="outlined"
          color={getPriorityColor(task.priority)}
          size="small"
          sx={{ padding: 1 }}
        />
      </TableCell>
      <TableCell>
        {task.due_date ? new Date(task.due_date).toLocaleDateString() : '-'}
      </TableCell>
      <TableCell align="center">
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
          <Button
            size="small"
            startIcon={<EditIcon />}
            onClick={() => navigate(`/edit/${task.id}`)}
          >
            Edit
          </Button>
          <Button
            size="small"
            color="error"
            startIcon={<DeleteIcon />}
            onClick={() => onDeleteClick(task)}
          >
            Delete
          </Button>
        </Box>
      </TableCell>
    </TableRow>
  );
};

export default TaskItem;