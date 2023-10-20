import React from "react";

const WarningIcon = ({ color }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72" className={`w-1/3 h-1/3`}>
      <g
        fill={`${color ? color : '#9E2323'}`}
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="2"
      >
        <path d="M32.522 13.005c.698-1.205 1.986-2.024 3.478-2.024 1.492 0 2.78.82 3.478 2.024L60.446 54.94c.343.594.554 1.274.554 2.008a4.032 4.032 0 01-4.032 4.033l-41.936.017A4.033 4.033 0 0111 56.966c0-.736.211-1.415.554-2.009l20.968-41.952"></path>
        <path d="M37.613 47.27a1.613 1.613 0 01-3.226 0V23.893a1.613 1.613 0 013.226 0v23.379z"></path>
        <circle cx="36" cy="54.529" r="1.613"></circle>
      </g>
    </svg>
  );
}

export default WarningIcon;
