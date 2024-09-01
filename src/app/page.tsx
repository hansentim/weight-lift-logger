const HomePage = () => {
  return (
    <main>
      <h1 className='text-2xl font-bold'>Welcome to Weightlift Logger</h1>
      <p className='mt-4 text-gray-700'>
        Track your workouts, monitor your progress, and stay motivated!
      </p>
      <div className='mt-8 grid grid-cols-1 md:grid-cols-3 gap-4'>
        <div className='p-4 bg-white shadow rounded-lg'>
          <h2 className='text-xl font-semibold'>Total Workouts</h2>
          <p className='text-3xl mt-2'>42</p>
        </div>
        <div className='p-4 bg-white shadow rounded-lg'>
          <h2 className='text-xl font-semibold'>Total Weight Lifted</h2>
          <p className='text-3xl mt-2'>12,345 kg</p>
        </div>
        <div className='p-4 bg-white shadow rounded-lg'>
          <h2 className='text-xl font-semibold'>Longest Streak</h2>
          <p className='text-3xl mt-2'>14 days</p>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
