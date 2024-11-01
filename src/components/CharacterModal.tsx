// src/components/CharacterModal.tsx
import React from 'react';
import { Dialog, DialogTitle, DialogContent, Typography } from '@mui/material';

interface Character {
    name: string;
    height: string;
    mass: string;
    birth_year: string;
    films: string[];
    homeworld: string;
}

interface CharacterModalProps {
    open: boolean;
    onClose: () => void;
    character: Character | null;
}

const CharacterModal: React.FC<CharacterModalProps> = ({ open, onClose, character }) => {
    if (!character) return null;

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>{character.name}</DialogTitle>
            <DialogContent>
                <Typography variant="body1">Height: {character.height} cm</Typography>
                <Typography variant="body1">Mass: {character.mass} kg</Typography>
                <Typography variant="body1">Birth Year: {character.birth_year}</Typography>
                <Typography variant="body1">Number of Films: {character.films.length}</Typography>
                <Typography variant="body1">Homeworld: {character.homeworld}</Typography>
            </DialogContent>
        </Dialog>
    );
};

export default CharacterModal;
