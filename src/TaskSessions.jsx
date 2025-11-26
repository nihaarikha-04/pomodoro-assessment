// TaskSessions.jsx
import { useState, useMemo } from 'react';
import './TaskSessions.css';
import WindowButtons from './WindowButtons';

// Mock JSON data
const mockSessions = [
  {
    id: 1,
    taskName: "Build Login Component",
    duration: 25,
    status: "Completed",
    date: "2025-11-26",
    startTime: "09:00 AM",
    endTime: "09:25 AM",
    notes: "Completed authentication flow with validation",
    breaks: 1
  },
  {
    id: 2,
    taskName: "Fix Navigation Bug",
    duration: 50,
    status: "Completed",
    date: "2025-11-26",
    startTime: "10:00 AM",
    endTime: "10:50 AM",
    notes: "Resolved routing issues in main nav",
    breaks: 2
  },
  {
    id: 3,
    taskName: "Code Review",
    duration: 25,
    status: "Pending",
    date: "2025-11-26",
    startTime: "02:00 PM",
    endTime: "02:25 PM",
    notes: "Review PR #142",
    breaks: 1
  },
  {
    id: 4,
    taskName: "Write Documentation",
    duration: 75,
    status: "Completed",
    date: "2025-11-25",
    startTime: "11:00 AM",
    endTime: "12:15 PM",
    notes: "API documentation for new endpoints",
    breaks: 3
  },
  {
    id: 5,
    taskName: "Team Meeting",
    duration: 25,
    status: "Pending",
    date: "2025-11-26",
    startTime: "03:30 PM",
    endTime: "03:55 PM",
    notes: "Sprint planning session",
    breaks: 1
  },
  {
    id: 6,
    taskName: "Refactor Database Queries",
    duration: 100,
    status: "Completed",
    date: "2025-11-25",
    startTime: "01:00 PM",
    endTime: "02:40 PM",
    notes: "Optimized slow queries, improved performance by 40%",
    breaks: 4
  }
];

function TaskSessions({ onMinimize, onClose, onBack }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');
  const [sortOrder, setSortOrder] = useState('High');
  const [selectedSession, setSelectedSession] = useState(null);

  const processedSessions = useMemo(() => {
    let filtered = mockSessions;

    if (searchQuery) {
      filtered = filtered.filter(session =>
        session.taskName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        session.notes.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (filterStatus !== 'All') {
      filtered = filtered.filter(session => session.status === filterStatus);
    }

    const sorted = [...filtered].sort((a, b) => {
      return sortOrder === 'High' ? b.duration - a.duration : a.duration - b.duration;
    });

    return sorted;
  }, [searchQuery, filterStatus, sortOrder]);

  return (
    <div className="app-box">
      <WindowButtons onMinimize={onMinimize} onClose={onClose} />
      
      <h1 className="title">Task Sessions</h1>
      {onBack && (
        <button className="back-button" onClick={onBack}>Back</button>
      )}
    
      <div className="sessions-container">
        {/* Controls */}
        <div className="controls-bar">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="filter-select"
          >
            <option>All</option>
            <option>Completed</option>
            <option>Pending</option>
          </select>

          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="sort-select"
          >
            <option value="High">Duration High → Low</option>
            <option value="Low">Duration Low → High</option>
          </select>
        </div>

        {/* Sessions List */}
        <div className="sessions-list">
          {processedSessions.map((session) => (
            <div
              key={session.id}
              className="session-card"
              onClick={() => setSelectedSession(session)}
            >
              <div className="session-header">
                <h3 className="session-title">{session.taskName}</h3>
                <span className={`status-badge ${session.status.toLowerCase()}`}>
                  {session.status === 'Completed' ? 'Done' : 'Pending'}
                </span>
              </div>
              
              <div className="session-duration">{session.duration} min</div>
              
              <div className="session-meta">
                <div>{session.date}</div>
                <div>{session.startTime}</div>
              </div>
            </div>
          ))}
          
          {processedSessions.length === 0 && (
            <div className="empty-state">No sessions found</div>
          )}
        </div>
      </div>

      {/* Modal */}
      {selectedSession && (
        <div className="modal-overlay" onClick={() => setSelectedSession(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">{selectedSession.taskName}</h2>
              <button
                onClick={() => setSelectedSession(null)}
                className="modal-close"
              >
                ✕
              </button>
            </div>

            <div className={`modal-status ${selectedSession.status.toLowerCase()}`}>
              {selectedSession.status}
            </div>

            <div className="modal-duration">{selectedSession.duration} min</div>

            <div className="modal-details">
              <div className="detail-row">
                <span>Date:</span>
                <span>{selectedSession.date}</span>
              </div>
              <div className="detail-row">
                <span>Time:</span>
                <span>{selectedSession.startTime} - {selectedSession.endTime}</span>
              </div>
              <div className="detail-row">
                <span>Breaks:</span>
                <span>{selectedSession.breaks}</span>
              </div>
            </div>

            <div className="modal-notes">
              <strong>Notes:</strong>
              <p>{selectedSession.notes}</p>
            </div>

            <button
              onClick={() => setSelectedSession(null)}
              className="modal-close-btn"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskSessions;