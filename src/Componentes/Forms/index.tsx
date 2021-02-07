import axios from "axios";
import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../../store/ducks/post/actions";

const Form = () => {
  const user = useSelector((state: any) => state).usuario;
  const posts = useSelector((state: any) => state).posts;

  let inputUrl = useRef<HTMLInputElement>(null);
  let inputDesc = useRef<HTMLInputElement>(null);

  const newPost = () => {
    const requisicao = {
      user: user.username,
      userPicture: user.userPicture,
      likes: 0,
      id: posts.length + 1,
      postPicture: inputUrl.current?.value,
      description: inputDesc.current?.value,
    };

    axios
      .post("http://localhost:4000/posts", requisicao)
      .then(() => getPosts());
  };
  const dispatch = useDispatch();

  function getPosts() {
    axios
      .get("http://localhost:4000/posts")
      .then((resposta) => dispatch(getPost(resposta.data)));
  }

  return (
    <div className="form">
      <p>Faça uma postagem aqui</p>
      <input type="text" placeholder="Cole a url da imagem" ref={inputUrl} />
      <input type="text" placeholder="Digite uma descrição" ref={inputDesc} />
      <button onClick={newPost} style={{ cursor: "pointer" }}>
        Postar!
      </button>
    </div>
  );
};

export default Form;
