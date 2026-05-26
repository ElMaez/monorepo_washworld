import Featureslayout from "@/app/global/components/Featurelayout"


export default function FeaturesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Featureslayout>{children}</Featureslayout>;
}