import Head from 'next/head'
import ProductCard from '../components/ProductCard'
import games from '../data/games.json'
import { useState } from 'react'


export default function Explore() {
const [genre, setGenre] = useState('All')
const [minRating, setMinRating] = useState(0)
const genres = ['All', ...Array.from(new Set(games.map(g => g.genre)))]
const filtered = games.filter(g => (genre === 'All' || g.genre === genre) && g.rating >= minRating)


return (
<div className="max-w-6xl mx-auto px-6 py-8">
<Head><title>Explore — GameVerse</title></Head>
<h2 className="text-2xl font-semibold mb-4">Explore Games</h2>


<div className="flex gap-4 mb-6">
<select value={genre} onChange={e => setGenre(e.target.value)} className="bg-[#071833] px-3 py-2 rounded">
{genres.map(g => <option key={g} value={g}>{g}</option>)}
</select>


<select value={minRating} onChange={e => setMinRating(Number(e.target.value))} className="bg-[#071833] px-3 py-2 rounded">
<option value={0}>All Ratings</option>
<option value={4}>4+</option>
<option value={4.5}>4.5+</option>
</select>
</div>


<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
{filtered.map(p => <ProductCard key={p.id} p={p} />)}
</div>
</div>
)
}