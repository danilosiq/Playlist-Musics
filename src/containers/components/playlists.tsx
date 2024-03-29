import playcover from '../../images/cover/dan.png'

type HeaderProps = {
    title: string;
    subtitle: string;
};
const Playlist = ({ title, subtitle }: HeaderProps) => {
    return (

        <div className="header-container">
            <div className="header-background" />
            <div className="header-content">
                <img
                    src={playcover}
                    alt="Capa da Playlist"
                    className="header-cover"
                />

                <div className="info">
                    <h3>{title}</h3>
                    <h6>{subtitle}</h6>
                </div>
            </div>
        </div>
    );
}

export default Playlist;
