import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { posts as initialPosts } from '../data/CommunityData';

const Community = () => {
  const [posts, setPosts] = useState(initialPosts);
  const [newPost, setNewPost] = useState('');
  const [isPosting, setIsPosting] = useState(false);

  const handlePost = () => {
    if (!newPost.trim()) return;

    setIsPosting(true);

    // Simulasi delay posting
    setTimeout(() => {
      const newPostObj = {
        id: posts.length + 1,
        user: 'Current User', // Idealnya dari user yang login
        username: '@currentuser',
        time: 'Just now',
        content: newPost,
        replies: 0,
        likes: 0,
        views: 0
      };

      setPosts([newPostObj, ...posts]);
      setNewPost('');
      setIsPosting(false);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handlePost();
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen px-6 py-8 max-w-4xl mx-auto">
      {/* Header */}
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Community</h1>
        <Link to="/my-posts">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700">
            My post
          </button>
        </Link>
      </header>

      {/* Post Input */}
      <div className="bg-gray-800 p-4 rounded-lg mb-6">
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 rounded-full bg-gray-700 flex-shrink-0"></div>
          <div className="ml-3">
            <h3 className="font-semibold">Current User</h3>
            <span className="text-sm text-gray-400">@currentuser</span>
          </div>
        </div>
        <textarea
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="What's on your mind?"
          className="w-full bg-gray-700 text-white placeholder-gray-400 p-4 rounded-lg mb-3 min-h-[100px] resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-400">
            Press Enter to post
          </span>
          <button 
            onClick={handlePost}
            disabled={isPosting || !newPost.trim()}
            className={`
              px-6 py-2 rounded-lg text-white font-medium
              ${isPosting || !newPost.trim() 
                ? 'bg-gray-600 cursor-not-allowed' 
                : 'bg-blue-600 hover:bg-blue-700'}
              transition duration-200
              flex items-center
            `}
          >
            {isPosting ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Posting...
              </>
            ) : 'Post'}
          </button>
        </div>
      </div>

      {/* Posts */}
      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="bg-gray-800 p-4 rounded-lg hover:bg-gray-750 transition duration-200">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 rounded-full bg-gray-700 mr-3"></div>
              <div>
                <h2 className="font-bold">{post.user}</h2>
                <div className="flex items-center text-sm text-gray-400">
                  <span>{post.username}</span>
                  <span className="mx-1">•</span>
                  <span>{post.time}</span>
                </div>
              </div>
            </div>
            <p className="text-gray-300 mb-4 whitespace-pre-wrap">{post.content}</p>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <button className="flex items-center hover:text-blue-400 transition duration-200">
                <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                {post.replies}
              </button>
              <button className="flex items-center hover:text-red-400 transition duration-200">
                <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                {post.likes}
              </button>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                {post.views}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Community; 