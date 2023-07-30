import React, { useState } from 'react';
import GameDetails from './GameDetails';
import GameForm from './GameForm';


// Main App component
const App = () => {
  // State to store the list of games
  const [games, setGames] = useState([
    {
      id: 1,
      title: 'God of war',
      description: 'God of War is an action-adventure game franchise created by David Jaffe at Sony Santa Monica Studio. It began in 2005 on the PlayStation 2 video game console and has become a flagship series for PlayStation, consisting of nine installments across multiple platforms.',
      rating: 10,
      image: 'https://example.com/game1-image.jpg',
    },
    {
      id: 2,
      title: 'Witcher 3',
      description: 'The Witcher action role-playing games form a fantasy series developed by CD Projekt Red and published by CD Projekt. It is based on the book series of the same name by Polish writer Andrzej Sapkowski, acting as non-canonical sequels to the story of the books.',
      rating: 10,
      image: 'https://example.com/game2-image.jpg',
    },
    
  ]);

  

  // Function to add a new game to the list
  const addGame = (newGame) => {
    setGames([...games, newGame]);
  };

  

  // Function to edit a game in the list
  const editGame = (id, editedTitle, editedDescription, editedRating, editedImage) => {
    setGames((prevGames) =>
      prevGames.map((game) =>
        game.id === id
          ? {
              ...game,
              title: editedTitle,
              description: editedDescription,
              rating: editedRating,
              image: editedImage,
            }
          : game
      )
    );
  };

  // Function to delete a game from the list
  const deleteGame = (id) => {
    setGames((prevGames) => prevGames.filter((game) => game.id !== id));
  };

  return (
    <div style={styles.appContainer}>
      <h1 style={styles.appTitle}>GameWorld: The Ultimate Gaming Hub</h1>
      <div style={styles.gamesList}>
        {games.map((game) => (
          <GameDetails
            key={game.id}
            game={game}
            onDelete={deleteGame}
            onEdit={editGame}
          />
        ))}
      </div>
      <GameForm onAddGame={addGame} />
    </div>
  );
};

const styles = {
  appContainer: {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    background: '#EFEFEF',
  },
  appTitle: {
    fontSize: '32px',
    textAlign: 'center',
    marginBottom: '20px',
    color: '#FF5C58',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)',
  },
  gamesList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '20px',
  },
};

export default App;
