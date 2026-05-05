import ServicePage from "@/templates/ServicePage";
import { VENTURES } from "@/data/international";

const data = VENTURES.find((v) => v.slug === "collaboration")!;

export default function Collaboration() {
  return <ServicePage data={data} />;
}
