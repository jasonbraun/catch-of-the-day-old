import React from 'react';

class StorePicker extends React.Component {
  render() {
    // Anywhere else these comments work
    return (
      <form className="store-selector">
        { /* Hello from inside JSX */ }
      <h2>Please Enter A Store</h2>
      <input type="text" required placeholder="Store Name" />
      <button type="submit">Visit Store 🔥</button>
      </form>
    )
  }
}

export default StorePicker;