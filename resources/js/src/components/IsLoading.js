const IsLoading = ({ message }) => {
    return (
        <div className=" bg-gray-800 flex justify-center items-center text-white h-full w-full">
            <svg
                className="animate-spin h-20 w-20 mb-4 "
                viewBox="0 0 24 24"
            ></svg>
            <br />
            <h3 className=" font-semibold text-xl">{message}</h3>
        </div>
    );
};

export default IsLoading;
