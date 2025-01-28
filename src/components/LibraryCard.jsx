import SkeletonCard from "./SkeletonCard";

const LibraryCard = () => {
    return (
        <div className="carousel carousel-center rounded-box">
            <div className="card bg-base-100 image-full w-full lg:w-96 xl:w-[400px] shadow-xl">
                <div className="card-body relative">
                    <SkeletonCard />
                    <button className="btn btn-outline btn-warning absolute top-2 right-2">
                        +
                    </button>
                </div>
            </div>
            <div className="card bg-base-100 image-full w-full shadow-xl">
                <figure>
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Title</h2>
                    <p>Artist:</p>
                    <p>Album:</p>
                    <p>Song Name:</p>
                </div>
            </div>
            <div className="card bg-base-100 image-full w-full shadow-xl">
                <figure>
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Title</h2>
                    <p>Artist:</p>
                    <p>Album:</p>
                    <p>Song Name:</p>
                </div>
            </div>
            <div className="card bg-base-100 image-full w-full shadow-xl">
                <figure>
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Title</h2>
                    <p>Artist:</p>
                    <p>Album:</p>
                    <p>Song Name:</p>
                </div>
            </div>
            <div className="card bg-base-100 image-full w-full shadow-xl">
                <figure>
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Title</h2>
                    <p>Artist:</p>
                    <p>Album:</p>
                    <p>Song Name:</p>
                </div>
            </div>
            <div className="card bg-base-100 image-full w-full shadow-xl">
                <figure>
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Title</h2>
                    <p>Artist:</p>
                    <p>Album:</p>
                    <p>Song Name:</p>
                </div>
            </div>
            <div className="card bg-base-100 image-full w-full shadow-xl">
                <figure>
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Title</h2>
                    <p>Artist:</p>
                    <p>Album:</p>
                    <p>Song Name:</p>
                </div>
            </div>
        </div>
    );
};

export default LibraryCard;
