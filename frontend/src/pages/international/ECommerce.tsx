import ServicePage from "@/templates/ServicePage";
import { VENTURES } from "@/data/international";

const data = VENTURES.find((v) => v.slug === "e-commerce")!;

export default function ECommerce() {
  return <ServicePage data={data} />;
}
