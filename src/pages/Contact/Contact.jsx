import React from "react";
import { motion } from "framer-motion";
import TextField from "@mui/material/TextField";
import { Input } from "@mui/material";
import { GrAttachment } from "react-icons/gr";
import "./contact.css";

const Contact = () => {
  return (
    <motion.div
      className="contactPage mt-36 mx-20 "
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex md:space-x-7 lg:mt-10 lg:flex-row flex-col">
        <div className="lg:w-1/2 mb-10">
          <h1 className="text-6xl font-extrabold">
            Tell us about your Project
          </h1>
          <h4 className="text-xl md:visible invisible mt-5 lg:pr-6">
            We’ll contact you within a couple of hours to schedule a meeting to
            discuss your goals.
          </h4>
        </div>
        <div className="lg:w-1/2 md:grid md:grid-cols-2 md:gap-8 flex flex-col">
          <TextField
            id="standard-basic"
            label="Your full name"
            required
            variant="standard"
          />
          <TextField id="standard-basic" label="Company" variant="standard" />
          <TextField
            id="standard-basic"
            label="Your email address"
            required
            variant="standard"
          />
          <TextField
            id="standard-basic"
            label="Your phone number"
            variant="standard"
          />
          <label
            htmlFor="upload"
            name="upload"
            className="col-span-2 flex justify-between items-center pb-2 opacity-75 mt-5"
            style={{ borderBottom: "1px solid gray" }}
          >
            <p>About a project</p>
            <GrAttachment />
          </label>
          <h4 className="opacity-50 my-3">
            By sending this form I confirm that I have read and accept the
            Privacy Policy
          </h4>
          <button
            className="bg-blue-600 px-8 rounded-full w-max mx-auto h-14"
            style={{ color: "white" }}
          >
            Send message
          </button>
          <input
            type="file"
            className="invisible"
            id="upload"
            placeholder="Your full name"
            name="file"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
