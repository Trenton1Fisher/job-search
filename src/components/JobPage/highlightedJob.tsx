"use client";

import Image from "next/image";
import type { HighlightedJob } from "../../../types/apiFetchingTypes";
import DOMPurify from "isomorphic-dompurify";
import Link from "next/link";

export default function HiglightedJobComponent({
  highlightedJob,
}: {
  highlightedJob: HighlightedJob;
}) {
  const sanitizedDescription = DOMPurify.sanitize(
    highlightedJob?.jobDescription as string
  );

  return (
    <div className=" max-md:hidden flex flex-col w-full lg:w-1/2">
      <p className="font-bold text-5xl">{highlightedJob.jobTitle}</p>
      <p className="text-sm text-gray-5 500 mt-2">
        {highlightedJob.employerName} • {highlightedJob.locationName}
      </p>
      <h2 className="font-semibold text-3xl mt-8">About The Role</h2>
      <div className="flex flex-wrap my-4">
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3">
          <div>
            <p className="font-bold">Date Posted</p>
            <p>{highlightedJob.datePosted}</p>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3">
          <div>
            <p className="font-bold">Application Deadline</p>
            {highlightedJob.expirationDate}
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3">
          <div>
            <p className="font-bold">Expected Salary</p>
            {highlightedJob.salary !== null ? (
              <p>{highlightedJob.salary}</p>
            ) : (
              <p>Pay Not Provided</p>
            )}
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 mt-2">
          <div>
            <p className="font-bold">Job Type</p>
            {highlightedJob.partTime ? <p>Part Time</p> : <p>Full Time</p>}
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 mt-2">
          <div>
            <p className="font-bold">Contract Type</p>
            <p>{highlightedJob.contractType}</p>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 mt-2">
          <div className="">
            <p className="font-bold">Total Applicants</p>
            <p>{highlightedJob.applicationCount}</p>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        {highlightedJob.jobUrl && (
          <Link
            href={highlightedJob.jobUrl}
            target="__blank"
            className="border p-2 "
          >
            Apply Through Reed.Uk
          </Link>
        )}
        {highlightedJob.externalUrl && (
          <Link
            href={highlightedJob.externalUrl}
            target="__blank"
            className="border p-2 mx-3"
          >
            Apply Through Company
          </Link>
        )}
        <Image
          src={"/unfilledbook.png"}
          height={35}
          width={35}
          alt="BookMark Job"
          className=" cursor-pointer transform transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div
        className="jobInfo-Container text-left"
        dangerouslySetInnerHTML={{ __html: sanitizedDescription }}
      />
    </div>
  );
}
