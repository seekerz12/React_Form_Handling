import React from 'react';
// 1. Make sure this import is at the top!
import UserRegistration from './UserRegistration'; 

export default function App() {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
      <header style={{ maxWidth: '1000px', margin: '0 auto', paddingTop: '20px' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'normal', color: '#333', margin: '0 0 10px 0', textAlign: 'center' }}>
          React_Form_Handling
        </h1>
        <hr style={{ border: 'none', borderBottom: '1px solid #eaeaea', margin: '0 0 30px 0' }} />
      </header>

      <main>
        {/* 2. Make sure this component is placed here! */}
        <UserRegistration />
      </main>
    </div>
  );
}