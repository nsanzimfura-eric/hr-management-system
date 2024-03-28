import { dashboardRoutes } from "../../../../utils/constants";

export interface SideNavBarLink {
  id: number;
  title: string;
  icon: string;
}

export const navbarLinks = [
  { id: 1, title: dashboardRoutes.home, icon: "/svgs/home.svg" },
  { id: 2, title: dashboardRoutes.jobs, icon: "/svgs/jobs.svg" },
  { id: 3, title: dashboardRoutes.candidates, icon: "/svgs/candidates.svg" },
  { id: 4, title: dashboardRoutes.reports, icon: "/svgs/reports.svg" },
  { id: 5, title: dashboardRoutes.calender, icon: "/svgs/calender.svg" },
];
