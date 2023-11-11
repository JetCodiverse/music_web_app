async function GetMovies(url) {
  const res = await fetch(url);
  const data = await res.json();

  ShowMovies(data.results);
  return <div></div>;
}

export default GetMovies;
