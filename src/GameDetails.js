import React, { useState } from 'react';

const GameDetails = ({ game, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(game.title);
  const [editedDescription, setEditedDescription] = useState(game.description);
  const [editedRating, setEditedRating] = useState(game.rating);
  const [editedImage, setEditedImage] = useState(game.image);

  const handleSave = () => {
    onEdit(game.id, editedTitle, editedDescription, editedRating, editedImage);
    setIsEditing(false);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEditedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div style={styles.gameContainer}>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            style={styles.editInput}
          />
          <textarea
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
            style={styles.editTextarea}
          />
          <input
            type="number"
            value={editedRating}
            onChange={(e) => setEditedRating(parseFloat(e.target.value))}
            style={styles.editInput}
          />
          <div style={styles.imageUploadContainer}>
            <label htmlFor="imageUpload" style={styles.uploadLabel}>
              Upload Image
            </label>
            <input
              type="file"
              id="imageUpload"
              accept="image/*"
              onChange={handleImageChange}
              style={styles.imageUploadInput}
            />
          </div>
          <button onClick={handleSave} style={styles.saveButton}>
            Save
          </button>
        </>
      ) : (
        <>
          <div style={styles.gameImageContainer}>
            {editedImage ? (
              <img src={editedImage} alt="Game" style={styles.gameImage} />
            ) : (
              <div style={styles.noImage}>No Image</div>
            )}
          </div>
          <h2 style={styles.gameTitle}>{game.title}</h2>
          <p style={styles.gameDescription}>{game.description}</p>
          <p style={styles.gameRating}>Rating: {game.rating}</p>
          <div style={styles.buttonContainer}>
            <button onClick={() => setIsEditing(true)} style={styles.editButton}>
              Edit
            </button>
            <button onClick={() => onDelete(game.id)} style={styles.deleteButton}>
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
};

const styles = {
  gameContainer: {
    backgroundColor: '#F8F9FA',
    padding: '15px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
    transition: 'background-color 0.2s ease',
    position: 'relative',
    overflow: 'hidden',
  },
  gameTitle: {
    fontSize: '24px',
    marginBottom: '10px',
    color: '#007BFF',
    textDecoration: 'underline',
    cursor: 'pointer',
    transition: 'color 0.2s ease',
  },
  gameDescription: {
    fontSize: '16px',
    marginBottom: '10px',
    color: '#333',
  },
  gameRating: {
    fontSize: '14px',
    color: '#6C757D',
  },
  editInput: {
    display: 'block',
    width: '100%',
    padding: '8px 10px',
    marginBottom: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  editTextarea: {
    display: 'block',
    width: '100%',
    padding: '8px 10px',
    marginBottom: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    resize: 'vertical',
  },
  saveButton: {
    display: 'block',
    margin: '0 auto',
    padding: '10px 20px',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: '#28A745',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
  },
  editButton: {
    display: 'inline-block',
    margin: '0 5px',
    padding: '8px 16px',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: '#007BFF',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
  },
  deleteButton: {
    display: 'inline-block',
    margin: '0 5px',
    padding: '8px 16px',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: '#DC3545',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
  },
  buttonContainer: {
    textAlign: 'center',
  },
  gameImageContainer: {
    width: '100%',
    height: '200px',
    marginBottom: '10px',
    borderRadius: '10px',
    overflow: 'hidden',
    position: 'relative',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease',
  },
  gameImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  noImage: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#AAA',
  },
  imageUploadContainer: {
    marginBottom: '6px',
  },
  uploadLabel: {
    display: 'block',
    width: '100%',
    padding: '10px 20px',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: '#FF5C58',
    border: 'none',
    borderRadius: '2px',
    cursor: 'pointer',
    textAlign: 'center',
    transition: 'background-color 0.2s ease',
  },
  imageUploadInput: {
    display: 'none',
  },
};

export default GameDetails;
