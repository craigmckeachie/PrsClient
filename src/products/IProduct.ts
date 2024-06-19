import { IVendor } from "../vendors/IVendor";

export interface IProduct {
  id: number;
  partNbr: string;
  name: string;
  price: number;
  unit: string;
  photoPath: string | null;
  vendorId: number;
  vendor: IVendor;
}
