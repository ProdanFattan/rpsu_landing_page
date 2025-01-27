// components/Preloader.js
const Preloader = () => {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
        <div className="w-12 h-12 border-4 border-t-transparent border-blue-500 rounded-full animate-spin"></div>
      </div>
    );
  };
  
  export default Preloader;
  