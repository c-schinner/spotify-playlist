import SkeletonCard from "./SkeletonCard";
import PropTypes from "prop-types";

const LibraryCard = ({ playlist, onAddToSideboard, selectedPlaylist }) => {
    const displayPlaylist =
        selectedPlaylist.length > 0 ? selectedPlaylist : playlist;

    return (
        <div className="carousel carousel-center rounded-box w-full">
            {displayPlaylist.length === 0 ? (
                <div className="card bg-base-100 image-full shadow-xl">
                    <div className="card-body relative">
                        <SkeletonCard />
                    </div>
                </div>
            ) : (
                displayPlaylist.map((song) => (
                    <div className="carousel=item relative" key={song.id}>
                        <div className="card bg-base-100 w-[200px] h-[200px] rounded-box shadow-xl overflow-hidden">
                            <figure className="w-full h-full">
                                <img
                                    className="w-full h-full object-cover"
                                    src={
                                        song.album?.images[0]?.url ||
                                        "default-image-url"
                                    }
                                    alt={song.name}
                                />
                            </figure>
                            <div className="card-body p-2">
                                <h2 className="text-sm font-semibold text-center">
                                    {song.name}
                                </h2>
                                <p className="text-xs text-center">
                                    {song.artists[0]?.name}
                                </p>
                                <button
                                    onClick={() =>
                                        onAddToSideboard({
                                            ...song,
                                            album: {
                                                images: song.album?.images,
                                            },
                                        })
                                    }
                                    className="btn btn-outline btn-info h-2 absolute top-2 right-2"
                                >
                                    +
                                </button>
                            </div>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

LibraryCard.propTypes = {
    onAddToSideboard: PropTypes.func.isRequired,
    playlist: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            artists: PropTypes.arrayOf(
                PropTypes.shape({
                    name: PropTypes.string.isRequired,
                })
            ).isRequired,
            album: PropTypes.shape({
                name: PropTypes.string,
                images: PropTypes.arrayOf(
                    PropTypes.shape({
                        url: PropTypes.string,
                    })
                ),
            }),
        })
    ).isRequired,
    selectedPlaylist: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            artists: PropTypes.arrayOf(
                PropTypes.shape({
                    name: PropTypes.string.isRequired,
                })
            ).isRequired,
            album: PropTypes.shape({
                name: PropTypes.string,
                images: PropTypes.arrayOf(
                    PropTypes.shape({
                        url: PropTypes.string,
                    })
                ),
            }),
        })
    ).isRequired,
};

export default LibraryCard;
