import { IRequestLine } from "../requestLines/IRequestLine";

export interface IRequest {
  id: number | undefined;
  description: string;
  justification: string;
  rejectionReason: string | undefined;
  deliveryMode: string;
  status: string;
  total: number;
  userId: number | undefined;
  requestlines: IRequestLine[];
}
