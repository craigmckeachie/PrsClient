import bootstrapIcons from "../assets/bootstrap-icons.svg";
import { useState, useEffect } from "react";
import { IRequestLine } from "./IRequestLine";
import { requestLineAPI } from "./RequestLineAPI";
import RequestLineForm from "./RequestLineForm";
import { IRequest } from "../requests/IRequest";
import { IProduct } from "../products/IProduct";
import { productAPI } from "../products/ProductAPI";

interface IRequestLineTableProps {
  request: IRequest;
}

function RequestLineTable({ request }: IRequestLineTableProps) {
  const [requestLines, setRequestLines] = useState<IRequestLine[]>([]);
  const [products, setProducts] = useState<IProduct[]>([]);

  let emptyRequestLine: IRequestLine = {
    id: undefined,
    quantity: 0,
    requestId: request.id,
    request: {} as IRequest,
    productId: undefined,
    product: {} as IProduct,
  };

  async function loadProducts() {
    const data = await productAPI.list();
    setProducts(data);

    let data1 = await requestLineAPI.list();
    if (!data1) {
      data1 = [emptyRequestLine];
    }
    setRequestLines(data1);
  }

  async function loadRequestLines() {}

  useEffect(() => {
    loadProducts();
    loadRequestLines();
  }, []);

  function removeRequestLine(requestLine: IRequestLine) {
    setRequestLines(requestLines.filter((r) => r.id !== requestLine.id));
  }

  return (
    <table className="table w-75">
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Amount</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {requestLines.map((requestLine) => (
          <RequestLineForm
            key={requestLine.id}
            requestLine={requestLine}
            products={products}
            onRemove={removeRequestLine}
          />
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td>
            <button className="btn btn-outline-primary">
              <svg
                className="bi pe-none me-2"
                width={16}
                height={16}
                fill="#007AFF"
              >
                <use xlinkHref={`${bootstrapIcons}#plus-circle`} />
              </svg>
              Add a line
            </button>
          </td>
          <td />
          <td />
          <td>Total: $0.00</td>
          <td />
        </tr>
      </tfoot>
    </table>
  );
}

export default RequestLineTable;
