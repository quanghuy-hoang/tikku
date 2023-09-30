import clientPromise from ".";

let client: Awaited<typeof clientPromise>;
let db: ReturnType<typeof client.db>;
let movies: ReturnType<typeof db.collection>;

export type Movies = {
  _id: string;
  title?: string;
};

async function init() {
  if (db) return;
  try {
    client = await clientPromise;
    db = client.db();
    movies = db.collection("movies");
  } catch (error) {
    throw error;
  }
}

(async () => {
  await init();
})();

export async function getMovies() {
  try {
    if (!movies) await init();

    const result: Movies[] = await movies
      .find({})
      .limit(20)
      .map((user) => ({ ...user, _id: user._id.toString() }))
      .toArray();

    return { movies: result };
  } catch (error) {
    throw error;
  }
}
