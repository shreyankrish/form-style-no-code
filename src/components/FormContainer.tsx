
import React from "react";

const FormContainer = () => {
  return (
    <div className="form-container w-full max-w-2xl bg-white rounded-lg shadow-md overflow-hidden mx-4">
      <div className="form-header bg-purple-600 p-4 border-b-8 border-purple-800">
        <h1 className="text-2xl font-semibold text-white">Information Form</h1>
        <p className="text-purple-100 text-sm mt-1">Please complete all fields below</p>
      </div>
      
      <form className="p-6 space-y-6">
        {/* Full Name */}
        <div className="form-group">
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            required
            className="form-input w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Enter your full name"
          />
        </div>
        
        {/* Contact Number */}
        <div className="form-group">
          <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700 mb-1">
            Contact Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="contactNumber"
            name="contactNumber"
            required
            className="form-input w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Enter your contact number"
          />
        </div>
        
        {/* Address */}
        <div className="form-group">
          <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
            Address <span className="text-red-500">*</span>
          </label>
          <textarea
            id="address"
            name="address"
            rows={3}
            required
            className="form-textarea w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Enter your address"
          ></textarea>
        </div>
        
        {/* Company Name */}
        <div className="form-group">
          <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
            Company Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            required
            className="form-input w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Enter your company name"
          />
        </div>
        
        {/* Email Address */}
        <div className="form-group">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="form-input w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Enter your email address"
          />
        </div>
        
        {/* Department */}
        <div className="form-group">
          <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-1">
            Department <span className="text-red-500">*</span>
          </label>
          <select
            id="department"
            name="department"
            required
            className="form-select w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white"
          >
            <option value="" disabled selected>Select your department</option>
            <option value="HR">HR</option>
            <option value="Sales">Sales</option>
            <option value="Development">Development</option>
            <option value="Marketing">Marketing</option>
            <option value="Others">Others</option>
          </select>
        </div>
        
        {/* Gender */}
        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Gender <span className="text-red-500">*</span>
          </label>
          <div className="space-y-2">
            <div className="flex items-center">
              <input
                type="radio"
                id="male"
                name="gender"
                value="male"
                required
                className="h-4 w-4 text-purple-600 focus:ring-purple-500"
              />
              <label htmlFor="male" className="ml-2 text-sm text-gray-700">Male</label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="female"
                name="gender"
                value="female"
                className="h-4 w-4 text-purple-600 focus:ring-purple-500"
              />
              <label htmlFor="female" className="ml-2 text-sm text-gray-700">Female</label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="prefer-not-to-say"
                name="gender"
                value="prefer-not-to-say"
                className="h-4 w-4 text-purple-600 focus:ring-purple-500"
              />
              <label htmlFor="prefer-not-to-say" className="ml-2 text-sm text-gray-700">Prefer not to say</label>
            </div>
          </div>
        </div>
        
        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-colors duration-300 font-medium"
          >
            Submit
          </button>
        </div>
      </form>
      
      <div className="bg-gray-50 p-4 text-center text-xs text-gray-500 border-t border-gray-200">
        This form is secure and your information will remain confidential
      </div>
    </div>
  );
};

export default FormContainer;
