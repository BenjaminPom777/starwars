// src/components/FavoriteList.tsx
import React from 'react';
import { Box, Typography, List, ListItem } from '@mui/material';

const FavoriteList: React.FC = () => {
    // Placeholder for favorite characters (use state if necessary)
    const favoriteCharacters: string[] = ['Luke Skywalker', 'Darth Vader'];

    return (
        <Box width="48%">
            <Typography variant="h4" gutterBottom>
                Favorites
            </Typography>
            <List>
                {favoriteCharacters.map((name, index) => (
                    <ListItem key={index}>
                        <Typography>{name}</Typography>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default FavoriteList;
