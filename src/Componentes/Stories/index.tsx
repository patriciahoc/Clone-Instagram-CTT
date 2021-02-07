import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../store/ducks/user/actions";

const Stories = () => {
  const user = useSelector((state: any) => state).usuario;

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

        <div className="storie">
          <div className="storie-image">
            <img
              src="https://randomuser.me/api/portraits/men/11.jpg"
              alt="user"
            />
          </div>
          <div className="storie-user">
            <strong>history</strong>
            <span>há 2 horas</span>
          </div>
        </div>
        <div className="storie">
          <div className="storie-image">
            <img
              src="https://randomuser.me/api/portraits/men/11.jpg"
              alt="user"
            />
          </div>
          <div className="storie-user">
            <strong>history</strong>
            <span>há 2 horas</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stories;
