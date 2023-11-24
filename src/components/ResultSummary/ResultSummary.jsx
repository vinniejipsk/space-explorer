function ResultSummary({ selectedItem, addToFavorites, comment }) {

  if (!selectedItem) {
    return <div></div>;
  }

  return (
    <div className="result-summary">
      <img src={selectedItem.links[0].href} alt={selectedItem.data[0].title} />
      <h2>{selectedItem.data[0].title}</h2>
      <p>{selectedItem.data[0].description}</p>
      <button
        className="favorite-button"
        onClick={() => addToFavorites({
          title: selectedItem.data[0].title,
          image: selectedItem.links[0].href,
          comment: comment
        })}
      >
        Add to Favorites
      </button>
    </div>
  );
}

export default ResultSummary;
