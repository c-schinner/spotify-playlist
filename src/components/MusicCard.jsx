const MusicCard = () => {
    return (
        <div className="card bg-base-100 w-1/2 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">Title:</h2>
                <p>Artist:</p>
                <p>Album:</p>
                <p>Song Name:</p>
            </div>
            <figure>
                <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="image"
                />
            </figure>
        </div>
    );
};

export default MusicCard;
