import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "../styles/Contact.css";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [clickedField, setClickedField] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");


  const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  const handleValidation = (e) => {
    setClickedField(e.target.id);
  };

  const handleMouseLeave = (e) => {
    if (e.target.id === "name" && clickedField === "name") {
      name === "" ? setErrorMsg("Please enter your full name") : null;
    } else if (e.target.id === "email" && clickedField === "email") {
      if (email === "") {
        setErrorMsg("Please enter your email address");
      } else {
        if (e.target.value && e.target.value.match(isValidEmail)) {
          setErrorMsg("");
        } else {
          setErrorMsg("Please enter a valid email");
        }
      }
    } else if (clickedField === "message") {
      message === "" ? setErrorMsg("Please enter a message") : null;
    }
  };

  const handleUpdate = (e) => {
    if (e.target.id === "name" && clickedField === "name") {
      setName(e.target.value);
      setErrorMsg("");
    } else if (e.target.id === "email" && clickedField === "email") {
      setEmail(e.target.value);
      setErrorMsg("");
    } else if (clickedField === "message") {
      setMessage(e.target.value);
      setErrorMsg("");
    }
  };

  const handleSubmit = () => {
    if (name !== "" && email !== "" && message !== "") {
        if (email && email.match(isValidEmail)) {
            console.log("success")
            setSuccessMsg("Your message has been submitted")
        }
        else {
            setErrorMsg("Please enter a valid email")
        }
    } else {
        setErrorMsg("Please fill in required fields")
    }
  }

  return (
    <div className="contact-container">
    <div className="contact-wrapper flex flex-col">
      <h1>Contact Form</h1>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField required onMouseLeave={(e) => handleMouseLeave(e)} onClick={(e) => handleValidation(e)} onChange={(e) => handleUpdate(e)} id="name" label="Name" variant="outlined" value={name} />
          <TextField required onMouseLeave={(e) => handleMouseLeave(e)} onClick={(e) => handleValidation(e)} onChange={(e) => handleUpdate(e)} id="email" label="Email" variant="outlined" />
          <TextField required onMouseLeave={(e) => handleMouseLeave(e)}onClick={(e) => handleValidation(e)} onChange={(e) => handleUpdate(e)} id="message" label="Message" variant="outlined" multiline rows={4} />
        </div>
      </Box>
      <p className="error">{errorMsg}</p>
      <p className="success">{successMsg}</p>

      <Button variant="contained" onClick={(e) => handleSubmit(e)}>Submit</Button>
    </div>
    </div>
  );
};

export default ContactPage;
