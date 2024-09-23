import React, { useState } from 'react';
import { FaEdit, FaTrash, FaPlus, FaTimes } from 'react-icons/fa';

function Post() {
  // State to manage posts
  const [posts, setPosts] = useState([]);
  const [showCreatePost, setShowCreatePost] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  // Function to add a new post
  const addPost = () => {
    if (isEditing) {
      const updatedPosts = [...posts];
      updatedPosts[currentIndex] = { title, content };
      setPosts(updatedPosts);
      setIsEditing(false);
      setCurrentIndex(null);
    } else {
      const newPost = { title, content };
      setPosts([...posts, newPost]);
    }
    setTitle('');
    setContent('');
    setShowCreatePost(false); // Close the create post form after submission
  };

  // Function to edit a post
  const editPost = (index) => {
    setIsEditing(true);
    setCurrentIndex(index);
    setTitle(posts[index].title);
    setContent(posts[index].content);
    setShowCreatePost(true);
  };

  // Function to delete a post
  const deletePost = (index) => {
    const updatedPosts = posts.filter((_, i) => i !== index);
    setPosts(updatedPosts);
  };

  return (
    <div className="container mx-auto p-6">
      {/* Create Post Button */}
      <div className="flex justify-end mb-4">
        <button
          onClick={() => setShowCreatePost(!showCreatePost)}
          className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          {showCreatePost ? <FaTimes className="mr-2" /> : <FaPlus className="mr-2" />}
          {showCreatePost ? 'Cancel' : 'Create Post'}
        </button>
      </div>

      {/* Create Post Form */}
      {showCreatePost && (
        <div className="bg-white p-6 rounded-md shadow-md mb-6">
          <h2 className="text-2xl font-bold mb-4">{isEditing ? 'Edit Post' : 'Create a New Post'}</h2>
          <div className="mb-4">
            <label className="block text-gray-700">Title</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter post title"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Content</label>
            <textarea
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Enter post content"
              rows="4"
            />
          </div>
          <button
            onClick={addPost}
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            {isEditing ? 'Update Post' : 'Add Post'}
          </button>
        </div>
      )}

      {/* Post List */}
      <div>
        <h2 className="text-3xl font-bold mb-4">All Posts</h2>
        {posts.length > 0 ? (
          <div className="space-y-4">
            {posts.map((post, index) => (
              <div key={index} className="bg-white p-4 rounded-md shadow-md flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-gray-700">{post.content}</p>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => editPost(index)}
                    className="text-blue-500 hover:text-blue-700 focus:outline-none"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => deletePost(index)}
                    className="text-red-500 hover:text-red-700 focus:outline-none"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No posts available.</p>
        )}
      </div>
    </div>
  );
}

export default Post;
