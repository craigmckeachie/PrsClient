import { useEffect, useState } from "react";
import VendorCard from "./VendorCard";
import { IVendor } from "./IVendor";
import { vendorAPI } from "./VendorAPI";

function VendorList() {
  const [vendors, setVendors] = useState<IVendor[]>([]);

  useEffect(() => {
    async function loadVendors() {
      const data = await vendorAPI.list();
      setVendors(data);
    }
    loadVendors();
  }, []);

  return (
    <section className="list d-flex flex-row flex-wrap bg-light gap-5 p-4 rounded-4">
      {vendors.map((vendor) => (
        <VendorCard key={vendor.id} vendor={vendor} />
      ))}
    </section>
  );
}

export default VendorList;
