/* eslint-disable */
import React from "react";

const PokemonPage = ({data}) => {
	return (
		<div>
			<img src={data.sprites.front_default} alt={data.name}/>
			<br/>
			Name: {data.name}
		</div>
	);
};

export async function getStaticPaths() {
	const res = await fetch("https://pokeapi.co/api/v2/pokemon");
	const pokemon = await res.json();

	const paths = pokemon.results.map((pkm) => ({
		params: {pokemonID: pkm.url.split("/")[6]},
	}));

	return {paths, fallback: "blocking"};
}

export async function getStaticProps({params}) {
	const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.pokemonID}`);
	const data = await res.json();

	return {
		props: {
			data,
		},
		revalidate: 10,
	};
}

export default PokemonPage;
