// src/App.tsx
import React from 'react';
import { Box } from '@mui/material';
import UserList from './components/UserList';
import FavoriteList from './components/FavoriteList';

const App: React.FC = () => {
  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      <UserList />
      <FavoriteList />
    </Box>
  );
};

export default App;
