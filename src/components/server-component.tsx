export default async function ServerComponent(){
    const simulateAsyncRequest = new Promise((resolve) => {
        setTimeout(() => {
            resolve('Datos recibidos');
        }, 4000);
    });
    await simulateAsyncRequest;
    return (
        <div className="bg-green-100 p-4 rounded-md">
            <h1>Server Component Loaded</h1>
        </div>
    )
}