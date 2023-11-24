function FavouriteComment({ setComment }) {
    return (
      <textarea
        placeholder="Comment here!"
        onChange={(e) => setComment(e.target.value)}
        className="comment-box"
      />
    );
  }
  
  export default FavouriteComment;