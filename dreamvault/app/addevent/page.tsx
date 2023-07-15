"use client"
import React, { useState } from "react";
import {
  useContractEvent,
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
  useAccount,
} from "wagmi";
import {CONTRACT_ADDRESS,abi}from './../utils/contract'
interface EventInput {
  companyName: string;
  description: string;
  logos: FileList | null;
  images: FileList | null;
  enrollmentAmount: number;
}

const EventForm: React.FC = () => {
  const [eventInput, setEventInput] = useState<EventInput>({
    companyName: "",
    description: "",
    logos: null,
    images: null,
    enrollmentAmount: 0,
  });

  const [submissionStatus, setSubmissionStatus] = useState<
    "none" | "success" | "error"
  >("none");

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setEventInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const handleLogoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setEventInput((prevInput) => ({
        ...prevInput,
        logos: event.target.files,
      }));
    }
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setEventInput((prevInput) => ({
        ...prevInput,
        images: event.target.files,
      }));
    }
  };

  const handleEnrollmentAmountChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const amount = parseFloat(event.target.value);
    setEventInput((prevInput) => ({
      ...prevInput,
      enrollmentAmount: isNaN(amount) ? 0 : amount,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Simulating form submission
    setTimeout(() => {
      // Check form validation or any other conditions
      const isFormValid = eventInput.companyName !== "" && eventInput.description !== "";

      if (isFormValid) {
        setSubmissionStatus("success");
        // Perform further actions (e.g., API request, database update)
        console.log("Form submitted successfully");
      } else {
        setSubmissionStatus("error");
      }
    }, 1000);
  };

  const renderMessage = () => {
    if (submissionStatus === "success") {
      return (
        <div className="bg-green-200 text-green-800 py-2 px-4 mb-4">
          Your Event Has been Added To DreamVault!
        </div>
      );
    } else if (submissionStatus === "error") {
      return (
        <div className="bg-red-200 text-red-800 py-2 px-4 mb-4">
          Error submitting form. Please check your inputs.
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-slate-200">
      <form onSubmit={handleSubmit} className="bg-white rounded-md p-10 shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Add Your Events to DreamVault
        </h2>

        {renderMessage()}

        <div className="mb-4">
          <label htmlFor="companyName">Company Name:</label>
          <input
            className="w-full p-2 border rounded"
            type="text"
            id="companyName"
            name="companyName"
            value={eventInput.companyName}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="description">Description:</label>
          <textarea
            className="w-full p-2 border rounded"
            id="description"
            name="description"
            value={eventInput.description}
            onChange={handleInputChange}
          ></textarea>
        </div>

        <div className="mb-4">
          <label htmlFor="logos">Company Logo:</label>
          <input
            className="p-2 border rounded"
            type="file"
            id="logos"
            name="logos"
            accept="image/*"
            onChange={handleLogoChange}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="images">Project Images:</label>
          <input
            className="p-2 border rounded"
            type="file"
            id="images"
            name="images"
            accept="image/*"
            multiple
            onChange={handleImageChange}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="enrollmentAmount">Enrollment Amount:</label>
          <input
            className="p-2 border rounded"
            type="number"
            id="enrollmentAmount"
            name="enrollmentAmount"
            value={eventInput.enrollmentAmount}
            onChange={handleEnrollmentAmountChange}
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="px-4 py-2 bg-black text-white rounded-md"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default EventForm;
