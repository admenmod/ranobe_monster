// export async function generateStaticParams() {
// 	const novels = await fetch('http://localhost:9001/novels-top').then(data => data.json()) as { id: string }[];
//
// 	console.log(novels);
//
// 	return novels.map(it => ({ id: it.id }));
// }

export default async function Page({ params }: { params: { id: string } }) {
	// const data = await fetch(`http://localhost:9001/novels/${params.id}`).then(data => data.json()) as { id: string };
	//
	// return <main>
	// 	<h1>id: {data.id}</h1>
	// </main>

	return <main>Временно неработает (перенос на новое api)</main>
}
