"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
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
            <button
            className="next"
             onClick={() => {
                 location.href("page=1");
            }}
            >
                進む
            </button>
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
