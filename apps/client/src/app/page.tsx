import HelloWorld from "@/components/HelloWorld";
import Link from "next/link";
import InputName from "@/components/InputName";

export const metadata = {
 title: "Starter Monorepo Express Next Turbo",
};

export default async function HomePage({
 searchParams,
}: {
 searchParams: Promise<{ name?: string }>;
}) {
 const { name } = await searchParams;
 const data = await fetch(`http://localhost:5001/api/test/${name || "World"}`, {
  cache: "no-store",
 })
  .catch((error) => {
   throw new Error(error);
  })
  .then((res) => {
   if (!res.ok) {
    throw new Error("Failed to fetch data");
   }
   return res.json();
  });

 return (
  <div className="container">
   <InputName />
   <HelloWorld name={data.name} />
   <p className="description">
    Customized by{" "}
    <Link href="https://github.com/maymiquy" target="_blank">
     maymiquy
    </Link>
   </p>
  </div>
 );
}
