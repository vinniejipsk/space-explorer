function VideoItem({ title, thumbnailUrl }) {

    return (
          <div>
            <h3>{title}</h3>

            {thumbnailUrl && (
                  <img src={thumbnailUrl} alt={title} className="thumbnail-video" />
            )}
            
          </div>
    )
  }
  
  export default VideoItem