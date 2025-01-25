import PropTypes from "prop-types";

const SearchResultCarousel = ({ data }) => {
    console.log("Rendering SearchResultCarousel with data:", data);

    return (
        <div className="carousel carousel-center bg-neutral rounded-box w-full max-h-[250px]">
            {data.map((item) => (
                <div key={item.id} className="carousel-item relative">
                    {item.album ? (
                        <img
                            className="rounded-box w-[200px] h-[200px] object-cover"
                            src={
                                item.album?.images[0]?.url ||
                                "default-image-url"
                            }
                            alt={item.name}
                        />
                    ) : null}
                    <div className="flex flex-col items-center justify-center p-2">
                        <p className="mt-2 text-center text-sm font-semibold">
                            {item.name}
                        </p>

                        {item.artists ? (
                            <p className="text-center text-xs">
                                {item.artists[0]?.name}
                            </p>
                        ) : null}
                        <button className="btn btn-outline btn-info h-2 absolute top-2">
                            +
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

SearchResultCarousel.propTypes = {
    data: PropTypes.array,
};

export default SearchResultCarousel;
