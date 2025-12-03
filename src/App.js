import React from 'react';
import useCrud from './useCRUD'; 
import './App.css';


function App() {

  const { data, loading, error, createItem, updateItem, deleteItem } = useCrud(
    [],
    'https://jsonplaceholder.typicode.com/posts' // Example API
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const handleCreate = () => {
    createItem({ title: 'New Post', body: 'This is a new post.', userId: 1 });
  };

  const handleUpdate = (id) => {
    updateItem(id, { title: 'Updated Post', body: 'This post has been updated.', userId: 1 });
  };

  const handleDelete = (id) => {
    deleteItem(id);
  };

  return (
    <div>
      <h1>Posts</h1>
      <button onClick={handleCreate}>Add New Post</button>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            {post.title}
            <button onClick={() => handleUpdate(post.id)}>Edit</button>
            <button onClick={() => handleDelete(post.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
