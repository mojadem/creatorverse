import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./CreatorCard.css";

export default function CreatorCard({ id, name, url, description, imageURL }) {
  return (
    <article>
      <div className="creator-card">
        <img src={imageURL} alt={`Creator image for ${name}`} />
        <div>
          <hgroup>
            <h2>{name}</h2>
            <a href={url} target="_blank" className="secondary">
              {url}
            </a>
          </hgroup>
          <p>{description}</p>
          <nav>
            <ul>
              <li>
                <Link to={`/${id}`}>View</Link>
              </li>
              <li>
                <Link to={`/edit/${id}`}>Edit</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </article>
  );
}

CreatorCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  url: PropTypes.string,
  description: PropTypes.string,
  imageURL: PropTypes.string,
};
