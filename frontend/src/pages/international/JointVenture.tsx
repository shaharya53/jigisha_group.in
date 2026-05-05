import ServicePage from "@/templates/ServicePage";
import { VENTURES } from "@/data/international";

const data = VENTURES.find((v) => v.slug === "joint-venture")!;

export default function JointVenture() {
  return <ServicePage data={data} />;
}
