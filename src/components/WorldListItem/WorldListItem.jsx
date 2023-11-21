function WorldListItem({ url, title, handleItemClick }) {
    
    return (
      <>
        <div className="worldListItem" onClick={handleItemClick}>
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
      </>
    );
  }

  export default WorldListItem;
