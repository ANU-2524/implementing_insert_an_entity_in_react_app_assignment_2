import React from 'react';
import { useNavigate } from 'react-router-dom';

const AddMovie = () => {
    const navigate = useNavigate();
    const [movie, setMovie] = React.useState({
        title: '',
        director: '',
        genre: '',
        releaseYear: '',
        synopsis: '',
        posterUrl: ''
    });

    const hndleChnge = (e) => {
        setMovie({ ...movie, [e.target.name]: e.target.value });
    };

    const SubmitBtn = (e) => {
        e.preventDefault();
        console.log(movie);
        navigate("/");
    };

    return (
        <div style={{ maxWidth: '500px', margin: 'auto', padding: '20px', border: '1px solid #ddd', borderRadius: '10px', backgroundColor: '#f9f9f9' }}>
            <h3 style={{ textAlign: 'center', color: '#333' }}>Add a New Movie</h3>
            <form onSubmit={SubmitBtn} style={{ display: 'flex', flexDirection: 'column' }}>
                <label>Title:</label>
                <input type="text" name="title" value={movie.title} onChange={hndleChnge} required style={{ padding: '5px', marginBottom: '10px' }} />
                
                <label>Director:</label>
                <input type="text" name="director" value={movie.director} onChange={hndleChnge} required style={{ padding: '5px', marginBottom: '10px' }} />
                
                <label>Genre:</label>
                <select name="genre" value={movie.genre} onChange={hndleChnge} required style={{ padding: '5px', marginBottom: '10px' }}>
                    <option value="">Select Genre</option>
                    <option value="Comedy">Comedy</option>
                    <option value="Fiction">Fiction</option>
                    <option value="Biography">Biography</option>
                    <option value="Drama">Drama</option>
                </select>
                
                <label>Release Year:</label>
                <input type="number" name="releaseYear" value={movie.releaseYear} onChange={hndleChnge} min="2000" required style={{ padding: '5px', marginBottom: '10px' }} />
                
                <label>Synopsis:</label>
                <textarea name="synopsis" value={movie.synopsis} onChange={hndleChnge} required style={{ padding: '5px', marginBottom: '10px' }} />
                
                <label>Poster Image URL:</label>
                <input type="url" name="posterUrl" value={movie.posterUrl} onChange={hndleChnge} required style={{ padding: '5px', marginBottom: '10px' }} />
                
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                    <button type="submit" style={{ padding: '8px', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Add Movie</button>
                    <button type="button" onClick={() => navigate('/')} style={{ padding: '8px', backgroundColor: '#dc3545', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Cancel</button>
                </div>
            </form>
        </div>
    );
};

export default AddMovie;