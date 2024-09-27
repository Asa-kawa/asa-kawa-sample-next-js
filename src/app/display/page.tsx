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
        <Link href="display?page=1" className="next">進む</Link>
        </>,
        <>
        <p>Sample-next-js 1</p>
        <Link href="display?page=2" className="next">進む</Link>
        </>,
        <>
        <p>Sample-next-js 2</p>
        <Link href="display?page=3" className="next">進む</Link>
        </>,
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
