import PropTypes from "prop-types";

const SearchResultCarousel = ({ data }) => {
    return (
        <div className="carousel carousel-center bg-neutral rounded-box w-full max-h-[250px]">
            {data.map((item) => (
                <div key={item.id} className="carousel-item relative">
                    <img
                        className="rounded-box w-[200px] h-[200px] object-cover"
                        src={item.album.images[0].url}
                        alt={item.name}
                    />
                    <p>{item.name}</p>
                    <p>{item.artist[0].name}</p>
                    <button className="btn btn-outline btn-info h-2 absolute top-2 right-2">
                        +
                    </button>
                </div>
            ))}
        </div>
    );
};

SearchResultCarousel.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SearchResultCarousel;
