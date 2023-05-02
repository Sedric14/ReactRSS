import React from 'react';

const NotFound: React.FC = () => {
  return (
    <>
      <header>{<h2 className="headerText">{'404'}</h2>}</header>
      <h1 className="title">Not Found</h1>
    </>
  );
};

export default NotFound;
