function WorldListItem({ url, title }) {
    
    return (
      <>
        <div className="worldListItem">
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
      </>
    );
  }

  export default WorldListItem;
