// Coding exercise for a movie databse

function App() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "6rem",
        padding: "2rem",
      }}
    >
      <section>
        <h1>Add</h1>
        <form style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" name="title" required />
          <label htmlFor="releaseDate">Release Date</label>
          <input type="date" id="releaseDate" name="releaseDate" required />
          <label htmlFor="genre">Genre</label>
          <select id="genre" name="genre">
            <option value="action">Action</option>
            <option value="comedy">Comedy</option>
            <option value="drama">Drama</option>
          </select>
          <button type="submit">Add Movie</button>
        </form>
      </section>
      <section>
        <h1>Movie List</h1>
      </section>
    </main>
  );
}

export default App;
