import { FiHeart } from "react-icons/fi"

const Posts = () =>{
  return(
    <div className="post-container">
          <div className="post">
            <header>
              <img
                src="https://randomuser.me/api/portraits/women/17.jpg"
                alt="user"
              />
              <div className="post-user">
                <strong>nasa</strong>
                <span>Mars</span>
              </div>
            </header>
            <div className="post-image">
              <img
                src="https://www.publicdomainpictures.net/pictures/90000/velka/mars.jpg"
                alt="post"
              />
            </div>
            <div className="post-likes">
              <FiHeart />
            </div>
            <p>Waving goodbye to a spacecraft.</p>
          </div>
          <div className="post">
            <header>
              <img
                src="https://randomuser.me/api/portraits/women/17.jpg"
                alt="user"
              />
              <div className="post-user">
                <strong>nasa</strong>
                <span>Mars</span>
              </div>
            </header>
            <div className="post-image">
              <img
                src="https://www.publicdomainpictures.net/pictures/90000/velka/mars.jpg"
                alt="post"
              />
            </div>
            <div className="post-likes">
              <FiHeart />
            </div>
            <p>Waving goodbye to a spacecraft.</p>
          </div>
        </div>
  )

}

export default Posts