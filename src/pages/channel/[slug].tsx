import Link from "next/link";
import { useRouter } from "next/router";

function Slug() {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <span>Hello {slug}</span>
      <Link href="/channel/test-1">This does not reload (1)</Link>
      <Link href="/channel/test-2">This reloads (2)</Link>
      <Link href="/channel/test-3">This does not reload (3)</Link>
      <Link href="/channel/test-4">This does not reload (4)</Link>
      <Link href="/channel/test-20">This does not reload (20)</Link>
    </div>
  );
}

export default Slug;
