'use client'; // Ensures client-side rendering for this component
import Link from 'next/link';
import { useState, FormEvent, MouseEvent } from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../../../firebase';
import { useRouter } from 'next/navigation'; // Use 'next/navigation' for Next 13+ app directory routing

const Auth = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isSignUp, setIsSignUp] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [isCreator, setIsCreator] = useState<boolean | null>(null); // State to check if user is creator
  const router = useRouter(); // This should be used with 'next/navigation' in Next 13+ App Directory

  // Handle email login or sign-up
  const handleEmailLogin = async (e: FormEvent) => {
    e.preventDefault();

    // Check if all fields are filled
    if (!email.trim() || !password.trim()) {
      setError('Please fill out all fields.');
      return;
    }

    try {
      if (isSignUp) {
        await createUserWithEmailAndPassword(auth, email, password);
        setIsCreator(null); // Reset the creator check field for the user to make a choice
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        router.push('/search'); // Redirect to dashboard after login
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message); // Show specific error message if it's an instance of Error
      } else {
        setError('An unknown error occurred.');
      }
    }
  };

  // Handle Google login
  const handleGoogleLogin = async (e: MouseEvent) => {
    e.preventDefault();
    try {
      await signInWithPopup(auth, googleProvider);
      router.push('/search'); // Redirect to dashboard after successful Google login
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred.');
      }
    }
  };
  const [isOpen, setIsOpen] = useState(false);
  // Handle the creator check and navigation
  const handleCreatorCheck = () => {
    if (isCreator === null) {
      setError('Please select your role before proceeding.');
      return;
    }

    if (isCreator) {
      router.push('/creation-collage'); // Redirect to creator's page
    } else {
      router.push('/search'); // Redirect to search page
    }
  };

  return (
    <div className=' h-screen'>    
      <header className="mb-7">
    <div className="container text-white bg-transparent mx-auto flex justify-between items-center p-2 lg:p-10">
      {/* Logo */}
      <div className="text-4xl font-bold">
  <h1>
    <a href="#">
      <span
        className="bg-gradient-to-r from-cyan-500 to-purple-500 text-transparent bg-clip-text"
      >
        Orbbitt
      </span>
    </a>
  </h1>
</div>


      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-12">
        <Link href="/" className="hover:text-grey-800 py-3 text-lg md:text-xl">Home</Link>
        <Link href="/creation-collage" className="hover:text-grey-800 py-3 text-lg md:text-xl ">Add your college</Link>
        <Link href="/search" className="hover:text-grey-800 py-3 text-lg md:text-xl ">Search a college</Link>
        

      </nav>

      {/* Mobile Navigation Button */}
      <div className="xl:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`focus:outline-none transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}
        >
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
          </svg>
        </button>
      </div>
    </div>

    {/* Mobile Navigation Links */}
    <div
      className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
        isOpen ? 'max-h-100 opacity-100' : 'max-h-0 opacity-0'
      }`}
    >
      <nav className="text-center">
        <Link href="/" className="block px-6 py-3 text-lg hover:bg-gray-100 hover:text-black ">Home</Link>
        <Link href="/creation-collage" className="block px-6 py-3 text-lg hover:bg-gray-100 hover:text-black ">Add your college</Link>
        <Link href="/search" className="block px-6 py-3 text-lg hover:bg-gray-100 hover:text-black ">Search a college</Link>

      </nav>
    </div>
  </header>
    <div className="flex justify-center items-center  ">
    

      <div className="border-white border p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-white text-center mb-6">{isSignUp ? 'Sign Up' : 'Login'}</h2>
        {error && <div className="text-red-500 text-center mb-4">{error}</div>}

        <form onSubmit={handleEmailLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
          <button
            type="submit"
            className="w-full p-3 border border-white text-white rounded-lg hover:bg-white hover:text-black hover:border-black  transition"
          >
            {isSignUp ? 'Sign Up' : 'Login'}
          </button>
        </form>

        <button
          onClick={handleGoogleLogin}
          className="w-full mt-4 p-3 text-white border border-white rounded-lg hover:bg-black hover:text-white transition"
        >
          Sign in with Google
        </button>

        
       

        {isSignUp && isCreator !== null && (
          <button
            onClick={handleCreatorCheck}
            className="w-full mt-4 p-3 bg-black text-white rounded-lg transition"
          >
            Continue
          </button>
        )}

        <p className="mt-4 text-center text-white">
          {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
          <span
            onClick={() => {
              setIsSignUp(!isSignUp);
              setError(''); // Clear errors when toggling between Login/Sign Up
            }}
            className="text-blue-500 cursor-pointer hover:underline"
          >
            {isSignUp ? 'Login' : 'Sign Up'}
          </span>
        </p>
      </div>
    </div>
    </div>
  );
};

export default Auth;
