import { useState } from "react";

export function Form({ AddCategory }) {
  const [gifValue, setgifValue] = useState("");

  const handleOnchange = ({ target: { value } }) => {
    setgifValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    AddCategory(gifValue);
    setgifValue("");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control"
          placeholder="Buscar gifs"
          value={gifValue}
          onChange={handleOnchange}
        />
      </form>
    </>
  );
}
