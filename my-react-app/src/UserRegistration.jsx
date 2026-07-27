import React, { useState } from 'react';

// Hardcoded department and job position data for the dynamic dropdowns
const departmentData = {
  "Engineering": ["Frontend Developer", "Backend Developer", "DevOps Engineer", "QA Tester"],
  "Marketing": ["Content Writer", "SEO Specialist", "Social Media Manager"],
  "Human Resources": ["HR Manager", "Recruiter", "Payroll Specialist"]
};

const initialFormState = {
  username: '',
  firstname: '',
  lastname: '',
  gender: '',
  hobbies: [],
  department: '',
  jobPosition: ''
};

export default function UserRegistration() {
  const [formData, setFormData] = useState(initialFormState);
  const [submittedData, setSubmittedData] = useState(null);

  // Handle standard text and radio inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle checkbox array for hobbies
  const handleHobbyChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      if (checked) {
        return { ...prev, hobbies: [...prev.hobbies, value] };
      } else {
        return { ...prev, hobbies: prev.hobbies.filter((hobby) => hobby !== value) };
      }
    });
  };

  // Handle department change specifically to reset the job position
  const handleDepartmentChange = (e) => {
    const { value } = e.target;
    setFormData((prev) => ({
      ...prev,
      department: value,
      jobPosition: '' // Reset job position when department changes
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  // Handle form reset
  const handleReset = () => {
    setFormData(initialFormState);
    setSubmittedData(null);
  };

  return (
    <div style={{ maxWidth: '800px', margin: '20px auto', fontFamily: 'sans-serif' }}>
      <div style={{ border: '1px solid #ccc', borderRadius: '4px' }}>
        <h2 style={{ padding: '10px 15px', borderBottom: '1px solid #ccc', margin: 0, color: '#4a5568' }}>
          User Registration
        </h2>
        
        <form onSubmit={handleSubmit} style={{ padding: '20px' }}>
          {/* Username */}
          <div style={styles.formGroup}>
            <label style={styles.label}>Username</label>
            <input type="text" name="username" value={formData.username} onChange={handleChange} style={styles.input} />
          </div>

          {/* Firstname */}
          <div style={styles.formGroup}>
            <label style={styles.label}>Firstname</label>
            <input type="text" name="firstname" value={formData.firstname} onChange={handleChange} style={styles.input} />
          </div>

          {/* Lastname */}
          <div style={styles.formGroup}>
            <label style={styles.label}>Lastname</label>
            <input type="text" name="lastname" value={formData.lastname} onChange={handleChange} style={styles.input} />
          </div>

          {/* Gender */}
          <div style={styles.formGroup}>
            <label style={styles.label}>Gender</label>
            <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
              <label><input type="radio" name="gender" value="Male" checked={formData.gender === 'Male'} onChange={handleChange} /> Male</label>
              <label><input type="radio" name="gender" value="Female" checked={formData.gender === 'Female'} onChange={handleChange} /> Female</label>
              <label><input type="radio" name="gender" value="Others" checked={formData.gender === 'Others'} onChange={handleChange} /> Others</label>
            </div>
          </div>

          {/* Hobbies */}
          <div style={styles.formGroup}>
            <label style={styles.label}>Hobbies</label>
            <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
              <label><input type="checkbox" value="Music" checked={formData.hobbies.includes('Music')} onChange={handleHobbyChange} /> Music</label>
              <label><input type="checkbox" value="Movies" checked={formData.hobbies.includes('Movies')} onChange={handleHobbyChange} /> Movies</label>
              <label><input type="checkbox" value="Plastic Model" checked={formData.hobbies.includes('Plastic Model')} onChange={handleHobbyChange} /> Plastic Model</label>
            </div>
          </div>

          {/* Department */}
          <div style={styles.formGroup}>
            <label style={styles.label}>Department</label>
            <select name="department" value={formData.department} onChange={handleDepartmentChange} style={styles.select}>
              <option value="">-</option>
              {Object.keys(departmentData).map((dept) => (
                <option key={dept} value={dept}>{dept}</option>
              ))}
            </select>
          </div>

          {/* Job Position */}
          <div style={styles.formGroup}>
            <label style={styles.label}>Job Position</label>
            <select name="jobPosition" value={formData.jobPosition} onChange={handleChange} style={styles.select} disabled={!formData.department}>
              <option value="">-</option>
              {formData.department && departmentData[formData.department].map((job) => (
                <option key={job} value={job}>{job}</option>
              ))}
            </select>
          </div>

          {/* Buttons */}
          <div style={{ borderTop: '1px solid #ccc', marginTop: '20px', paddingTop: '15px', display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
            <button type="button" onClick={handleReset} style={styles.resetButton}>Reset</button>
            <button type="submit" style={styles.submitButton}>Submit</button>
          </div>
        </form>
      </div>

      {/* Display Submitted Data */}
      {submittedData && (
        <div style={{ marginTop: '20px', padding: '20px', border: '1px solid #48bb78', borderRadius: '4px', backgroundColor: '#f0fff4' }}>
          <h3 style={{ marginTop: 0, color: '#2f855a' }}>Submitted Data:</h3>
          <p><strong>Username:</strong> {submittedData.username || '-'}</p>
          <p><strong>Firstname:</strong> {submittedData.firstname || '-'}</p>
          <p><strong>Lastname:</strong> {submittedData.lastname || '-'}</p>
          <p><strong>Gender:</strong> {submittedData.gender || '-'}</p>
          <p><strong>Hobbies:</strong> {submittedData.hobbies.length > 0 ? submittedData.hobbies.join(', ') : '-'}</p>
          <p><strong>Department:</strong> {submittedData.department || '-'}</p>
          <p><strong>Job Position:</strong> {submittedData.jobPosition || '-'}</p>
        </div>
      )}
    </div>
  );
}

// Simple inline styles to arrange the layout to loosely match the provided image
const styles = {
  formGroup: {
    display: 'flex',
    marginBottom: '15px',
    alignItems: 'center'
  },
  label: {
    width: '150px',
    color: '#718096',
    fontWeight: '500'
  },
  input: {
    padding: '4px 8px',
    border: '1px solid #a0aec0',
    width: '200px'
  },
  select: {
    padding: '4px 8px',
    border: '1px solid #a0aec0',
    width: '150px'
  },
  resetButton: {
    padding: '8px 20px',
    border: '1px solid #a0aec0',
    backgroundColor: '#e2e8f0',
    color: '#4a5568',
    cursor: 'pointer',
    borderRadius: '4px'
  },
  submitButton: {
    padding: '8px 20px',
    border: 'none',
    backgroundColor: '#0000ff', // Standard blue from the image
    color: 'white',
    cursor: 'pointer',
    borderRadius: '4px'
  }
};