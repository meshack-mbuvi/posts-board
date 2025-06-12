export default function Loading() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col items-center space-y-4">
        <span className="loading loading-spinner loading-lg text-primary" />
        <p className="text-gray-600 text-lg font-medium">Loading posts...</p>
      </div>
    </div>
  );
}
