

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen w-full">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-purple-500 border-r-indigo-500 animate-spin"></div>
        <div className="absolute inset-2 bg-black rounded-full"></div>
      </div>
    </div>
  );
};

export default Loader;