function ResultSummary({ selectedItem }) {
  if (!selectedItem) {
    return <div> </div>;
  }

  return (
    <div className="result-summary">
      <img src={selectedItem.links[0].href} alt={selectedItem.data[0].title} />
      <h2>{selectedItem.data[0].title}</h2>
    </div>
  );
}

export default ResultSummary;
