import Link from "next/link";
import { useRouter } from "next/router";

export default function Index() {
  const router = useRouter();
  return (
    <div>
      <h1>Welcome to my blog</h1>
      <h2>{router.pathname}</h2>
      <div>
      Shop {router.query.id}
       {router.query.title}
      </div>
    </div>
  );
}