// src/components/UserList.tsx
import React, { useEffect, useState } from 'react';
import { Box, Button, List, ListItem, ListItemButton, Typography } from '@mui/material';
import CharacterModal from './CharacterModal';

interface Character {
    name: string;
    height: string;
    mass: string;
    birth_year: string;
    films: string[];
    homeworld: string;
    url: string;
}

const UserList: React.FC = () => {
    const [characters, setCharacters] = useState<Character[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [nextPage, setNextPage] = useState<string | null>(null);
    const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const fetchCharacters = async (page: number) => {
        try {
            setLoading(true);
            const response = await fetch(`https://swapi.dev/api/people/?page=${page}`);
            const data = await response.json();
            setCharacters(data.results);
            setNextPage(data.next);
        } catch (err) {
            setError('Failed to fetch characters.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCharacters(currentPage);
    }, [currentPage]);

    const handleNextPage = () => {
        if (nextPage) setCurrentPage(currentPage + 1);
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const openModal = (character: Character) => {
        setSelectedCharacter(character);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedCharacter(null);
    };

    return (
        <Box width="48%">
            <Typography variant="h4" gutterBottom>
                Star Wars Characters
            </Typography>
            {loading ? (
                <Typography>Loading...</Typography>
            ) : error ? (
                <Typography color="error">{error}</Typography>
            ) : (
                        <List>
                            {characters.map((character) => (
                                <ListItem key={character.url} disablePadding>
                                    <ListItemButton onClick={() => openModal(character)}>
                                        <Typography>{character.name}</Typography>
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
            )}
            <Box mt={2} display="flex" justifyContent="space-between">
                <Button variant="contained" onClick={handlePreviousPage} disabled={currentPage === 1}>
                    Previous
                </Button>
                <Button variant="contained" onClick={handleNextPage} disabled={!nextPage}>
                    Next
                </Button>
            </Box>

            {/* Character Modal */}
            <CharacterModal open={isModalOpen} onClose={closeModal} character={selectedCharacter} />
        </Box>
    );
};

export default UserList;
