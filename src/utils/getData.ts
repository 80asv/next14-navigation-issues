'use server';
export default async function getData() {
  try {
    const response = await fetch(
      `https://api-xqajfb5zja-uc.a.run.app/v1/trips/ca30aaa8-6ec5-4e16-b85c-c45b76a1115f/tours?destination_idx=0`,
      {
        cache: 'no-cache',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'admin-key': '123',
        },
      },
    );
    const data = await response.json();
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
}