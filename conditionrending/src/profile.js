import React, { useState } from 'react';

function Profile() {
  const [logged, setLogged] = useState(false);

  return (
    <div>
      {logged ? 
        <h1>Profile Component</h1>: <h1>Not Logged In</h1>
      }
    </div>
  );
}

export default Profile;
