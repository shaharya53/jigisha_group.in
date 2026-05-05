import ServicePage from "@/templates/ServicePage";
import { VENTURES } from "@/data/international";

const data = VENTURES.find((v) => v.slug === "outsourcing")!;

export default function Outsourcing() {
  return <ServicePage data={data} />;
}
