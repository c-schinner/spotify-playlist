import PropTypes from "prop-types";

const MusicCard = ({ song }) => {
    console.log("MusicCard recieved song:", song);

    return (
        <div className="card bg-base-100 shadow-xl flex flex-col w-full sm:w-1/2">
            <figure className="relative w-full h-48">
                {song.album?.images[0]?.url ? (
                    <img
                        className="w-full h-full object-cover rounded-t-lg"
                        src={song.album?.images[0]?.url}
                        alt={song.name || "Album Cover"}
                    />
                ) : (
                    <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                        <p className="text-sm">No Image</p>
                    </div>
                )}
            </figure>
            <div className="card-body p-4">
                <h2 className="card-title text-lg font-semibold text-center truncate">
                    {song.name}
                </h2>
                <p className="text-sm text-center truncate">
                    {song.artists[0]?.name}
                </p>
                <p className="text-sm text-center truncate">
                    {song.album?.name}
                </p>
            </div>
        </div>
    );
};

MusicCard.propTypes = {
    song: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        artists: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string.isRequired,
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
