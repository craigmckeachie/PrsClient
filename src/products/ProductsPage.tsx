import bootstrapIcons from "../assets/bootstrap-icons.svg";
import ProductList from "./ProductList";

function ProductsPage() {
  return (
    <section className="content container-fluid mx-5 my-2 py-4">
      <div className="d-flex justify-content-between pb-4 mb-4 border-bottom border-2">
        <h2>Products</h2>
        <a href="vendor-create.html" className="btn btn-primary">
          <svg
            className="bi pe-none me-2"
            width={32}
            height={32}
            fill="#FFFFFF"
          >
            <use xlinkHref={`${bootstrapIcons}#plus`} />
          </svg>
          Create a product
        </a>
      </div>
      <section className="list d-flex flex-row flex-wrap bg-light gap-5 p-4 rounded-4">
        <ProductList /> 
      </section>
    </section>
  );
}
export default ProductsPage;
