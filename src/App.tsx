// src/App.tsx
import React, { useState } from 'react';
import { Box } from '@mui/material';
import UserList from './components/UserList';
import FavoriteList from './components/FavoriteList';
import { Character } from './types/characterTypes';

const App: React.FC = () => {
  const [favorites, setFavorites] = useState<Character[]>([]);

  const toggleFavorite = (character: Character) => {
    if (favorites.some((fav) => fav.url === character.url)) {
      setFavorites(favorites.filter((fav) => fav.url !== character.url));
    } else {
      setFavorites([...favorites, character]);
    }
  };

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      <UserList favorites={favorites} toggleFavorite={toggleFavorite} />
      <FavoriteList favorites={favorites} />
    </Box>
  );
};

export default App;
