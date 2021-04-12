import React from "react";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import CountrySelect from "../select/CountrySelect";
import { Spacer } from "../common/Spacer";
import { InputAdornment } from "@material-ui/core";
import firebase from "../../fire/firebase";

export default function Join() {
  const [open, setOpen] = React.useState(false);
  const [number, setNumber] = React.useState("");
  const [code, setCode] = React.useState("91");
  const handleClickOpen = () => {
    setCode("91");
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <a
        className="cc-btn"
        variant="outlined"
        color="primary"
        onClick={handleClickOpen}
      >
        Join now
      </a>
      <Dialog
        open={open}
        // onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <h2
          style={{
            fontWeight: "700",
            padding: "1rem",
            fontSize: "2rem",
            color: "#07122bc7",
          }}
          id="form-dialog-title"
        >
          Join now
        </h2>
        <DialogContent>
          <CountrySelect code={code} setCode={setCode} />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Phone Number"
            type="text"
            autoComplete="off"
            fullWidth
            variant="outlined"
            value={number}
            onChange={(e) => {
              const val = e.target.value;
              if (val && (val.length > 10 || !+val)) return;
              setNumber(val);
            }}
            style={{ margin: "2rem 0", width: "25rem" }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <span>+{code}</span>
                </InputAdornment>
              ),
            }}
            inputProps={{
              style: { padding: "1rem 0" },
            }}
          />
        </DialogContent>
        <Spacer />
        <DialogActions>
          <a
            style={{
              padding: "1rem",
              fontSize: "1rem",
              textDecoration: "none",
              cursor: "pointer",
            }}
            onClick={handleClose}
            color="primary"
          >
            Cancel
          </a>
          <a
            style={{
              padding: "1rem",
              fontSize: "1rem",
              textDecoration: "none",
              cursor: "pointer",
            }}
            // onClick={handleClose}
            color="primary"
          >
            Login
          </a>
        </DialogActions>
      </Dialog>
    </div>
  );
}
