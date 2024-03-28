

import styles from "./Jobs.module.scss";
import Table from 'react-bootstrap/Table';
import { demoJobsData } from "./jobsDataDemo";

const Jobs = () => {
  //createDemo Table titles and removes time from  titles
  const headersTitles = Object.keys(demoJobsData[0]).filter(title => title !== 'time');

  return (
    <div className={styles.jobs}>
      <Table responsive id="tablesJobs">
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
          {demoJobsData.map((job, rowIndex) => (
            <tr key={rowIndex}>
              <td><div className="icon"><img src="/svgs/jobs.svg" alt="Icon" /></div></td>
              {headersTitles.map((tableTitle, index) => (
                <td key={index}>
                  <span>{job[tableTitle]}</span>
                  {/* // only show time under job title */}
                  {tableTitle === "title" && <small>{job.time}</small>}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default Jobs