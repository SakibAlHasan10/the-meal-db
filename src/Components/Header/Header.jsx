const Header = () => {
  return (
    <div className="text-center py-10 text-white">
      <h2 className="text-4xl font-bold ">Welcome to TheMealDB</h2>
      <p className="my-3">
        Welcome to TheMealDB: An open, crowd-sourced database of Recipes from
        around the world. <br /> We also offer a{" "}
        <span className="text-orange-200">free JSON API</span> for anyone
        wanting to use it, with additional features for subscribers.
      </p>
      <button className="text-2xl mt-4 hover:bg-yellow-600 bg-yellow-500 px-10 rounded-md py-2">
        PayPal
      </button>
      <p className="mt-5">
        Click button above to upgrade free API to premium for $3 <br />
        Currently 76 supporters
      </p>
    </div>
  );
};

export default Header;
