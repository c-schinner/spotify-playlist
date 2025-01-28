import PropTypes from "prop-types";

const SearchResultCarousel = ({ data, onAddToSideboard }) => {
    console.log("Rendering SearchResultCarousel with data:", data);

    return (
        <div className="carousel carousel-center bg-neutral rounded-box w-full max-h-[250px]">
            {data.map((song) => (
                <div className="carousel-item relative" key={song.id}>
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
                                onClick={() => onAddToSideboard(song)}
                                className="btn btn-outline btn-info h-2 absolute top-2 right-2"
                            >
                                +
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

SearchResultCarousel.propTypes = {
    data: PropTypes.array,
    onAddToSideboard: PropTypes.func.isRequired,
};

export default SearchResultCarousel;
