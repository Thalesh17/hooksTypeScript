import React, {useState} from 'react';

interface User {
  name: string;
  login: string;
  avatar_url: string
}

function App() {
  const [user, setUser] = useState<User>();
  
  async function loadData() {
    const response = await fetch('https://api.github.com/users/Thalesh17');
    const data = await response.json();

    setUser(data);
  }

  return (
    <div className="App">
      {user?.name}
    </div>
  );
}

export default App;
