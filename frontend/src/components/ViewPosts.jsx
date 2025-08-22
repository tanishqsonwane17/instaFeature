import React, { useEffect, useState } from "react";
import axios from "axios";

const ViewPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get("http://localhost:4000/posts");
        setPosts(res.data.posts);
      } catch (err) {
        console.error("Error fetching posts:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading posts...</p>;
  if (!posts.length) return <p className="text-center mt-10">No posts yet!</p>;

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <div key={post._id} className="border rounded shadow p-4 flex flex-col items-center">
          <img src={post.url} alt="Post" className="w-full h-64 object-cover rounded mb-3" />
          <p className="text-center font-medium">{post.caption}</p>
        </div>
      ))}
    </div>
  );
};

export default ViewPosts;
