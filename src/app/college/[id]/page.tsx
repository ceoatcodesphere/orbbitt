"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { db } from "../../../../firebase";
import { doc, getDoc } from "firebase/firestore";
import { FaMapMarkerAlt, FaGlobe } from "react-icons/fa";
import Link from "next/link";
import { getAuth, signOut, User } from "firebase/auth";  // Import User type

interface College {
  id: string;
  name: string;
  location: string;
  courses: string;
  imageUrl: string;
  website: string;
  about: string;
}

export default function CollegeDetails() {
  const [college, setCollege] = useState<College | null>(null);
  const { id } = useParams<{ id: string }>();
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null); // Correctly typed state for user
  
  const fetchCollegeDetails = async () => {
    if (!id) return;

    try {
      const docRef = doc(db, "colleges", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        setCollege({
          id: docSnap.id,
          name: data.name || "",
          location: data.location || "",
          courses: data.courses || "",
          imageUrl: data.imageUrl || "",
          website: data.website || "",
          about: data.about || "No description available.",
        });
      } else {
        console.error("No such document!");
      }
    } catch (error) {
      console.error("Error fetching college details:", error);
    }
  };

  const handleLogout = async () => {
    try {
      const auth = getAuth();
      await signOut(auth);
      setUser(null); // Clear the user state after logout
      window.location.href = "/auth"; // Redirect to login page
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  useEffect(() => {
    fetchCollegeDetails();

    // Check if the user is logged in and update the state
    const auth = getAuth();
    auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);  // Set the user if logged in
    });
  }, [id]);

  if (!college) {
    return (
      <div className="man">
<div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
</div>
    );
  }

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "1200px",
        margin: "auto",
        fontFamily: "'Roboto', sans-serif",
        color: "#333",
      }}
    >
      <header className="mb-7">
        <div className="container text-white mx-auto flex justify-between items-center p-2 lg:p-10">
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
            
            {/* Conditional render of logout if user is logged in */}
            {user && (
              <button
                onClick={handleLogout}
                className="text-lg text-red-500 py-3 md:text-xl"
              >
                Log Out
              </button>
            )}
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
          <nav className="text-center text-white">
            <Link href="/" className="block px-6 py-3 text-lg hover:bg-gray-100 hover:text-black ">Home</Link>
            <Link href="/creation-collage" className="block px-6 py-3 text-lg hover:bg-gray-100 hover:text-black ">Add your college</Link>
            <Link href="/search" className="block px-6 py-3 text-lg hover:bg-gray-100 hover:text-black ">Search a college</Link>
            <Link href="#" onClick={handleLogout} className="hover:text-grey-800 py-3 text-red-500 text-lg md:text-xl">Log Out</Link>

          </nav>
        </div>
      </header>

      {/* College Name */}
      <h1
        className="font-bold"
        style={{
          fontSize: "3rem",
          textAlign: "center",
          marginBottom: "15px",
          color: "#fff",
        }}
      >
        {college.name}
      </h1>

      {/* About Section */}
      <div
        style={{
          borderRadius: "15px",
          padding: "20px",
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {/* Image */}
        <div
  className="bg-white rounded-3xl flex justify-center items-center"
  style={{ flex: "1 1 40%" }}
>
  <img
    src={college.imageUrl}
    alt={college.name}
    style={{
      width: "342px",
      objectFit: "cover", // Ensures the image looks good in its container
    }}
  />
</div>


        {/* Details */}
        <div style={{ flex: "1 1 55%" }}>
          <div
            style={{
              backgroundColor: "linear-gradient(120deg, #e8e8e8, #ffffff)",
              padding: "15px",
              borderRadius: "10px",
              marginBottom: "15px",
            }}
          >
            <h2
              style={{
                fontSize: "1.5rem",
                color: "#fff",
                marginBottom: "10px",
              }}
            >
              About the College
            </h2>
            <p style={{ fontSize: "1rem", lineHeight: "1.6", color: "#fff" }}>
              {college.about}
            </p>
          </div>

          {/* Location */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              fontSize: "1.2rem",
              marginBottom: "15px",
              color: "#2d4059",
            }}
          >
            <FaMapMarkerAlt style={{ color: "red" }} />
            <span className="text-white">
          Location:{college.location}
            </span>
          </div>

          {/* Courses */}
          <div
            style={{
              marginBottom: "15px",
              backgroundColor: "#e8e8e8",
              padding: "10px 15px",
              borderRadius: "8px",
          
            }}
          >
      <h1 className="font-semibold">    Courses Offered:</h1>
            <p style={{ marginTop: "5px", fontSize: "1rem" }}>
              {college.courses}
            </p>
          </div>

          {/* Website Link */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginTop: "10px",
            }}
          >
            <FaGlobe style={{ color: "#0077b5" }} />
            <a
              href={college.website}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: "1.1rem",
                color: "#0077b5",
          
              }}
            >
              <span className="text-white no-underline">Visit</span> College Website
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
