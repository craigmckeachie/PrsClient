import { IVendor } from "../vendors/IVendor";

export interface IProduct {
  id: number | undefined;
  partNbr: string;
  name: string;
  price: number | undefined;
  unit: string;
  photoPath: string | null;
  vendorId: number | undefined;
  vendor: IVendor;
}
