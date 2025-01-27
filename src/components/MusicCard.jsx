import PropTypes from "prop-types";

const MusicCard = ({ song }) => {
    console.log("MusicCard recieved song:", song);

    return (
        <div className="card bg-base-100 w-1/2 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{song.name}</h2>
                <p>{song.artist[0]?.name}</p>
                <p>{song.album?.name}</p>
            </div>
            <figure>
                {song.album?.images[0]?.url ? (
                    <img
                        src={song.album?.images[0]?.url}
                        alt={song.name || "Album Cover"}
                    />
                ) : (
                    <div className="w-full h-32 bg-gray-300 flex items-center justify-center">
                        <p>No Image</p>
                    </div>
                )}
            </figure>
        </div>
    );
};

MusicCard.propTypes = {
    song: PropTypes.shape({
        name: PropTypes.string,
        artist: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string,
            })
        ),
        album: PropTypes.shape({
            name: PropTypes.string,
            images: PropTypes.arrayOf(
                PropTypes.shape({
                    url: PropTypes.string,
                })
            ),
        }),
    }).isRequired,
};

export default MusicCard;
