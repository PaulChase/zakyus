const IsLoading = ({ message }) => {
    return (
        <div className="  mt-6">
            <div className=" w-16 h-16 border-t-4 border-b-4   border-green-500 border-solid rounded-full animate-spin mb-3 mx-auto">
                {" "}
            </div>
            <br />
            <h3 className="text-center font-semibold text-xl ">{message}</h3>
        </div>
    );
};

export default IsLoading;
