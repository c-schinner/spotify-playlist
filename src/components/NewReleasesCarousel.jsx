import PropTypes from "prop-types";

const NewReleasesCarousel = ({ data, onAddToSideboard }) => {
    return (
        <div className="carousel carousel-center bg-neutral rounded-box w-full max-h-[250px]">
            {data &&
                data.map((release, index) => (
                    <div
                        className="carousel-item relative"
                        key={release.id || index}
                    >
                        <img
                            src={release.images[0]?.url}
                            alt={release.name}
                            className="rounded-box w-[200px] h-[200px] object-cover"
                        />
                        <button
                            onClick={() => onAddToSideboard(release)}
                            className="btn btn-outline btn-info h-2 absolute top-2 right-2"
                        >
                            +
                        </button>
                    </div>
                ))}
        </div>
    );
};

NewReleasesCarousel.propTypes = {
    data: PropTypes.array,
    onAddToSideboard: PropTypes.func.isRequired,
};

export default NewReleasesCarousel;
