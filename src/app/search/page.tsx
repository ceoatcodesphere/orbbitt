'use client';

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { db } from "../../../firebase";
import { collection, getDocs } from "firebase/firestore";
import Link from "next/link";
import { signOut, User } from 'firebase/auth';
import { auth } from '../../../firebase'; // Adjust the path based on your project structure

// Define the type for a college
interface College {
  id?: string;
  name: string;
  location: string;
  courses: string;
  imageUrl: string;
  website: string;
  searchCount: number; // New field to track search popularity
}

export default function CollegeDisplay() {
  const [isOpen, setIsOpen] = useState(false);
  const [colleges, setColleges] = useState<College[]>([]);
  const [filteredColleges, setFilteredColleges] = useState<College[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [locationTerm, setLocationTerm] = useState("");
  const [user, setUser] = useState<User | null>(null); // Change to User | null
  const router = useRouter();

  // Fetch colleges from Firestore
  const fetchColleges = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "colleges"));
      const collegesList: College[] = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as College[];
      setColleges(collegesList);
      setFilteredColleges(collegesList);
    } catch (error) {
      console.error("Error fetching colleges:", error);
    }
  };

  useEffect(() => {
    // Fetch colleges on mount
    fetchColleges();

    // Firebase authentication state listener
    const unsubscribe = auth?.onAuthStateChanged((user) => {
      if (user) {
        setUser(user); // Update the user state if authenticated
      } else {
        router.push("/auth"); // Redirect to auth page if not authenticated
      }
    });

    // Cleanup the subscription on unmount
    return () => unsubscribe?.();
  }, [router]);

  // Handle search and filter
  useEffect(() => {
    const normalize = (str: string) => str.toLowerCase().replace(/\./g, "");

    let filtered: College[];

    if (!searchTerm && !locationTerm) {
      // No search terms: Sort by most searched
      filtered = [...colleges].sort((a, b) => b.searchCount - a.searchCount);
    } else {
      // Filter by course and location
      filtered = colleges.filter((college) => {
        const matchesCourse = normalize(college.courses).includes(normalize(searchTerm));
        const matchesLocation = normalize(college.location).includes(normalize(locationTerm));
        return matchesCourse && matchesLocation;
      });
    }

    setFilteredColleges(filtered);
  }, [searchTerm, locationTerm, colleges]);

  // Navigate to the college details page
  const handleViewMore = (collegeId: string) => {
    router.push(`/college/${collegeId}`);
  };

  // Logout function
  const handleLogout = async () => {
    try {
      await signOut(auth); // Sign out user
      router.push("/auth"); // Redirect to login page after logging out
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  if (!user) {
    return  <div className="man">
    <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>; // Or a loading spinner
  }

  return (
    <div
      className="bg-gradient-to-r from-gray-900 via-gray-800 to-black "
      style={{
        padding: "20px",
        fontFamily: "'Arial', sans-serif",
        minHeight: "100vh",
      }}
    >
      <header className="mb-7">
        <div className="container mx-auto flex justify-between items-center text-white p-2 lg:p-10">
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


          <nav className="hidden md:flex space-x-12">
            <Link href="/" className="hover:text-grey-800 py-3 text-lg md:text-xl">Home</Link>
            <Link href="/creation-collage" className="hover:text-grey-800 py-3 text-lg md:text-xl">Add your college</Link>
            <Link href="#" className="hover:text-grey-800 py-3 text-lg md:text-xl">Search a college</Link>
            <Link href="#" onClick={handleLogout} className="hover:text-grey-800 py-3 text-red-500 text-lg md:text-xl">Log Out</Link>
          </nav>

          <div className="md:hidden">
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

        <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-100 opacity-100' : 'max-h-0 opacity-0'}`}>
          <nav className="text-center text-white">
            <Link href="/" className="block px-6 py-3 text-lg hover:bg-gray-100 hover:text-black">Home</Link>
            <Link href="/creation-collage" className="block px-6 py-3 text-lg hover:bg-gray-100 hover:text-black">Add your college</Link>
            <Link href="/search" className="block px-6 py-3 text-lg hover:bg-gray-100 hover:text-black">Search a college</Link>
            <Link href="#" onClick={handleLogout} className="hover:text-grey-800 py-3 text-red-500 text-lg md:text-xl">Log Out</Link>
          </nav>
        </div>
      </header>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          maxWidth: "600px",
          margin: "20px auto",
        }}
      >
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by course name..."
          style={{
            padding: "12px",
            width: "100%",
            borderRadius: "25px",
            border: "1px solid #ced4da",
            outline: "none",
            fontSize: "16px",
          }}
        />
        <input
          type="text"
          value={locationTerm}
          onChange={(e) => setLocationTerm(e.target.value)}
          placeholder="Search by location..."
          style={{
            padding: "12px",
            width: "100%",
            borderRadius: "25px",
            border: "1px solid #ced4da",
            outline: "none",
            fontSize: "16px",
          }}
        />
      </div>

      <div
        className="py-9 "
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {filteredColleges.map((college) => (
          <div
            key={college.id}
            className="rounded-[22px] max-w-sm w-96 p-4 sm:p-10 bg-zinc-900 shadow-lg border  border-gray-300"
            onClick={() => handleViewMore(college.id!)}
            style={{
              cursor: "pointer",
              textAlign: "center",
            }}
          >
            <div className=" bg-white rounded-[22px]">
              <img
                src={college.imageUrl}
                alt={college.name}
                className="object-contain rounded-[22px] w-full h-60"
                style={{
                  borderRadius: "16px",
                }}
              />
            </div>
            <p className="text-base sm:text-xl text-white mt-4 mb-2 dark:text-neutral-200">
              {college.name}
            </p>
            <p className="text-sm text-white dark:text-neutral-400">
              {college.location}
            </p>
            <div className="flex items-center justify-center">
              <button className="rounded-full px-4 py-2 text-white flex items-center justify-center border border-white mt-4 text-xs text-center font-bold dark:bg-zinc-800">
                <span className="text-sm">View More</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
