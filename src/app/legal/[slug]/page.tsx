import { notFound } from "next/navigation";
import LegalPolicyPage from "../_components/LegalPolicyPage";
import { getLegalPolicy, getLegalPolicySlugs } from "@/lib/legalPolicies";

export function generateStaticParams() {
  return getLegalPolicySlugs().map((slug) => ({ slug }));
}

type LegalPolicyRouteProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: LegalPolicyRouteProps) {
  const { slug } = await params;
  const policy = getLegalPolicy(slug);

  if (!policy) {
    return { title: "Legal" };
  }

  return {
    title: policy.title,
    description: policy.description,
  };
}

export default async function LegalPolicyRoute({ params }: LegalPolicyRouteProps) {
  const { slug } = await params;
  const policy = getLegalPolicy(slug);

  if (!policy) {
    notFound();
  }

  return <LegalPolicyPage policy={policy} />;
}
