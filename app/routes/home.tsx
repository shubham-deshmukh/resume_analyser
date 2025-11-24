import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
import { resumes } from "~/constants";
import ResumeCard from "~/components/ResumeCard";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { usePuterStore } from "~/lib/puter";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resume Analyser" },
    { name: "description", content: "Helps to improve your resume" },
  ];
}

export default function Home() {

  const { auth } = usePuterStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.isAuthenticated) {
      // user is not authenticated then redirect to auth page
      navigate("/auth?next=/");
    }
  }, [auth.isAuthenticated]);
    
  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover p-5">
      {/* Navbar */}
      <Navbar />
      {/* Hero Section */}
      <section className="main-section">
        <div className="page-heading pb-20">
          <h1>Track Your Applications & Resume Ratings</h1>
          <h2>Review your submission and check AI-powered feedback.</h2>
        </div>
      </section>
      {/* Resumes section*/}
      {resumes.length > 0 && (
        <div className="resumes-section">
          {resumes.map((resume, index) => (
            <ResumeCard key={index} resume={resume} />
          ))}
        </div>
      )}
    </main>
  );
}
