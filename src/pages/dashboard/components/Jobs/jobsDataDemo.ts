export interface JobInterface {
  title: string;
  time?: string;
  positions: number;
  applications: number;
  interviewed: number;
  rejected: number;
  feedbacks: number;
  offered: number;
}

export const demoJobsData = [
  {
    title: "Senior Data Analyst",
    time: "100 days ago",
    positions: 3,
    applications: 123,
    interviewed: 40,
    rejected: 33,
    feedbacks: 7,
    offered: 2,
  },
  {
    title: "Junior Data Analyst",
    time: "78 days ago",
    positions: 7,
    applications: 567,
    interviewed: 22,
    rejected: 18,
    feedbacks: 2,
    offered: 4,
  },
  {
    title: "Product Designer",
    time: "58 days ago",
    positions: 2,
    applications: 201,
    interviewed: 32,
    rejected: 10,
    feedbacks: 14,
    offered: 0,
  },
  {
    title: "Java Developer",
    time: "46 days ago",
    positions: 2,
    applications: 231,
    interviewed: 23,
    rejected: 10,
    feedbacks: 13,
    offered: 3,
  },
  {
    title: "Product Manager",
    time: "13 days ago",
    positions: 2,
    applications: 67,
    interviewed: 41,
    rejected: 22,
    feedbacks: 19,
    offered: 1,
  },
];
