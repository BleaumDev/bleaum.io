'use client';

import { useState } from 'react';

export default function DemoPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    companyName: '',
    state: '',
    numberOfLocations: '',
    howHear: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Demo request sent successfully!');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phoneNumber: '',
          companyName: '',
          state: '',
          numberOfLocations: '',
          howHear: '',
        });
      } else {
        alert('Failed to send demo request.');
      }
    } catch (error) {
      alert('An error occurred while sending the demo request.');
    }
  };

  const states = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
  ];

  return (
    <div className="flex flex-col items-center bg-background py-6 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-2xl text-center pt-6 mb-6">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white drop-shadow-lg mb-2">
          Is Your Retail Shop Ready for a Serious Upgrade?
        </h2>
        <p className="text-muted-foreground text-base sm:text-lg px-4">
          Book a walkthrough of the system that&apos;s setting the new standard in cannabis retail.
        </p>
      </div>

      <div className="bg-card p-6 sm:p-8 rounded-xl shadow-lg w-full max-w-2xl mt-6">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 w-full">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-foreground">First Name</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="mt-1 block w-full border border-border rounded-md shadow-sm p-2 bg-background text-foreground"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-foreground">Last Name</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="mt-1 block w-full border border-border rounded-md shadow-sm p-2 bg-background text-foreground"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full border border-border rounded-md shadow-sm p-2 bg-background text-foreground"
            />
          </div>
          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-foreground">Phone Number</label>
            <input
              type="tel"
              name="phoneNumber"
              id="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="mt-1 block w-full border border-border rounded-md shadow-sm p-2 bg-background text-foreground"
            />
          </div>
          <div>
            <label htmlFor="companyName" className="block text-sm font-medium text-foreground">Company Name</label>
            <input
              type="text"
              name="companyName"
              id="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="mt-1 block w-full border border-border rounded-md shadow-sm p-2 bg-background text-foreground"
            />
          </div>
          <div>
            <label htmlFor="state" className="block text-sm font-medium text-foreground">State</label>
            <select
              name="state"
              id="state"
              value={formData.state}
              onChange={handleChange}
              className="mt-1 block w-full border border-border rounded-md shadow-sm p-2 bg-background text-foreground"
            >
              <option value="">Select a state</option>
              {states.map((state) => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="numberOfLocations" className="block text-sm font-medium text-foreground">Number of Locations</label>
            <input
              type="number"
              name="numberOfLocations"
              id="numberOfLocations"
              value={formData.numberOfLocations}
              onChange={handleChange}
              className="mt-1 block w-full border border-border rounded-md shadow-sm p-2 bg-background text-foreground"
            />
          </div>
          <div>
            <label htmlFor="howHear" className="block text-sm font-medium text-foreground">How did you hear about Bleaum?</label>
            <input
              type="text"
              name="howHear"
              id="howHear"
              value={formData.howHear}
              onChange={handleChange}
              className="mt-1 block w-full border border-border rounded-md shadow-sm p-2 bg-background text-foreground"
            />
          </div>
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-primary-foreground bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 