const ProgressPage = () => {
  return (
    <div>
      <h1 className='text-2xl font-bold'>Your Progress</h1>
      <p className='mt-4 text-gray-700'>
        Progress tracking charts and statistics will go here.
      </p>
      <div className='mt-8 bg-white shadow rounded-lg p-4'>
        <h2 className='text-xl font-semibold'>Progress Chart</h2>
        {/* Placeholder for chart */}
        <div className='h-64 bg-gray-100 mt-4 rounded-lg flex items-center justify-center'>
          <span className='text-gray-500'>Chart Placeholder</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressPage;
