import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getStories } from "../../store/ducks/stories/actions";
import {Story} from "../../store/ducks/stories/types"

const Stories = () => {
  const user = useSelector((state: any) => state.usuario);
  const stories = useSelector((state: any) => state.stories);

  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("http://localhost:4000/stories")
      .then((resposta) => dispatch(getStories(resposta.data)));
  }, []);

  return (
    <div>
      <div className="user-info">
        <img alt="Perfil" src={user.userPicture} />
        <div className="user-bio">
          <strong>{user.name}</strong>
          <span>{user.username}</span>
        </div>
      </div>

      <div className="stories">
        <h2>Stories</h2>

        {stories.map((story: Story) => (
          <div key={story.id} className="storie">
            <div className="storie-image">
              <img src={story.userPicture} alt="user" />
            </div>
            <div className="storie-user">
              <strong>{story.user}</strong>
              <span>{story.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stories;
