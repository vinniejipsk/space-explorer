function FavouriteComment({ setComment }) {
    return (
      <textarea
        placeholder="Comment here before you add to favourite!"
        onChange={(e) => setComment(e.target.value)}
        className="comment-box"
      />
    );
  }
  
  export default FavouriteComment;