import "./App.css";
import JobPostingCard from "./components/JobPostingCard";
import { jobPostings } from "./data/jobPostings";

function App() {
  return (
    <div className="careersPage">
      <div className="careersContainer">
        <header className="careersHero">
          <p className="careersEyebrow">Join Our Team</p>
          <h1>Careers at Wings Arena</h1>
          <p className="careersIntro">
            Explore current opportunities at Wings Arena. Click any posting
            below to view the full listing and apply directly through Indeed.
          </p>
        </header>

        <section className="jobListingsSection">
          <div className="sectionHeader">
            <h2>Open Positions</h2>
            <span className="jobCount">
              {jobPostings.length} Open Position{jobPostings.length !== 1 ? "s" : ""}
            </span>
          </div>

          <div className="jobListingsGrid">
            {jobPostings.map((job) => (
              <JobPostingCard key={job.id} job={job} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;