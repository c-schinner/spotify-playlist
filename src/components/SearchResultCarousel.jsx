// we are going to have our search results in this carousel

const SearchResultCarousel = () => {
    return (
        <div className="carousel carousel-center bg-neutral rounded-box w-full max-h-[250px]">
            <div className="carousel-item relative">
                <img
                    src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
                    className="rounded-box w-[200px] h-[200px] object-cover"
                />
                <button className="btn btn-outline btn-info h-2 absolute top-2 right-2">
                    +
                </button>
            </div>
            <div className="card bg-base-100 image-full w-[72px] shadow-xl"></div>
            <div className="carousel-item">
                <img
                    src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
                    className="rounded-box w-[200px] h-[200px] object-cover"
                />
            </div>
            <div className="carousel-item">
                <img
                    src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
                    className="rounded-box w-[200px] h-[200px] object-cover"
                />
            </div>
            <div className="carousel-item">
                <img
                    src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
                    className="rounded-box w-[200px] h-[200px] object-cover"
                />
            </div>
            <div className="carousel-item">
                <img
                    src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
                    className="rounded-box w-[200px] h-[200px] object-cover"
                />
            </div>
            <div className="carousel-item">
                <img
                    src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
                    className="rounded-box w-[200px] h-[200px] object-cover"
                />
            </div>
            <div className="carousel-item">
                <img
                    src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
                    className="rounded-box w-[200px] h-[200px] object-cover"
                />
            </div>
            <div className="carousel-item">
                <img
                    src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
                    className="rounded-box w-[200px] h-[200px] object-cover"
                />
            </div>
            <div className="carousel-item">
                <img
                    src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
                    className="rounded-box w-[200px] h-[200px] object-cover"
                />
            </div>
            <div className="carousel-item">
                <img
                    src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
                    className="rounded-box w-[200px] h-[200px] object-cover"
                />
            </div>
        </div>
    );
};

export default SearchResultCarousel;
