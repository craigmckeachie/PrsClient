import { IVendor } from "../vendors/IVendor";

export interface IProduct {
  id: number | undefined;
  partNbr: string;
  name: string;
  price: number | undefined;
  unit: string;
  photoPath: string | undefined;
  vendorId: number | undefined;
  vendor?: IVendor;
}
