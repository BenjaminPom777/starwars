// src/components/FavoriteList.tsx
import React from 'react';
import { Box, Typography, List, ListItem } from '@mui/material';
import { Character } from '../types/characterTypes';

interface FavoriteListProps {
    favorites: Character[];
}

const FavoriteList: React.FC<FavoriteListProps> = ({ favorites }) => {
    return (
        <Box width="48%">
            <Typography variant="h4" gutterBottom>
                Favorites
            </Typography>
            <List>
                {favorites.length === 0 ? (
                    <Typography>No favorites yet.</Typography>
                ) : (
                    favorites.map((character) => (
                        <ListItem key={character.url}>
                            <Typography>{character.name}</Typography>
                        </ListItem>
                    ))
                )}
            </List>
        </Box>
    );
};

export default FavoriteList;
