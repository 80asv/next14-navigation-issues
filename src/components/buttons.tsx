'use client';
import Link from "next/link";
import useUpdateSearchParams from "../utils/useUpdateSearchParams";

export default function Buttons() {
    const { updateSearchParams, deleteSearchParam } = useUpdateSearchParams();
    return(
        <div className="flex gap-2">
            <button onClick={() => updateSearchParams({ query: 'testParam', value: 'true' })} className="p-2 rounded-md border border-solid border-gray-100 hover:bg-gray-100">
                Open
            </button>
            <button onClick={() => deleteSearchParam('testParam')} className="p-2 rounded-md border border-solid border-gray-100 hover:bg-gray-100">
                Close
            </button>
        </div>
    )
}