const WorkoutPage = () => {
  return (
    <div>
      <h1 className='text-2xl font-bold'>Log Your Workout</h1>
      <form className='mt-4'>
        <div className='mb-4'>
          <label className='block text-gray-700'>Exercise Name</label>
          <input
            type='text'
            className='mt-1 p-2 w-full border rounded'
            placeholder='Enter exercise name'
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700'>Sets</label>
          <input
            type='number'
            className='mt-1 p-2 w-full border rounded'
            placeholder='Enter number of sets'
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700'>Reps</label>
          <input
            type='number'
            className='mt-1 p-2 w-full border rounded'
            placeholder='Enter number of reps'
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700'>Weight (kg)</label>
          <input
            type='number'
            className='mt-1 p-2 w-full border rounded'
            placeholder='Enter weight in kg'
          />
        </div>
        <button
          type='submit'
          className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700'
        >
          Save Workout
        </button>
      </form>
    </div>
  );
};

export default WorkoutPage;
