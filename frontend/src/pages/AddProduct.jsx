const AddProduct = () => {
  return (
    <main>
      <h1>Add Product</h1>

      <form>
        <div>
          <label htmlFor='name_field'>Name</label>
          <input type='text' id='name_field' className='form-control' />
        </div>

        <div>
          <label htmlFor='price_field'>Price</label>
          <input type='text' id='price_field' className='form-control' />
        </div>
      </form>
    </main>
  );
};

export default AddProduct;
