import { useEffect, useState } from "react";
import VendorCard from "./VendorCard";

function VendorList() {
  const [vendors, setVendors] = useState<Vendor[]>([]);
  
  useEffect(() => {
    async function loadVendors() {

    }
    loadVendors();
  }, []);

  return (
    <section className="list d-flex flex-row flex-wrap bg-light gap-5 p-4 rounded-4">
      <VendorCard />
    </section>
  );
}

export default VendorList;
