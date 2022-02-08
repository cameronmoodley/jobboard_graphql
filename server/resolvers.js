const db = require("./db");

const Query = {
  company: (root, args) => db.companies.get(args.id),
  // args will contain the single job inside it.
  // root is the parent value
  job: (root, args) => {
    console.log("root", root);
    console.log("args", args);
    return db.jobs.get(args.id);
  },
  jobs: () => db.jobs.list(),
};

const Job = {
  // company: (job) => db.companies.get(job.companyId),
  // job is the parent value
  // Gets the company for a specific job
  company: ({ companyId }) => db.companies.get(companyId),
};

// Gets each job for the specific company
// One to many relationship
const Company = {
  jobs: (company) =>
    db.jobs.list().filter((job) => job.companyId === company.id),
};

module.exports = {
  Query,
  Job,
  Company,
};
