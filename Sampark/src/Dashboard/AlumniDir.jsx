import React, { useState } from 'react';

const alumniData = [
  { name: 'John Doe', year: '2020', branch: 'Computer Science', company: 'Tech Corp' },
  { name: 'Jane Smith', year: '2019', branch: 'Electrical Engineering', company: 'Innovate Ltd' },
  { name: 'Alice Johnson', year: '2018', branch: 'Mechanical Engineering', company: 'AutoWorks' },
  { name: 'Bob Brown', year: '2021', branch: 'Civil Engineering', company: 'BuildRight' },
  { name: 'Carol White', year: '2020', branch: 'Chemical Engineering', company: 'ChemTech' },
  { name: 'David Black', year: '2017', branch: 'Computer Science', company: 'CodeFactory' },
  { name: 'Emily Green', year: '2019', branch: 'Information Technology', company: 'InfoNet' },
  { name: 'Frank Moore', year: '2021', branch: 'Electrical Engineering', company: 'PowerGrid' },
  { name: 'Grace Taylor', year: '2022', branch: 'Mechanical Engineering', company: 'EngineWorks' },
  { name: 'Henry Wilson', year: '2018', branch: 'Civil Engineering', company: 'ConstructCo' },
];

const AlumniDirectory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    year: '',
    branch: '',
    company: '',
  });
  const [selectedAlumni, setSelectedAlumni] = useState(null);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const handleAlumniClick = (alumni) => {
    setSelectedAlumni(alumni);
  };

  const handleCloseModal = () => {
    setSelectedAlumni(null);
  };

  const filteredAlumni = alumniData.filter(alumni =>
    (searchTerm === '' || 
      alumni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      alumni.year.toLowerCase().includes(searchTerm.toLowerCase()) ||
      alumni.branch.toLowerCase().includes(searchTerm.toLowerCase()) ||
      alumni.company.toLowerCase().includes(searchTerm.toLowerCase())
    ) &&
    (filters.year === '' || alumni.year === filters.year) &&
    (filters.branch === '' || alumni.branch === filters.branch) &&
    (filters.company === '' || alumni.company === filters.company)
  );

  const uniqueYears = [...new Set(alumniData.map(alumni => alumni.year))];
  const uniqueBranches = [...new Set(alumniData.map(alumni => alumni.branch))];
  const uniqueCompanies = [...new Set(alumniData.map(alumni => alumni.company))];

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 ml-60 ">Alumni Directory</h1>
      
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Filters</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Year</label>
            <select
              name="year"
              value={filters.year}
              onChange={handleFilterChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">All Years</option>
              {uniqueYears.map((year) => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Branch</label>
            <select
              name="branch"
              value={filters.branch}
              onChange={handleFilterChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">All Branches</option>
              {uniqueBranches.map((branch) => (
                <option key={branch} value={branch}>{branch}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Company</label>
            <select
              name="company"
              value={filters.company}
              onChange={handleFilterChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">All Companies</option>
              {uniqueCompanies.map((company) => (
                <option key={company} value={company}>{company}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Year</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Branch</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredAlumni.length > 0 ? (
              filteredAlumni.map((alumni, index) => (
                <tr key={index} onClick={() => handleAlumniClick(alumni)} className="cursor-pointer hover:bg-gray-100">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{alumni.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{alumni.year}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{alumni.branch}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{alumni.company}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="px-6 py-4 text-center text-sm text-gray-500">No results found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {selectedAlumni && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-gray-500 opacity-75" onClick={handleCloseModal}></div>
          <div className="bg-white p-6 rounded-lg shadow-lg z-10 relative">
            <button onClick={handleCloseModal} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            <h2 className="text-2xl font-bold mb-4">{selectedAlumni.name}</h2>
            <p><strong>Year:</strong> {selectedAlumni.year}</p>
            <p><strong>Branch:</strong> {selectedAlumni.branch}</p>
            <p><strong>Company:</strong> {selectedAlumni.company}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AlumniDirectory;
