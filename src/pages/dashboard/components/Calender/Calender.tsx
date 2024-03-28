

import styles from "./Calender.module.scss";
const Calender = () => {

  return (
    <div className={styles.calender}>
      {/* Demo calender */}
      <iframe className="calenderDemo" src="https://calendly.com/nsanzimfura/interview" title="Book one a meeting slot with me">
      </iframe>
    </div>
  )
}

export default Calender