import React from 'react'
import { FaTwitterSquare } from 'react-icons/fa';

const TwitterLink = ({ url}) => {
  return (
    <div>
      <a id="tweet-quote"
        href={url} target="_blank" rel="noreferrer" ><FaTwitterSquare />
      </a>
    </div>
  );
}

export default TwitterLink