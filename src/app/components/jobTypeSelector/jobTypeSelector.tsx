'use client'

import React, { useState } from 'react';
import './jobCard.css';
import JobCard from './jobCard';

interface Job {
  jobType: string;
  jobTag: string;
  name: string;
  description: string;
  jobLocation: string;
}

interface Props {
  jobs: Job[];
}

export default function JobTypeSelector({ jobs }: Props) {
  const [selectedJobType, setSelectedJobType] = useState<string | null>('PartTime');

  const handleJobTypeClick = (jobType: string) => {
    setSelectedJobType(jobType);
  };

  return (
    <div>
      <div className="Nav_of_content">
        {/* Your job type buttons */}
        {['PartTime', 'FullTime', 'RecentJob', 'Intern'].map((jobType) => (
          <button
            key={jobType}
            className={`Nav_of_content_link ${selectedJobType === jobType ? 'active' : ''}`}
            onClick={() => handleJobTypeClick(jobType)}
          >
            {jobType}
          </button>
        ))}
      </div>
      {selectedJobType &&
        jobs
          .filter(job => job.jobType === selectedJobType)
          .map((job, index) => (
            <JobCard
              key={index}
              selectedJobType={selectedJobType}
              jobTag={job.jobTag}
              jobName={job.name}
              jobDescription={job.description}
              jobLocation={job.jobLocation}
            />
          ))
      }
    </div>
  );
}
