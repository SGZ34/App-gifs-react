import { useState } from "react";
import { Form } from "./components/Form";
import { Card } from "./components/Card";

function App() {
  const [categories, setCategories] = useState(["Dragon ball"]);

  const AddCategory = (category) => {
    if (!categories.find((c) => c == category)) {
      setCategories([...categories, category]);
    }
  };

  const printRows = () => {
    return categories.map((c) => {
      return <Card category={c} key={c} />;
    });
  };

  return (
    <>
      <div className="vh-auto p-4" style={{ background: "#ccc" }}>
        <div className="container">
          <h2 className="text-bold">Aplicación de gifs</h2>

          <Form AddCategory={AddCategory} />

          {printRows()}
        </div>
      </div>
    </>
  );
}

export default App;
