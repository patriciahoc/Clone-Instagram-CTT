import axios from "axios";
import { useEffect } from "react";
import { FiHeart } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../../store/ducks/post/actions";
import { Post } from "../../store/ducks/post/types";

const Posts = () => {
  const posts = useSelector((state: any) => state.posts);
  const dispatch = useDispatch();

  function getPosts() {
    axios
      .get("http://localhost:4000/posts")
      .then((resposta) => dispatch(getPost(resposta.data)));
  }

  function givenLike(post: Post) {
    const newPost = {
      ...post,
      likes: post.likes + 1,
    };
    axios
      .patch(`http://localhost:4000/posts/${post.id}`, newPost)
      .then(() => getPosts());
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="post-container">
      {posts.map((post: Post) => (
        <div key={post.id} className="post">
          <header>
            <img src={post.userPicture} alt="user" />
            <div className="post-user">
              <strong>{post.user}</strong>
              <span>{post.location}</span>
            </div>
          </header>
          <div className="post-image">
            <img src={post.postPicture} alt="post" />
          </div>
          <div className="post-likes">
            <FiHeart onClick={() => givenLike(post)} />
            {post.likes}
          </div>
          <p>{post.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
