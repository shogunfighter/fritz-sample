
export default async function Home() {

    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const json = await response.json();

    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>Pharmacy</h1>

            Fritz:
            <pre>{JSON.stringify(json, null, 2)}</pre>
      </main>
    );
  }
  