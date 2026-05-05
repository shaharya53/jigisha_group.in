import ServicePage from "@/templates/ServicePage";
import { VENTURES } from "@/data/international";

const data = VENTURES.find((v) => v.slug === "contract-manufacturing")!;

export default function ContractManufacturing() {
  return <ServicePage data={data} />;
}
