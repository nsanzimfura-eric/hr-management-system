
import { MeetingActivityInterface } from "../upComingMeetings/meetingsData";
import styles from "./meetingNotification.module.scss";

interface IconButtonInterface {
    onClick: (id: number) => void;
    meeting: MeetingActivityInterface;
    index: number;
    clickedIndex: number | null;
}
const MeetingNotification = (props: IconButtonInterface) => {
    const { meeting, onClick, index, clickedIndex } = props;


    return (
        <div className={styles.meetingNotification} onClick={() => onClick(index)}>
            <div className={(clickedIndex === index || meeting.read) ? "notificationInfo readSuccess" : "notificationInfo"}>
                <span>{meeting.hours}</span>
                <div dangerouslySetInnerHTML={{ __html: meeting.details }} className="details" />
                <div className="lineRight"></div>
            </div>
        </div>
    )
}

export default MeetingNotification