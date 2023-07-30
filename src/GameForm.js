import React, { useState } from 'react';

const GameForm = ({ onAddGame }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState('');
  const [image, setImage] = useState(null);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() === '' || description.trim() === '' || rating.trim() === '' || image === null) {
      alert('Please fill all details and upload an image before adding the game.');
      return;
    }

    const newGame = {
      title: title,
      description: description,
      rating: parseFloat(rating),
      image: image,
    };

    onAddGame(newGame);

    setTitle('');
    setDescription('');
    setRating('');
    setImage(null);
  };

  return (
    <form onSubmit={handleSubmit} style={styles.formContainer}>
      <h2 style={styles.formTitle}>Add New Game</h2>
      <div style={styles.formField}>
        <label>Title:</label>
        <input type="text" value={title} onChange={handleTitleChange} style={styles.input} />
      </div>
      <div style={styles.formField}>
        <label>Description:</label>
        <textarea value={description} onChange={handleDescriptionChange} style={styles.textarea} />
      </div>
      <div style={styles.formField}>
        <label>Rating:</label>
        <input type="number" step="0.1" value={rating} onChange={handleRatingChange} style={styles.input} />
      </div>
      <div style={styles.formField}>
        <label>Upload Image:</label>
        <input type="file" accept="image/*" onChange={handleImageChange} style={styles.fileInput} />
      </div>
      <button type="submit" style={styles.addButton}>Add Game</button>
    </form>
  );
};

const styles = {
  formContainer: {
    backgroundColor: '#f5f5f5',
    padding: '20px',
    borderRadius: '5px',
  },
  formTitle: {
    fontSize: '24px',
    marginBottom: '10px',
    color: '#333',
  },
  formField: {
    marginBottom: '20px',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    resize: 'vertical',
  },
  fileInput: {
    display: 'block',
    marginBottom: '10px',
  },
  addButton: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#FF5C58',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default GameForm;
