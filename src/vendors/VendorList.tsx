import { useEffect, useState } from "react";
import VendorCard from "./VendorCard";
import { IVendor } from "./IVendor";
import { vendorAPI } from "./VendorAPI";
import VendorCardSkeleton from "./VendorCardSkeleton";

function VendorList() {
  const [loading, setLoading] = useState(false);
  const [vendors, setVendors] = useState<IVendor[]>([]);
  const vendorCardSkeletons = Array(12).fill(<VendorCardSkeleton />);

  useEffect(() => {
    async function loadVendors() {
      setLoading(true);
      const data = await vendorAPI.list();
      setLoading(false);
      setVendors(data);
    }
    loadVendors();
  }, []);
  console.log(vendors);
  

  return (
    <section className="list d-flex flex-row flex-wrap bg-light gap-5 p-4 rounded-4">
      {loading && vendorCardSkeletons}
      {vendors.map((vendor) => (
        <VendorCard key={vendor.id} vendor={vendor} />
      ))}
    </section>
  );
}

export default VendorList;
