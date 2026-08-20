import Upload from "../components/Upload";

function IceCreamForm({ iceCream, onChange, onSubmit, buttonLabel }) {
  return (
    <form className="form" onSubmit={onSubmit}>
      
      <label>Image</label>
      <Upload onUpload={(url) => onChange("img", url)} />


      <label>Name</label>
      <input
        type="text"
        value={iceCream.name}
        onChange={(e) => onChange("name", e.target.value)}
      />

      <label>Price</label>
      <input
        type="number"
        value={iceCream.price}
        onChange={(e) => onChange("price", e.target.value)}
      />

      <label>Description</label>
      <input
        type="text"
        value={iceCream.description}
        onChange={(e) => onChange("description", e.target.value)}
      />

      <label>Brand</label>
      <input
        type="text"
        value={iceCream.brand}
        onChange={(e) => onChange("brand", e.target.value)}
      />

      <label>Flavor</label>
      <input
        type="text"
        value={iceCream.flavor}
        onChange={(e) => onChange("flavor", e.target.value)}
      />

      <label>Stock</label>
      <input
        type="number"
        value={iceCream.stock}
        onChange={(e) => onChange("stock", e.target.value)}
      />

      <button type="submit">{buttonLabel}</button>



    </form>
  );
}

export default IceCreamForm;
