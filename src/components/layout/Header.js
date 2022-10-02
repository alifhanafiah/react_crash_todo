import React from 'react';

function Header() {
  return (
    <div style={headerStyle}>
      <h1>TodoList</h1>
    </div>
  );
}

const headerStyle = {
  background: '#333',
  color: 'white',
  textAlign: 'center',
};

export default Header;
