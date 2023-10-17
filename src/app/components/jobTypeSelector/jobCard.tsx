import React from 'react';
import './jobCard.css';

interface JobCardProps {
  selectedJobType: string;
  jobTag: string;
  jobName: string;
  jobDescription: string;
  jobLocation: string;
}


export default function JobCard({ selectedJobType, jobTag, jobName, jobDescription, jobLocation }: JobCardProps) {
  return (
    <div className="jobCard">
      <div className="jobDetails">
        <h1>{jobName}</h1>
        <p>{jobDescription}</p>
        <div className="jobTags">
          <p>Job Tags:</p>
          <span>{selectedJobType}</span>
          <span>{jobTag}</span>
          <span>{jobLocation}</span>
        </div>
      </div>
      <button className="applyButton">Apply Now</button>
    </div>
  );
}
