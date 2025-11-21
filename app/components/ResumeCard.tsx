import React from "react";
import { Link } from "react-router";
import ScoreCircle from "./ScoreCircle";

const ResumeCard = ({
  resume: { id, companyName, jobTitle, feedback, imagePath },
}: {
  resume: Resume;
}) => {
  return (
    <Link
      to={`/resume/${id}`}
      className="resume-card animate-in fade-in duration-1000"
    >
      
        {/* Resume Card Header */}
        <div className="resume-card-header">
          {/* Job Details */}
          <div className="flex flex-col gap-2">
            <h2 className="text-black! text-bold wrap-break-words">
              {companyName}
            </h2>
            <h3 className="text-gray-500 text-lg wrap-break-word">
              {jobTitle}
            </h3>
          </div>
          {/* Score Meter : circle */}
          <div className="shrink-0">
            <ScoreCircle score={feedback.overallScore} />
          </div>
        </div>
        {/* Resume Image */}
        <div className="gradient-border animate-in fade-in duration-1000">
          <div className="w-full h-full">
            <img
              src={imagePath}
              alt="resume"
              className="w-full h-[350px] max-sm:h-[200px] object-cover object-top"
            />
          </div>
        </div>
      
    </Link>
  );
};

export default ResumeCard;
