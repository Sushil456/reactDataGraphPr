import React from 'react';

function JobList({ jobs }) {
  // Create empty arrays for different categories
  const results = [];
  const admitCards = [];
  const latestJobs = [];

  // Iterate over the jobs data and push into appropriate category arrays
  jobs.forEach((job) => {
    if (job.resultdate !== '') {
      results.push(job);
    }
    if (job.admitcardreleasedate !== '') {
      admitCards.push(job);
    }
    if (job.presentstatus === 'Active' && job.resultdate === '' && job.admitcardreleasedate === '') {
      latestJobs.push(job);
    }
  });

  // Sort the results array by date in descending order
  results.sort((a, b) => new Date(b.resultdate) - new Date(a.resultdate));

  const Card = ({ job }) => (
    <div className="card bg-light mb-3" style={{ width: '18rem' }}>
      <div className="card-body">
        <h5 className="card-title">{job.jobname}</h5>
        <p className="card-text">{job.eligibilitycriteria}</p>
        <a href={job.applylink} className="btn btn-primary">Apply Now</a>
      </div>
    </div>
  );

  return (
    <div className="table-responsive">
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Results</th>
            <th scope="col">Admit Cards</th>
            <th scope="col">Latest Jobs</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {results.length > 0 ? (
                <div className="card-deck">
                  {results.map((job) => (
                    <Card key={job.jobname} job={job} />
                  ))}
                </div>
              ) : (
                <p>No results declared yet.</p>
              )}
            </td>
            <td>
              {admitCards.length > 0 ? (
                <div className="card-deck">
                  {admitCards.map((job) => (
                    <Card key={job.jobname} job={job} />
                  ))}
                </div>
              ) : (
                <p>No admit cards released yet.</p>
              )}
            </td>
            <td>
              {latestJobs.length > 0 ? (
                <div className="card-deck">
                  {latestJobs.map((job) => (
                    <Card key={job.jobname} job={job} />
                  ))}
                </div>
              ) : (
                <p>No new jobs available.</p>
              )}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default JobList;
