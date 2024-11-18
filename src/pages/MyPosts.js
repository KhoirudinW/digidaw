import React, { useState } from 'react';
import { myPosts as initialPosts } from '../data/MyPostData';

function MyPosts() {
    const [posts, setPosts] = useState(initialPosts);
    const [editingPost, setEditingPost] = useState(null);
    const [editContent, setEditContent] = useState('');
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [postToDelete, setPostToDelete] = useState(null);

    // Fungsi untuk menghapus post
    const handleDelete = (postId) => {
        setPostToDelete(postId);
        setShowDeleteModal(true);
    };

    const confirmDelete = () => {
        setPosts(posts.filter(post => post.id !== postToDelete));
        setShowDeleteModal(false);
        setPostToDelete(null);
    };

    // Fungsi untuk edit post
    const handleEdit = (post) => {
        setEditingPost(post.id);
        setEditContent(post.content);
    };

    const saveEdit = () => {
        if (!editContent.trim()) return;

        setPosts(posts.map(post => 
            post.id === editingPost 
                ? { ...post, content: editContent }
                : post
        ));
        setEditingPost(null);
        setEditContent('');
    };

    // Modal konfirmasi hapus
    const DeleteModal = () => (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-gray-800 p-6 rounded-lg max-w-sm w-full mx-4">
                <h3 className="text-xl font-bold text-white mb-4">Confirm Delete</h3>
                <p className="text-gray-300 mb-6">Are you sure you want to delete this post? This action cannot be undone.</p>
                <div className="flex justify-end space-x-4">
                    <button 
                        onClick={() => setShowDeleteModal(false)}
                        className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
                    >
                        Cancel
                    </button>
                    <button 
                        onClick={confirmDelete}
                        className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );

    return (
        <div className="bg-gray-900 text-white min-h-screen px-6 py-8 max-w-4xl mx-auto">
            {/* Header */}
            <header className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold">My Post</h1>
            </header>

            {/* My Posts */}
            <div className="space-y-4">
                {posts.map((post) => (
                    <div key={post.id} className="bg-gray-800 p-4 rounded-lg">
                        <div className="flex justify-between items-start">
                            <div>
                                <h2 className="font-bold">You</h2>
                                <span className="text-sm text-gray-400">{post.time}</span>
                            </div>
                            <div className="flex space-x-2">
                                <button 
                                    onClick={() => handleDelete(post.id)}
                                    className="bg-red-600 px-4 py-2 rounded-lg text-white hover:bg-red-700"
                                >
                                    Hapus
                                </button>
                                <button 
                                    onClick={() => handleEdit(post)}
                                    className="bg-blue-600 px-4 py-2 rounded-lg text-white hover:bg-blue-700"
                                >
                                    Edit
                                </button>
                            </div>
                        </div>
                        <p className="text-gray-300 my-3">{post.content}</p>
                        <div className="flex text-sm text-gray-400">
                            <span className="mr-4">{post.replies} Reply</span>
                            <span className="mr-4">{post.likes} Likes</span>
                            <span>{post.views} View</span>
                        </div>
                    </div>
                ))}
            </div>

            {showDeleteModal && <DeleteModal />}
        </div>
    );
}

export default MyPosts; 