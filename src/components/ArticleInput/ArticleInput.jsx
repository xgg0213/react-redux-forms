import { useState } from 'react';
import { nanoid } from 'nanoid'; // This generates unique IDs for each new article
import { useDispatch } from 'react-redux'; // Import the useDispatch hook from react-redux
import { addArticle } from '../../store/articleReducer'; // Import the addArticle action creator
import './ArticleInput.css';

const ArticleInput = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create the new article object
    const newArticle = {
      id: nanoid(), // Generate a unique ID for the article
      title,
      body,
      imageUrl,
    };

    // Dispatch the new article to the Redux store
    dispatch(addArticle(newArticle));

    reset();
  };

  const reset = () => {
    setTitle('');
    setImageUrl('');
    setBody('');
  };

  return (
    <div className='inputBox'>
      <h1>Create Article</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          placeholder='Title'
          name='title'
        />
        <input
          type='text'
          onChange={(e) => setImageUrl(e.target.value)}
          value={imageUrl}
          placeholder='Image URL'
          name='imageUrl'
        />
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          name='body'
          placeholder='Add your entry'
          rows='10'
        ></textarea>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default ArticleInput;
