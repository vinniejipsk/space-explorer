function FavouritesListItem({ title, image, comment, onDelete  }) {

  return (
    <div className="fav-item">
      {image && <img src={image} alt={title} className="fav-img" />}
      <div className= "fav-text">
        <h3>{title}</h3>
        <p>{comment}</p>
        <button 
          onClick={onDelete}
          className="delete-button"
        >
          Delete</button>
      </div>
    </div>
  );
}

  export default FavouritesListItem;
