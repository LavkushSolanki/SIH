import React, { useState } from 'react';

// Example data for top achievers
const initialAchievers = [
  { id: 1, name: 'Alice Johnson', achievement: 'CEO of Tech Innovations', field: 'Leadership', year: '2020' },
  { id: 2, name: 'Bob Lee', achievement: 'Research Excellence Award', field: 'Research', year: '2021' },
  { id: 3, name: 'Carol Davis', achievement: 'Placed in Google', field: 'Placement', year: '2019' },
  // Add more achievers data as needed
];

const TopAchievers = () => {
  const [achievers, setAchievers] = useState(initialAchievers);
  const [isEditing, setIsEditing] = useState(false);
  const [currentAchiever, setCurrentAchiever] = useState(null);
  const [form, setForm] = useState({ name: '', achievement: '', field: '', year: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleAddOrUpdate = () => {
    if (isEditing) {
      setAchievers(achievers.map(achiever =>
        achiever.id === currentAchiever.id ? { ...achiever, ...form } : achiever
      ));
      setIsEditing(false);
    } else {
      const newAchiever = { ...form, id: Date.now() };
      setAchievers([...achievers, newAchiever]);
    }
    setForm({ name: '', achievement: '', field: '', year: '' });
  };

  const handleEdit = (achiever) => {
    setCurrentAchiever(achiever);
    setForm({ name: achiever.name, achievement: achiever.achievement, field: achiever.field, year: achiever.year });
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    setAchievers(achievers.filter(achiever => achiever.id !== id));
  };

  const handleCancel = () => {
    setForm({ name: '', achievement: '', field: '', year: '' });
    setIsEditing(false);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Top Achievers</h1>

      {/* Add/Edit Form */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">{isEditing ? 'Edit Achiever' : 'Add Achiever'}</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Achievement</label>
            <input
              type="text"
              name="achievement"
              value={form.achievement}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Field</label>
            <input
              type="text"
              name="field"
              value={form.field}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Year</label>
            <input
              type="text"
              name="year"
              value={form.year}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div className="flex gap-4">
            <button
              type="button"
              onClick={handleAddOrUpdate}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              {isEditing ? 'Update Achiever' : 'Add Achiever'}
            </button>
            {isEditing && (
              <button
                type="button"
                onClick={handleCancel}
                className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>

      {/* Achievers List */}
      <div className="bg-white shadow-md rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Achievement</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Field</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Year</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {achievers.length > 0 ? (
              achievers.map((achiever) => (
                <tr key={achiever.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{achiever.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{achiever.achievement}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{achiever.field}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{achiever.year}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-500 cursor-pointer">
                    <button onClick={() => handleEdit(achiever)} className="mr-4 hover:text-blue-700">Edit</button>
                    <button onClick={() => handleDelete(achiever.id)} className="hover:text-red-700">Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="px-6 py-4 text-center text-sm text-gray-500">No top achievers</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopAchievers;
