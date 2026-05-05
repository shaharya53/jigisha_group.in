import ServicePage from "@/templates/ServicePage";
import { VENTURES } from "@/data/international";

const data = VENTURES.find((v) => v.slug === "overseas-logistics")!;

export default function OverseasLogistics() {
  return <ServicePage data={data} />;
}
