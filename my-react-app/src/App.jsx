import React from 'react';
import UserRegistration from './UserRegistration';

export default function App() {
  return (
    <div style={styles.container}>
      {/* Header Section matching image_a138d7.png */}
      <header style={styles.header}>
        <h1 style={styles.title}>React_Form_Handling</h1>
        <hr style={styles.divider} />
      </header>

      {/* Main Content where the form will be displayed */}
      <main>
        <UserRegistration />
      </main>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'sans-serif',
    padding: '20px',
  },
  header: {
    maxWidth: '1000px',
    margin: '0 auto',
    paddingTop: '20px',
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'normal',
    color: '#333',
    margin: '0 0 10px 0',
    textAlign: 'center', // Or 'left' depending on your exact page width preferences
  },
  divider: {
    border: 'none',
    borderBottom: '1px solid #eaeaea',
    margin: '0 0 30px 0',
  }
};