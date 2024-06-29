import React, { createContext, useState, useContext, ReactNode } from 'react';

interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: string;
    image: string;
}

interface FavoritesContextProps {
    favorites: Character[];
    addToFavorites: (character: Character) => void;
    removeFromFavorites: (id: number) => void;
}

interface FavoritesProviderProps {
    children: ReactNode;
}

const FavoritesContext = createContext<FavoritesContextProps | undefined>(undefined);

export const FavoritesProvider: React.FC<FavoritesProviderProps> = ({ children }) => {
    const [favorites, setFavorites] = useState<Character[]>([]);

    const addToFavorites = (character: Character) => {
        setFavorites([...favorites, character]);
    };

    const removeFromFavorites = (id: number) => {
        setFavorites(favorites.filter(character => character.id !== id));
    };

    return (
        <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}>
            {children}
        </FavoritesContext.Provider>
    );
};

export const useFavorites = () => {
    const context = useContext(FavoritesContext);
    if (!context) {
        throw new Error('useFavorites must be used within a FavoritesProvider');
    }
    return context;
};
