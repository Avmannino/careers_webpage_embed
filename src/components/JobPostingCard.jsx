import "./JobPostingCard.css";

function JobPostingCard({ job }) {
  const handleCardClick = () => {
    window.open(job.applyUrl, "_blank", "noopener,noreferrer");
  };

  const handleButtonClick = (event) => {
    event.stopPropagation();
    window.open(job.applyUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <article
      className="jobCard"
      onClick={handleCardClick}
      role="button"
      tabIndex={0}
      onKeyDown={(event) => {
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
          </div>
          <div className="jobQuickInfoItem">
            <span className="jobQuickInfoLabel">Job Type</span>
            <span>{job.jobType}</span>
          </div>
        </div>
      </div>

      <div className="jobCardBody">
        <section className="jobSection">
          <h4>Overview</h4>
          <p>{job.overview}</p>
        </section>

        <section className="jobSection">
          <h4>Core Duties</h4>
          <ul>
            {job.coreDuties.map((duty, index) => (
              <li key={index}>{duty}</li>
            ))}
          </ul>
        </section>

        <section className="jobSection">
          <h4>Requirements</h4>
          <ul>
            {job.requirements.map((requirement, index) => (
              <li key={index}>{requirement}</li>
            ))}
          </ul>
        </section>

        <section className="jobSection">
          <h4>What We Offer</h4>
          <ul>
            {job.whatWeOffer.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="jobSection">
          <h4>Benefits</h4>
          <ul>
            {job.benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </section>

        <section className="jobSection">
          <h4>About the Nutrition Hub Café at Wings Arena</h4>
          <p>{job.cafeDescription}</p>
        </section>

        <section className="jobSection">
          <h4>About Wings Arena</h4>
          <p>{job.aboutWingsArena}</p>
        </section>

        <section className="jobSection">
          <h4>We Value Diversity</h4>
          <p>{job.diversityStatement}</p>
        </section>
      </div>

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