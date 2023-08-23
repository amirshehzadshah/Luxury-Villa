import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function Alert({ open, handleClose }) {

    return (
        <div>
            <Dialog
                open={open}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title" sx={{ alignItems: 'center', fontWeight: 'bold', fontStyle: "italic", color: '#fe9e0d' }}>
                    {"LUXURY VILLAS.COM"}
                </DialogTitle>
                <DialogContent sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                    <DialogContentText id="alert-dialog-description">
                        Email ID submitted
                    </DialogContentText>
                    <div className="py-2">
                        <button className="booknow-button" onClick={handleClose}>Done</button>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}
