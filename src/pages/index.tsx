import Head from 'next/head';
import Header from '../components/Header';
import { useEffect } from 'react';

export default function Home(props) {
	

	//SPA
	/* 	useEffect(() => {
		fetch('http://localhost:3333/episodes')
			.then((response) => response.json())
			.then((data) => console.log(data));
	}, []); */

	return (
		<>
			<h1>Index</h1>
			<p>{JSON.stringify(props.episodes)}</p>
		</>
	);
}

/* //SERVER SIDE RENDERING

export async function getServerSideProps() {
	const response = await fetch('http://localhost:3333/episodes');
	const data = await response.json();

	return {
		props: {
			episodes: data,
		},
	};
} */

//SSG - SITE STATIC GENERATION


export async function getStaticProps() {
	const response = await fetch('http://localhost:3333/episodes');
	const data = await response.json();

	return {
		props: {
			episodes: data,
		},
		revalidate: 60 * 60 * 8,
	};
}
