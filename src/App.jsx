import "./App.css";
import JobPostingCard from "./components/JobPostingCard";
import { jobPostings } from "./data/jobPostings";

function App() {
  const hasOpenings = jobPostings.length > 0;

  return (
    <div className="careersPage">
      <div className="careersContainer">
        <header className="careersHero">
          <p className="careersEyebrow">Join Our Team</p>
          <h1>Careers at Wings Arena</h1>
          {hasOpenings && (
            <p className="careersIntro">
              Explore current opportunities at Wings Arena. Expand a posting
              to view the full listing, then apply directly through Indeed.
            </p>
          )}
        </header>

        <section className="jobListingsSection">
          <div className="sectionHeader">
            <h2>Open Positions</h2>
            {hasOpenings && (
              <span className="jobCount">
                {jobPostings.length} Open Position{jobPostings.length !== 1 ? "s" : ""}
              </span>
            )}
          </div>

          {hasOpenings ? (
            <div className="jobListingsGrid">
              {jobPostings.map((job) => (
                <JobPostingCard key={job.id} job={job} />
              ))}
            </div>
          ) : (
            <div className="noOpenings">
              <h3>Check Back Soon!</h3>
              <p>
                We don&apos;t have any open positions right now. Check back
                soon to see what&apos;s available.
              </p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

export default App;