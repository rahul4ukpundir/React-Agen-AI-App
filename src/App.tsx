import React from 'react';
import logo from './logo.svg';
import './App.css';
import User from './components/User'; // Import the new User component

function App() {
  const sampleUser1 = {
    name: 'Alice Smith',
    email: 'alice.smith@example.com',
    profilePicture: 'https://i.pravatar.cc/150?img=1',
    role: 'Editor',
  };

  const sampleUser2 = {
    name: 'Bob Johnson',
    email: 'bob.johnson@example.com',
    // No profile picture provided for Bob
  };

  const sampleUser3 = {
    name: 'Charlie Brown',
    email: 'charlie.brown@example.com',
    profilePicture: 'https://i.pravatar.cc/150?img=2',
    role: 'Viewer',
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <main className="p-8 flex flex-col items-center space-y-4 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">User Component Showcase</h1>
        <User {...sampleUser1} />
        <User {...sampleUser2} />
        <User {...sampleUser3} />
      </main>
    </div>
  );
}

export default App;
