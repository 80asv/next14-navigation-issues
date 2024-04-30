import Buttons from "../components/buttons";
import { Suspense } from "react";
import ServerComponent from "../components/server-component";
import TestComponentSearchParam from "../components/test-component";
import { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata(
  { params }: any,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  // read route params
  const prevData = (await parent) as Metadata;
  const trip = (await (
    await fetch(`https://api-xqajfb5zja-uc.a.run.app/v1/trips/ca30aaa8-6ec5-4e16-b85c-c45b76a1115f`)
  ).json());

  const tripImage = trip?.image;
  const photoUrl =
    tripImage?.source ??
    `https://storage.googleapis.com/maps-photos-prod/${tripImage?.photo_reference}/1024.jpg`;
  const title = trip
    ? `Trip to ${
        (trip.destinations ?? [])[0]?.destination.name.split(',')[0]
      } | Trip Planner AI`
    : 'Trip not found';

  const firstName = trip.user.display_name.split(' ')[0];
  const name =
    trip?.user?.display_name.length > 0
      ? `${firstName}${firstName.endsWith('s') ? "'" : "'s"}`
      : "A user's";

  const destinationParts = (trip?.destinations_summary ?? [])[0]?.destination.split(',');
  const destination = `${(destinationParts ?? [])[0]}, ${
    (destinationParts ?? [])[destinationParts?.length - 1]
  }`;
  return {
    title: trip
      ? `${trip ? name : ''} Trip to ${destination} | Trip Planner AI`
      : 'Trip not found',
    metadataBase: prevData.metadataBase,
    description: prevData.description,
    robots: {
      follow: false,
      index: false,
    },
    openGraph: {
      title: title,
      url: `${prevData.metadataBase}/public-trips/${params.id}`,
      type: 'website',
      description: prevData.openGraph?.description,
      images: [
        {
          url: photoUrl,
          alt: trip ? title : 'Trip not found',
          width: 1024,
          height: (1024 / tripImage?.width) * tripImage?.height,
        },
      ],
    },
  };
}

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
