import React, { useState } from 'react';

const AddPersonForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    middleName: '',
    nickname: '',
    email: '',
    phone: '',
    address: '',
    birthday: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Person Added:', formData);
  };

  return (
    <div className="flex">
      {/* Left Sidebar */}
      <div className="w-1/4 p-4 bg-gray-100">
        <h2 className="text-xl font-semibold">Select Fields</h2>
        <ul>
          <li>First Name</li>
          <li>Last Name</li>
          <li>Middle Name</li>
          <li>Nickname</li>
          <li>Email</li>
          <li>Phone</li>
          <li>Address</li>
          <li>Birthday</li>
        </ul>
      </div>

      {/* Form Section */}
      <div className="w-3/4 p-4">
        <h2 className="text-2xl font-semibold">Add Person</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="flex-1">
              <label className="block">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block">Middle Name</label>
              <input
                type="text"
                name="middleName"
                value={formData.middleName}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="flex-1">
              <label className="block">Nickname</label>
              <input
                type="text"
                name="nickname"
                value={formData.nickname}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="flex-1">
              <label className="block">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block">Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="flex-1">
              <label className="block">Birthday</label>
              <input
                type="date"
                name="birthday"
                value={formData.birthday}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>
          </div>

          <div className="flex justify-end gap-4">
            <button
              type="button"
              className="px-4 py-2 bg-gray-300 rounded"
              onClick={() => setFormData({ firstName: '', lastName: '', middleName: '', nickname: '', email: '', phone: '', address: '', birthday: '' })}
            >
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
              Add Person
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPersonForm;
