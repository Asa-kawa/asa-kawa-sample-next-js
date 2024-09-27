"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Link from "next/link";
import "../web.css";

export default function Home() {
    return (
        <Suspense>
            <Page />
        </Suspense>
    )
}

function Page() {
    const pages = [
        <>
            <p>Sample-next-js 0</p>
            <Link href="page=1" classneme="next">進む</Link>
        </>,
        <p>Sample-next-js 1</p>,
        <p>Sample-next-js 2</p>,
        <p>Sample-next-js 3</p>,
    ]

    const searchParams = useSearchParams();

    const page = Number(searchParams.get("page"));

    return (
        <>
            {pages[page]}
        </>
    );
}
