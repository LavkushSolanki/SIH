import React, { useState } from 'react';

const notificationsData = [
  { id: 1, message: 'John Doe has joined the alumni association.', timestamp: '2024-09-17T10:30:00Z' },
  { id: 2, message: 'Alice Johnson has been recognized as a CEO of a major company.', timestamp: '2024-09-18T12:00:00Z' },
  { id: 3, message: 'Bob Lee achieved a significant research milestone.', timestamp: '2024-09-19T09:00:00Z' },
  // Add more notifications as needed
];

const Notifications= () => {
  const [selectedNotification, setSelectedNotification] = useState(null);
  const [notifications, setNotifications] = useState(notificationsData);

  const handleNotificationClick = (notification) => {
    setSelectedNotification(notification);
  };

  const handleAcknowledgeNotification = (id) => {
    setNotifications(notifications.filter(notification => notification.id !== id));
    setSelectedNotification(null);
    // Implement actual acknowledgment logic here
  };

  const handleCloseDetail = () => {
    setSelectedNotification(null);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Notifications</h1>

      {/* Notification List */}
      <div className="bg-white shadow-md rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Message</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Timestamp</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {notifications.length > 0 ? (
              notifications.map((notification) => (
                <tr key={notification.id} onClick={() => handleNotificationClick(notification)} className="cursor-pointer hover:bg-gray-100">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{notification.message}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{new Date(notification.timestamp).toLocaleString()}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-500 cursor-pointer" onClick={(e) => { e.stopPropagation(); handleAcknowledgeNotification(notification.id); }}>Acknowledge</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="px-6 py-4 text-center text-sm text-gray-500">No notifications</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Notification Details */}
      {selectedNotification && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-gray-500 opacity-75" onClick={handleCloseDetail}></div>
          <div className="bg-white p-6 rounded-lg shadow-lg z-10 relative">
            <button onClick={handleCloseDetail} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            <h2 className="text-2xl font-bold mb-4">Notification Details</h2>
            <p><strong>Message:</strong> {selectedNotification.message}</p>
            <p><strong>Timestamp:</strong> {new Date(selectedNotification.timestamp).toLocaleString()}</p>
            <button
              onClick={() => handleAcknowledgeNotification(selectedNotification.id)}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Acknowledge
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Notifications;
