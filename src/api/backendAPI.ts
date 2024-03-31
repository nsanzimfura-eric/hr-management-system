const BaseUrl = import.meta.env.VITE_API_URL;

export const backendAPI = {
  login: `${BaseUrl}/auth/login`,
  signup: `${BaseUrl}/auth/signup`,
  createJob: `${BaseUrl}/jobs/createJob`,
  getAllJobs: `${BaseUrl}/jobs/listOfJobs`,
  deleteJob: (jobId: string) => `${BaseUrl}/jobs/delete/${jobId}`,
  applyToJob: (jobId: string) => `${BaseUrl}/candidates/apply/${jobId}`,
};
