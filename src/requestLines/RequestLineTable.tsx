import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import bootstrapIcons from "../assets/bootstrap-icons.svg";
import { IRequestLine } from "../requestLines/IRequestLine";
import { IProduct } from "../products/IProduct";
import { productAPI } from "../products/ProductAPI";
import { requestLineAPI } from "../requestLines/RequestLineAPI";
import RequestLineForm from "./RequestLineForm";

interface RequestLineTableProps {
  requestId?: number;
}

function RequestLineTable({ requestId }: RequestLineTableProps) {
  const navigate = useNavigate();

  const [products, setProducts] = useState<IProduct[]>([]);
  const [requestLines, setRequestLines] = useState<IRequestLine[]>([]);

  async function loadProducts() {
    const data = await productAPI.list();
    setProducts(data);
  }

  async function loadRequestLines() {
    if (!requestId) return;
    const data = await requestLineAPI.list(requestId);
    setRequestLines(data);
  }

  useEffect(() => {
    loadProducts();
    loadRequestLines();
  }, []);

  return (
    <div className="card p-4 mt-5">
      <h5 className="card-title">Items</h5>
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
          {requestLines.map((requestLine: IRequestLine) => {
            const product = products.find(
              (p) => p.id === requestLine.productId
            );
            return (
              <tr key={requestLine.id}>
                <td>{product?.name}</td>
                <td>
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(product?.price ?? 0)}
                </td>
                <td>{requestLine.quantity}</td>
                <td>
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format((product?.price ?? 0) * requestLine.quantity)}
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-outline"
                    onClick={() => {}}
                  >
                    <svg
                      className="bi pe-none me-2"
                      width={16}
                      height={16}
                      fill="#007AFF"
                    >
                      <use xlinkHref={`${bootstrapIcons}#trash`} />
                    </svg>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td>
              <button
                type="button"
                className="btn btn-outline-primary"
                onClick={() => {}}
              >
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
            <td>$0.00</td>
            <td />
          </tr>
        </tfoot>
      </table>
      {requestId && <RequestLineForm requestId={requestId} onSave={loadRequestLines} />}
    </div>
  );
}

export default RequestLineTable;
