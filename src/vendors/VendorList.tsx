import { useEffect, useState } from "react";
import VendorCard from "./VendorCard";
import { IVendor } from "./IVendor";
import { vendorAPI } from "./VendorAPI";
import VendorCardSkeleton from "./VendorCardSkeleton";

function VendorList() {
  const [loading, setLoading] = useState(false);
  const [vendors, setVendors] = useState<IVendor[]>([]);
  const vendorCardSkeletons = Array.from(Array(12), (value, index) => {
    return <VendorCardSkeleton key={index} />;
  });

  async function loadVendors() {
    setLoading(true);
    const data = await vendorAPI.list();
    setLoading(false);
    setVendors(data);
  }

  function removeVendor(vendor: IVendor) {
    setVendors(vendors.filter(v=> v.id !== vendor.id))
  }

  useEffect(() => {
    loadVendors();
  }, []);
  console.log(vendors);

  return (
    <section className="list d-flex flex-row flex-wrap bg-light gap-5 p-4 rounded-4">
      {loading && vendorCardSkeletons}
      {vendors.map((vendor) => (
        <VendorCard key={vendor.id} vendor={vendor} onRemove={removeVendor} />
      ))}
    </section>
  );
}

export default VendorList;
