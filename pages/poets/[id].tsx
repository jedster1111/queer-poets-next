import React from "react";
import { useRouter } from "next/router";

export default function PoetPage() {
  const router = useRouter();
  const { id } = router.query;

  return <div>Id: {id}</div>;
}
