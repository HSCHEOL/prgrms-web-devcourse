const Board = ({ articles }) => {
  return (
    <div>
      <h1>Board</h1>

      <ul>
        {articles.map((a) => (
          <li key={a.id}>
            {a.id} | {a.title} | {a.author}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Board;
