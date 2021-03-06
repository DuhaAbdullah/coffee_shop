import React from "react";

function YoutubeIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      width={props.size || "30"}
      height={props.size || "30"}
      className={props.className}
      enableBackground="new 0 0 49 49"
      version="1.1"
      viewBox="0 0 49 49"
      xmlSpace="preserve"
    >
      <path d="M39.256 6.5H9.744C4.371 6.5 0 10.885 0 16.274v16.451c0 5.39 4.371 9.774 9.744 9.774h29.512c5.373 0 9.744-4.385 9.744-9.774V16.274c0-5.389-4.371-9.774-9.744-9.774zM47 32.726c0 4.287-3.474 7.774-7.744 7.774H9.744C5.474 40.5 2 37.012 2 32.726V16.274C2 11.988 5.474 8.5 9.744 8.5h29.512c4.27 0 7.744 3.488 7.744 7.774v16.452z"></path>
      <path d="M33.36 24.138l-13.855-8.115a1.002 1.002 0 00-1.505.863v16.229a1.002 1.002 0 001 1 1 1 0 00.505-.137l13.855-8.113a1 1 0 000-1.727zM20 31.37V18.63l10.876 6.371L20 31.37z"></path>
    </svg>
  );
}

export default YoutubeIcon;