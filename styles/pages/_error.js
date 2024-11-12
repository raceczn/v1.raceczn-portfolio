// pages/_error.js
import React from 'react';

function Error({ statusCode }) {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>Error</h1>
      <p>
        {statusCode
          ? `An error ${statusCode} occurred on the server`
          : 'An error occurred on the client'}
      </p>
    </div>
  );
}

// This function gets the status code for error handling
Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
