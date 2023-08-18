import { MyLayout } from "@/layout/my-layout";
import Link from "next/link";
import { useRouter } from "next/router";

function Slug() {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <span>Hello {slug}</span>
      <Link href="/channel/test-1">Channel 1</Link>
      <Link href="/channel/test-2">Channel 2</Link>
      <Link href="/channel/test-3">Channel 3</Link>
      <Link href="/channel/test-4">Channel 4</Link>
      <Link href="/channel/test-20">Channel 20</Link>
    </div>
  );
}

Slug.Layout = MyLayout;

export default Slug;
