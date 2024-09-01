const ProfilePage = () => {
  return (
    <div>
      <h1 className='text-2xl font-bold'>Your Profile</h1>
      <form className='mt-4'>
        <div className='mb-4'>
          <label className='block text-gray-700'>Username</label>
          <input
            type='text'
            className='mt-1 p-2 w-full border rounded'
            placeholder='Enter your username'
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700'>Email</label>
          <input
            type='email'
            className='mt-1 p-2 w-full border rounded'
            placeholder='Enter your email'
          />
        </div>
        <button
          type='submit'
          className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700'
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default ProfilePage;
