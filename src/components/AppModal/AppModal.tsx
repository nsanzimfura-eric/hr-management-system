import React, { forwardRef } from "react";
import { Dialog, DialogContent, Slide, SlideProps } from "@mui/material";

const Transition = forwardRef(function Transition(props: SlideProps, ref: React.Ref<unknown>) {
    return <Slide direction="up" ref={ref} {...props} />;
});

interface AppModalProps {
    open: boolean;
    handleClose: () => void;
    children: React.ReactNode
}

const AppModal = (props: AppModalProps) => {
    const { open, handleClose, children } = props;
    return (
        <Dialog open={open} TransitionComponent={Transition} keepMounted onClose={handleClose} aria-describedby="alert-dialog-slide-description" about="generalDialog">
            <DialogContent className="popUp_container">
                <div id="alert-dialog-slide-description">
                    {children}
                </div>
            </DialogContent>
        </Dialog>
    );
}

export default AppModal;