import React from 'react'
import "../Button/Themebtn.css"

function Button() {

  return (
    <p
      className="btn btn-success"
      style={{ color: "white", textDecoration: "none" }}>
      Favorite
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="Red"
        class="bi bi-heart-fill"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
        />
      </svg>
    </p>
  );
}

export default Button