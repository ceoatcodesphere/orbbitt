"use client";
import { useState, useEffect } from "react";
import { db, auth } from "../../../firebase";  // Assuming you have initialized auth in firebase.js
import { collection, addDoc } from "firebase/firestore";
import Link from "next/link";
import { useRouter } from "next/navigation";  // To handle redirecting
import { signOut } from "firebase/auth";  // Import Firebase's signOut method

// Define the type for a college
interface College {
  name: string;
  location: string;
  courses: string; // Courses stored as a comma-separated string
  imageUrl: string; // URL of the college image
  website: string; // URL for the college website
  about: string; // About College
}

export default function CollegeCreation() {
  const [formData, setFormData] = useState<College>({
    name: "",
    location: "",
    courses: "",
    imageUrl: "",
    website: "",
    about: "",
  });
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false); // To handle loading state
  const router = useRouter();  // For redirecting to the login page

  useEffect(() => {
    // Check if the user is authenticated
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        // If the user is not logged in, redirect them to the login page
        router.push("/auth");
      }
    });

    // Cleanup the subscription when the component is unmounted
    return () => unsubscribe();
  }, [router]);

  // Handle form submission to add a new college
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      await addDoc(collection(db, "colleges"), {
        name: formData.name,
        location: formData.location,
        courses: formData.courses,
        imageUrl: formData.imageUrl,
        website: formData.website,
        about: formData.about, // Save About College to Firestore
      });
      setFormData({
        name: "",
        location: "",
        courses: "",
        imageUrl: "",
        website: "",
        about: "",
      }); // Reset the form
    } catch (error) {
      console.error("Error adding college:", error);
    } finally {
      setLoading(false);
    }
  };

  // Log out the user
  const handleLogout = async () => {
    try {
      await signOut(auth); // Firebase signOut method
      router.push("/auth"); // Redirect to the login page after logging out
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <div>
      <header className="mb-7">
        <div className="container mx-auto text-white flex justify-between items-center p-2 lg:p-10">
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
            <Link href="#" onClick={handleLogout} className="hover:text-grey-800 py-3 text-red-500 text-lg md:text-xl">Log Out</Link>

          </nav>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`focus:outline-none transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}
            >
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2fff/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Links */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-100 opacity-100' : 'max-h-0 opacity-0'}`}
        >
          <nav className="text-center text-white">
            <Link href="/" className="block px-6 py-3 text-lg hover:bg-gray-100 hover:text-black ">Home</Link>
            <Link href="/creation-collage" className="block px-6 py-3 text-lg hover:bg-gray-100 hover:text-black ">Add your college</Link>
            <Link href="/search" className="block px-6 py-3 text-lg hover:bg-gray-100 hover:text-black ">Search a college</Link>
            <Link href="#" onClick={handleLogout} className="hover:text-grey-800 py-3 text-red-500 text-lg md:text-xl">Log Out</Link>

          </nav>
        </div>
      </header>

      <div
        style={{
          padding: "20px",
          fontFamily: "'Arial', sans-serif",
          color: "#ffffff",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            padding: "30px",
            borderRadius: "10px",
            border: "2px solid #fff",
            maxWidth: "500px",
            width: "100%",
          }}
        >
          {/* Form to add a new college */}
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "15px" }}>
              <input
                type="text"
                placeholder="College Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "5px",
                  border: "2px solid #fff",
                  color: "black",
                }}
              />
            </div>
            <div style={{ marginBottom: "15px" }}>
              <input
                type="text"
                placeholder="Location"
                value={formData.location}
                onChange={(e) =>
                  setFormData({ ...formData, location: e.target.value })
                }
                required
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "5px",
                  border: "2px solid #fff",
                  color: "black",
                }}
              />
            </div>
            <div style={{ marginBottom: "15px" }}>
              <input
                type="text"
                placeholder="Courses (comma-separated)"
                value={formData.courses}
                onChange={(e) =>
                  setFormData({ ...formData, courses: e.target.value })
                }
                required
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "5px",
                  border: "2px solid #fff",
                  color: "black",
                }}
              />
            </div>
            <div style={{ marginBottom: "15px" }}>
              <input
                type="text"
                placeholder="Image URL"
                value={formData.imageUrl}
                onChange={(e) =>
                  setFormData({ ...formData, imageUrl: e.target.value })
                }
                required
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "5px",
                  border: "2px solid #fff",
                  color: "black",
                }}
              />
            </div>
            <div style={{ marginBottom: "15px" }}>
              <input
                type="url"
                placeholder="Website URL"
                value={formData.website}
                onChange={(e) =>
                  setFormData({ ...formData, website: e.target.value })
                }
                required
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "5px",
                  border: "2px solid #fff",
                  color: "black",
                }}
              />
            </div>
            <div style={{ marginBottom: "15px" }}>
              <textarea
                placeholder="About College"
                value={formData.about}
                onChange={(e) =>
                  setFormData({ ...formData, about: e.target.value })
                }
                required
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "5px",
                  border: "2px solid #fff",
                  color: "black",
                  minHeight: "100px",
                }}
              ></textarea>
            </div>

            <button
              type="submit"
              style={{
                padding: "10px 20px",
                border: "2px solid #fff",
                color: "white",
                borderRadius: "5px",
                
                fontSize: "16px",
              }}
              disabled={loading}
            >
              {loading ? "Submitting..." : "Add College"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
