const DashBoard = ({ user }) => {
    return (
        <div>
            {user && (
                <div>
                    <h2 className=" text-xl font-semibold ">
                        {" "}
                        Welcome to your Profile {user.name}
                    </h2>
                </div>
            )}
        </div>
    );
};

export default DashBoard;
