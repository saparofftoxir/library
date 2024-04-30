import React, { useState } from 'react'

function Monografiyalar() {
  const [items, setItems] = useState([]);

  const [newItem, setNewItem] = useState('');
  const addItem = () => {
    if (!items.includes(newItem)) {
      setItems([...items, newItem])
      setNewItem('')
    } else {
      alert('Item already exists in the list.');
    }
  }

  return (
    <div>


      <div>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button onClick={addItem}>Add Item</button>

        <ul>
          {items.map((item, index) => (
            <li className='text-red-500 bg-gray-700' key={index}>{item}</li>
          ))}
        </ul>
      </div>
      
    </div>
  )
}

export default Monografiyalar