import React from 'react';

const CreateItem = ({ taskCreate }) => {
  const [name, setName] = React.useState('');

  const handleInput = (event) => {
    const value = event.currentTarget.value;
    setName(value);
  };

  const handleAddItem = () => {
    taskCreate(name);
    setName('');
  };

  const handleKey = (event) => {
    if (event.keyCode === 13) {
      taskCreate(name);
      setName('');
    }
  };

  return (
    <div className="todo__add-field">
      <input
        onKeyUp={handleKey}
        value={name}
        onChange={handleInput}
        type="text"
        placeholder="Type your text..."
      />
      <button onClick={handleAddItem} className="todo__add-field-button">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M8 1V15"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1 8H15"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};

export default CreateItem;
