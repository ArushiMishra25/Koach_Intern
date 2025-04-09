import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Posts = () => {
  const { userId } = useParams();
  const [posts, setPosts] = useState<{ title: string; body: string }[]>([]);
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        const userPosts = response.data.filter((post: any) => post.userId === Number(userId));
        setPosts(userPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [userId]);
  useEffect(() => {
    const usersStr = localStorage.getItem("users");
    if (usersStr) {
      const users = JSON.parse(usersStr);
      const user = users.find((u: any) => u.id === Number(userId));
      if (user) setUsername(user.name); 
    }
  }, [userId]);

  return (
    <div className="min-h-screen bg-gray-200 flex flex-col items-center justify-center gap-2 p-4">
      <h2 className="text-3xl font-bold  text-sans text-center mb-8 text-gray-800 underline">
        Posts by {username}
      </h2>

      {loading ? (
        <p className="text-center text-lg text-gray-600">Loading posts...</p>
      ) : posts.length === 0 ? (
        <p className="text-center text-lg text-gray-600">No posts found.</p>
      ) : (
        <div className="flex flex-wrap gap-6 justify-center">
          {posts.map((post, index) => (
            <div
              key={index}
              className="w-full md:w-[30%] bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {post.title}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {post.body}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Posts;
