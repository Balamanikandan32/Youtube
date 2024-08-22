const VideoCard = ({info}) => {
    const {snippet, statistics} = info
    const {channelTitle, title, thumbnails} = snippet

    return (
        <div className="w-80 m-2 cursor-pointer">
          <img className="rounded-lg" alt="thumbnail" src={thumbnails.medium.url} />
          <ul>
            <li className="font-bold py-2">{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount} views</li>
          </ul>
        </div>
      );
}

export default VideoCard