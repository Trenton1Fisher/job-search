"use client";

import { useState } from "react";
import type { HighlightedJob } from "../../types/apiFetchingTypes";
import DOMPurify from "isomorphic-dompurify";
import { Claims } from "@auth0/nextjs-auth0";

interface HighlightedJobProps {
  highlightedJob: HighlightedJob;
  user: Claims | null | undefined;
}

export default function HiglightedJobComponent({
  highlightedJob,
  user,
}: HighlightedJobProps) {
  const [loading, setLoading] = useState(false);

  async function handleJobSave() {
    const res = await fetch("/api/save");
  }

  const sanitizedDescription = DOMPurify.sanitize(
    highlightedJob?.jobDescription as string
  );

  return (
    <div className="job-details-container px-4 lg:px-0 lg:w-1/2 py-4 md:py-0 md:ml-0">
      <p className="job-title font-bold text-3xl md:text-4xl lg:text-5xl mt-8">
        {highlightedJob.jobTitle}
      </p>
      <p className="job-meta text-sm text-gray-500 mt-2">
        {highlightedJob.employerName} • {highlightedJob.locationName}
      </p>
      <div className="apply-links flex flex-col sm:flex-row items-start mt-4 space-y-4 sm:space-y-0 sm:space-x-4">
        {highlightedJob.jobUrl && (
          <a
            href={highlightedJob.jobUrl}
            target="_blank"
            className="apply-link border py-2 px-4 rounded-md text-center inline-block bg-gray-200 text-black hover:bg-gray-300"
          >
            Apply Through Reed.Uk
          </a>
        )}
        {highlightedJob.externalUrl && (
          <a
            href={highlightedJob.externalUrl}
            target="_blank"
            className="apply-link border py-2 px-4 rounded-md text-center inline-block bg-gray-200 text-black hover:bg-gray-300"
          >
            Apply Through Company
          </a>
        )}
        {user && (
          <button
            onClick={handleJobSave}
            className="border py-2 px-4 rounded-md text-center inline-block bg-gray-200 text-black hover:bg-gray-300 flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14.828V5a2 2 0 00-2-2H7a2 2 0 00-2 2v9.828l7 4.666 7-4.666z"
              />
            </svg>
            <span>Save Job</span>
          </button>
        )}
      </div>
      <h2 className="section-title font-semibold text-2xl md:text-3xl mt-8">
        About The Role
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 my-4">
        <div className="info-item">
          <p className="font-bold">Date Posted</p>
          <p>{highlightedJob.datePosted}</p>
        </div>
        <div className="info-item">
          <p className="font-bold">Application Deadline</p>
          <p>{highlightedJob.expirationDate}</p>
        </div>
        <div className="info-item">
          <p className="font-bold">Expected Salary</p>
          {highlightedJob.salary !== null ? (
            <p>{highlightedJob.salary}</p>
          ) : (
            <p>Pay Not Provided</p>
          )}
        </div>
        <div className="info-item mt-2">
          <p className="font-bold">Job Type</p>
          <p>{highlightedJob.partTime ? "Part Time" : "Full Time"}</p>
        </div>
        <div className="info-item mt-2">
          <p className="font-bold">Contract Type</p>
          <p>{highlightedJob.contractType}</p>
        </div>
        <div className="info-item mt-2">
          <p className="font-bold">Total Applicants</p>
          <p>{highlightedJob.applicationCount}</p>
        </div>
      </div>

      <div
        className="jobInfo-Container text-left mt-4"
        dangerouslySetInnerHTML={{ __html: sanitizedDescription }}
      />
    </div>
  );
}
