import { useState } from "react";

function FavouritesListItem({ title, image, comment, onDelete, onUpdate  }) {

  const [isEditing, setIsEditing] = useState(false);
  const [editedComment, setEditedComment] = useState(comment);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleUpdate = () => {
    onUpdate(editedComment);
    setIsEditing(false);
  };

  return (
    <div className="fav-item">
      {image && <img src={image} alt={title} className="fav-img" />}
      <div className="fav-text">
        <h3>{title}</h3>
        <div className= "edit-delete-container">
          {isEditing ? (
            <input
              type="text"
              value={editedComment}
              onChange={(e) => setEditedComment(e.target.value)}
            />
          ) : (
            <p>{comment}</p>
          )}
          {isEditing ? (
            <button onClick={handleUpdate} className="update-button">
              Update
            </button>
          ) : (
            <button onClick={handleEdit} className="edit-button">
              Edit
            </button>
          )}
          <button onClick={onDelete} className="delete-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default FavouritesListItem;