

type TrackProps = {
    title: string;
    albumName: string;
    cover: string;
};



const playitens = ({ title, albumName, cover }: TrackProps) => {
    return (
        <div className="playitens-container">
            
            <div className="playitens-content">

                <div className="music">
                    <img src={cover} alt={title} className="music-cover" />
                    <div className="music-text">
                        <h4>{title} - {albumName}</h4>
                    </div>
                </div>
            </div>



        </div>

    )
}

export default playitens