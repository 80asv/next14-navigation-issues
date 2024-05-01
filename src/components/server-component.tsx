import getData from "../utils/getData";
export default async function ServerComponent(){
    const data = await getData();
    return (
        <div className="bg-green-100 p-4 rounded-md">
            <h1>Server Component Loaded</h1>
        </div>
    )
}