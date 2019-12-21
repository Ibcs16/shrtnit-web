import React, { useState } from 'react';

// import { Container } from './styles';

export default function SimpleTestComponent() {
  const [data, setData] = useState([]);
  const [newItem, setNewItem] = useState('');

  const handleSubmit = item => {
    setData([...data, item]);
    setNewItem('');
  };

  const handleInputChange = e => {
    setNewItem(e.target.value);
  };

  return (
    <>
      <form data-testid="testForm" onSubmit={() => handleSubmit(newItem)}>
        <input
          onChange={handleInputChange}
          data-testid="testInput"
          name="test"
          value={newItem}
        />

        <button type="submit" data-testid="add"></button>
      </form>
      <ul data-testid="test-list">
        {data.map(item => (
          <li key="item">{item}</li>
        ))}
      </ul>
    </>
  );
}
