import PropTypes from "prop-types";

const MusicCard = ({ song }) => {
    return (
        <div className="card bg-base-100 w-1/2 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{song.name}</h2>
                <p>{song.artist[0]?.name}</p>
                <p>{song.album?.name}</p>
            </div>
            <figure>
                <img src={song.album?.images[0]?.url} alt={song.name} />
            </figure>
        </div>
    );
};

MusicCard.propTypes = {
    song: PropTypes.object,
};

export default MusicCard;
