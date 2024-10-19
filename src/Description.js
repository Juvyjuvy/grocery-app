import React, { useState } from 'react';

function Description() {
  const [items, setItems] = useState([
    { name: 'Milk', img: 'https://www.nestleprofessional.ph/sites/default/files/styles/np_product_detail/public/2023-01/NESTL%C3%89%C2%AE%20Fresh%20Milk%201L.png?itok=L6Ey2VqZ' },
    { name: 'Eggs', img: 'https://kidseatincolor.com/wp-content/uploads/2022/02/eggs-e1648216350119-500x500.jpeg' },
    { name: 'Bread', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Fresh_made_bread_05.jpg/1200px-Fresh_made_bread_05.jpg' }
  ]);
  const [newItem, setNewItem] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  const [editValue, setEditValue] = useState('');

  // Add new item
  const handleAdd = () => {
    if (newItem) {
      // Add new item without image functionality
      setItems([...items, { name: newItem, img: 'https://www.megamart.ph/cdn/shop/products/051320-Order-Form-TSC-425.jpg?v=1651653745' }]);
      setNewItem('');
    }
  };

  // Delete item
  const handleDelete = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  // Start editing
  const handleEdit = (index) => {
    setEditingIndex(index);
    setEditValue(items[index].name);
  };

  // Save edited item
  const handleSaveEdit = () => {
    const updatedItems = items.map((item, index) =>
      index === editingIndex ? { ...item, name: editValue } : item
    );
    setItems(updatedItems);
    setEditingIndex(null);
    setEditValue('');
  };

  return (
    <main>
      <h2>Grocery List App</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {editingIndex === index ? (
              <>
                <input
                  type="text"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                />
                <button onClick={handleSaveEdit}>Save</button>
              </>
            ) : (
              <>
                <img src={item.img} alt={item.name} style={{ width: '50px', height: '50px', marginRight: '10px' }} />
                {item.name}
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>

      <input
        type="text"
        placeholder="Add new item"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </main>
  );
}

export default Description;
