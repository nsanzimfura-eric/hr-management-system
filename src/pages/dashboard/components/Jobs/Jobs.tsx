

import styles from "./Jobs.module.scss";
import Table from 'react-bootstrap/Table';
import { JobInterface, demoJobsData } from "./jobsDataDemo";

const Jobs = () => {
  //createDemo Table titles and removes time from  titles
  const headersTitles = ["Positions Left", "Applications", "Interviewed", "Rejected", "Feedback Pending", "Offered"];


  return (
    <div className={styles.jobs}>
      <Table responsive className="tablesJobs">
        <thead>
          <tr>
            <th>{""}</th>
            <th>{""}</th>
            {headersTitles.map((title, index) => (
              <th key={index}>{title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {demoJobsData.map((job: JobInterface, rowIndex) => {
            const valuesArrayWithNoTime_Title: (string | number)[] = Object.entries(job)
              .filter(([key]) => key !== 'title' && key !== 'time')
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              .map(([_, value]: [string, string | number]) => value);

            return (
              <tr key={rowIndex}>
                <td><div className="icon"><img src="/svgs/jobs.svg" alt="Icon" /></div></td>
                <td className="titleBox">
                  <span>{job.title}</span>
                  <small>{job.time}</small>
                </td>
                {valuesArrayWithNoTime_Title.map((item, indexData) => {
                  return (
                    <td key={indexData}>{item}</td>
                  )
                })}
              </tr>
            )
          }
          )}
        </tbody>
      </Table>
    </div>
  )
}

export default Jobs