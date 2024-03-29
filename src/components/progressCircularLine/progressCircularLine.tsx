import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

interface PercentageProps {
    percentage: number;
}

const ProgressCircularLine = (props: PercentageProps) => {
    const { percentage } = props;

    return (
        <CircularProgressbar
            value={percentage}
            text={`${percentage}`}
            styles={buildStyles({
                rotation: 0.5,
                strokeLinecap: 'butt',
                textSize: '16px',
                pathTransitionDuration: 0.5,
                pathColor: `#69C620`,
                textColor: '#69C620',
                trailColor: 'rgba(105,198,32,0.21)',
                backgroundColor: 'transparent',
            })}
        />
    )
}
export default ProgressCircularLine;