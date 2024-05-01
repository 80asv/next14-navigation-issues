import Buttons from "../components/buttons";
import { Suspense } from "react";
import ServerComponent from "../components/server-component";
import TestComponentSearchParam from "../components/test-component";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Buttons />
        <Suspense fallback={<>loading...</>}>
          <TestComponentSearchParam />   
        </Suspense>
        <Suspense fallback={
          <div className="bg-green-100 p-4 rounded-md">
            LOADING SERVER COMPONENT...
          </div>
        }>
          <ServerComponent />
        </Suspense>
    </main>
  );
}
