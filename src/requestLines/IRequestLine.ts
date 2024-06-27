import { IProduct } from "../products/IProduct";
import { IRequest } from "../requests/IRequest";

export interface IRequestLine {
  id: number | undefined;
  productId: number | undefined;
  product: IProduct;
  requestId: number | undefined;
  request: IRequest;
  quantity: number;
}
