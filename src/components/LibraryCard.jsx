import SkeletonCard from "./SkeletonCard";
import PropTypes from "prop-types";

const LibraryCard = ({ playlist }) => {
    return (
        <div className="carousel carousel-center rounded-box">
            {playlist.length === 0 ? (
                <div className="card bg-base-100 image-full w-full lg:w-96 xl:w-[400px] shadow-xl">
                    <div className="card-body relative">
                        <SkeletonCard />
                    </div>
                </div>
            ) : (
                playlist.map((song) => (
                    <div
                        className="card bg-base-100 image-full w-full lg:w-96 xl:w-[400px] shadow-xl"
                        key={song.id}
                    >
                        <figure>
                            <img
                                src={
                                    song.album?.images[0]?.url ||
                                    "default-image-url"
                                }
                                alt={song.name}
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{song.name}</h2>
                            <p>Artist: {song.artists[0]?.name}</p>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

LibraryCard.propTypes = {
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
};

export default LibraryCard;
