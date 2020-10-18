import React from "react";

import './empty-page.styles.scss';

const EmptyPage = ({ icon, heading, paragraph }) => {
  return (
    <div className="empty-pgae">
      <div className="icon">{icon}</div>
      <h2 className="heading">{heading}</h2>
      <p className="para">{paragraph}</p>
    </div>
  );
};

export default EmptyPage;
