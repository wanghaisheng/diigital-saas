function LoadingSpinner() {
  return (
    <div role="status" className="flex items-center justify-center">
      <svg
        aria-hidden="true"
        className="w-6 h-6 text-gray-300 animate-spin dark:text-gray-600 fill-white"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M35.456 0A35.456 35.456 0 0118.13 66.588l-3.162-3.162a29.702 29.702 0 104-4l3.162 3.162A35.456 35.456 0 0135.456 0z"
          fill="black"
        />
        <path
          d="M35.456 0A35.456 35.456 0 0118.13 66.588l-3.162-3.162a29.702 29.702 0 104-4l3.162 3.162A35.456 35.456 0 0135.456 0z"
          fill="white"
        />
      </svg>
      <span className="sr-only">Loading...</span>
    </div>
  );
}

export default LoadingSpinner;
