import styles from './LoadingComponent.module.scss';

const LoadingComponent = () => {

    return (
        <div className={styles.loadingComp}>
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )

}

export default LoadingComponent;