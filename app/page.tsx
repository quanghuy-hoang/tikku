import { getMovies } from '@/lib/mongo/movies'

async function fetchMovies() {
  const { movies } = await getMovies()
  if (!movies) throw new Error('Failed to fetch movies!')

  return movies
}

export default async function Home() {
  const movies = await fetchMovies()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section>
        <ul>
          {movies.map(movie => (
            <li key={movie._id}>{movie.title}</li>
          ))}
        </ul>
      </section>

    </main>
  )
}
