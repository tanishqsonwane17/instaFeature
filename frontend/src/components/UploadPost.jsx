import React, { useState } from "react";
import axios from "axios";

const UploadPost = () => {
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) return alert("Please select an image");

    setLoading(true);
    setMessage("");

    const formData = new FormData();
    formData.append("image", image);
    formData.append("caption", caption);

    try {
      const res = await axios.post("http://localhost:4000/posts", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(res.data);
      setMessage("Post uploaded successfully!");
      setCaption("");
      setImage(null);
    } catch (err) {
      console.error(err);
      setMessage("Error uploading post");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-2xl font-bold mb-4">Create a Post</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-96">
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <input
          type="text"
          placeholder="Caption"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          className="border rounded p-2"
        />
        <button
          type="submit"
          className="bg-green-500 text-white py-2 rounded font-semibold"
          disabled={loading}
        >
          {loading ? "Uploading..." : "Upload Post"}
        </button>
      </form>

      {message && <p className="mt-4 text-center">{message}</p>}
    </div>
  );
};

export default UploadPost;
