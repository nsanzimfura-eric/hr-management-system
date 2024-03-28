import { useState } from 'react';
import ButtonIcon from '../ButtonIcon/ButtonIcon';
import MeetingNotification from '../meetingNotification/meetingNotification';
import { MeetingsInterface, meetingsData } from './meetingsData';
import styles from './upComingMeetings.module.scss';
import { Typography } from "@mui/material";

const UpComingMeetings = () => {
    const [clickedMeetingMeeting, setClickedMeetingMeeting] = useState<null | number>(null);

    const handleClickAddMeeting = () => {
        console.log('Upcoming Meetings');
    }

    const handleClickedMeeting = (id: number) => {
        setClickedMeetingMeeting(id);
    };

    return (
        <div className={styles.upComingMeetings}>
            <div className='d-flex titleBox'>
                <Typography className='title' variant='subtitle1'>Upcoming Meetings</Typography>
                <ButtonIcon url="/svgs/addBlue.svg" onClick={handleClickAddMeeting} />
            </div>
            <div className='meetingsWrapper'>
                {meetingsData.map((data: MeetingsInterface, index: number) => {
                    return (
                        <div key={index} className="meetingWrapper">
                            <Typography className='time'>{data.time}</Typography>
                            <div className='meetingActivities'>
                                {data.activity?.map((meeting, idx: number) => {
                                    return <MeetingNotification key={idx} meeting={meeting} onClick={handleClickedMeeting} index={idx} clickedIndex={clickedMeetingMeeting} />
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default UpComingMeetings;