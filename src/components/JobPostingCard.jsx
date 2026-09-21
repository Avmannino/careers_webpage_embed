import { useState } from "react";
import "./JobPostingCard.css";

function JobPostingCard({ job }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleCardClick = () => {
    if (job.applyUrl) {
      window.open(job.applyUrl, "_blank", "noopener,noreferrer");
    }
  };

  const handleButtonClick = (event) => {
    event.stopPropagation();
    handleCardClick();
  };

  const handleToggleClick = (event) => {
    event.stopPropagation();
    setIsExpanded((prev) => !prev);
  };

  return (
    <article
      className="jobCard"
      onClick={handleCardClick}
      role="button"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.target !== event.currentTarget) return;
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          handleCardClick();
        }
      }}
      aria-label={`Open job posting for ${job.title}`}
    >
      <div className="jobCardTop">
        <div className="jobMetaRow">
          <span className="jobBadge">Now Hiring</span>
          <span className="jobDate">Posted {job.datePosted}</span>
        </div>

        <h3 className="jobTitle">{job.title}</h3>

        <div className="jobQuickInfo">
          <div className="jobQuickInfoItem">
            <span className="jobQuickInfoLabel">Company</span>
            <span>{job.company}</span>
          </div>
          <div className="jobQuickInfoItem">
            <span className="jobQuickInfoLabel">Location</span>
            <span>{job.location}</span>
          </div>
          <div className="jobQuickInfoItem">
            <span className="jobQuickInfoLabel">Pay</span>
            <span>{job.payRange}</span>
            {job.payDetails?.map((line, index) => (
              <span key={index}>{line}</span>
            ))}
          </div>
          <div className="jobQuickInfoItem">
            <span className="jobQuickInfoLabel">Job Type</span>
            <span>{job.jobType}</span>
            {job.shifts?.map((shift, index) => (
              <span key={index}>{shift}</span>
            ))}
          </div>
        </div>

        <p className="jobOverview">{job.overview}</p>

        <button
          type="button"
          className="jobToggle"
          onClick={handleToggleClick}
          aria-expanded={isExpanded}
        >
          {isExpanded ? "Hide full posting" : "View full posting"}
          <span className={`jobToggleArrow${isExpanded ? " isOpen" : ""}`} aria-hidden="true">
            ▾
          </span>
        </button>
      </div>

      {isExpanded && (
        <div className="jobCardBody">
          {job.sections.map((section) => (
            <section className="jobSection" key={section.title}>
              <h4>{section.title}</h4>
              {section.paragraphs?.map((text, index) => (
                <p key={index}>{text}</p>
              ))}
              {section.items && (
                <ul>
                  {section.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              )}
              {section.after?.map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </section>
          ))}
        </div>
      )}

      <div className="jobCardFooter">
        <div className="jobFooterLeft">
          <span className="applyHint">Click this posting to apply on Indeed</span>
          <span className="workLocation">{job.workLocation}</span>
        </div>

        <button className="applyButton" onClick={handleButtonClick}>
          View & Apply
        </button>
      </div>
    </article>
  );
}

export default JobPostingCard;