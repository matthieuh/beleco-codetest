import React from 'react';

const DefaultLayout = ({ children }) => (
  <>
    <head>
        <link rel="stylesheet" href="/public/main.css" />
    </head>
    <body>
      {children}
    </body>
  </>
);

export default DefaultLayout;