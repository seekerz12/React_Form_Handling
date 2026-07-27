import React from 'react';
// 1. Make sure this import is at the top!
import UserRegistration from './UserRegistration'; 

export default function App() {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
      <header style={{ maxWidth: '1000px', margin: '0 auto', paddingTop: '20px' }}>
        <hr style={{ border: 'none', borderBottom: '1px solid #eaeaea', margin: '0 0 30px 0' }} />
      </header>

      <main>
        
        <UserRegistration />
      </main>
    </div>
  );
}