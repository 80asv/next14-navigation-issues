'use client';
import { useSearchParams } from "next/navigation"
import { Suspense } from "react";

export default function TestComponentSearchParam(){
    const searchParams = useSearchParams();
    const testParam = searchParams.get('testParam');
    return (
        <Suspense fallback={<>loading...</>}>
            {testParam && (
                <div
                    className="bg-gray-200 p-4 rounded-lg"
                >
                    <h1>Test Component</h1>
                </div>
            )}
        </Suspense>
    )
}