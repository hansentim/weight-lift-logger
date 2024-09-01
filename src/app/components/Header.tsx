import Link from "next/link";

const Header = () => {
  return (
    <header className='bg-blue-600 text-white p-4'>
      <nav className='container mx-auto flex justify-between items-center'>
        <div className='text-lg font-bold'>Weightlift Logger</div>
        <div className='space-x-4'>
          <Link href='/' className='hover:underline'>
            Home
          </Link>
          <Link href='/workout' className='hover:underline'>
            Log Workout
          </Link>
          <Link href='/progress' className='hover:underline'>
            Progress
          </Link>
          <Link href='/profile' className='hover:underline'>
            Profile
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
