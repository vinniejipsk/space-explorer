function FavouriteComment({ setComment }) {
    return (
      <input
        placeholder="Type your comments here!"
        onChange={(e) => setComment(e.target.value)}
      />
    );
  }
  
  export default FavouriteComment;