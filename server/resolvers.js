const db = require("./db");

const Query = {
  jobs: () => db.jobs.list(),
};

const Job = {
  company: ({ companyId }) => db.companies.get(companyId),
};

module.exports = {
  Query,
  Job,
};