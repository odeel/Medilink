// src/components/DataTable.jsx
import React, { useState } from 'react';
import { Search, Edit, Eye, Trash2, ChevronLeft, ChevronRight } from 'lucide-react';
import '../../styles/DataTable.css';

export const DataTable = ({
  data,
  columns,
  onView,
  onEdit,
  onDelete,
  searchPlaceholder = 'Search...',
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Filter
  const filteredData = data.filter(row =>
    Object.values(row).some(val =>
      val?.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  // Sort
  const sortedData = [...filteredData].sort((a, b) => {
    if (!sortConfig) return 0;
    const aV = a[sortConfig.key], bV = b[sortConfig.key];
    if (aV < bV) return sortConfig.direction === 'asc' ? -1 : 1;
    if (aV > bV) return sortConfig.direction === 'asc' ? 1 : -1;
    return 0;
  });

  // Paginate
  const totalPages = Math.ceil(sortedData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = sortedData.slice(startIndex, startIndex + itemsPerPage);

  const handleSort = key => {
    setSortConfig(cur => ({
      key,
      direction: cur?.key === key && cur.direction === 'asc' ? 'desc' : 'asc'
    }));
  };

  return (
    <div className="datatable">
      <div className="datatable__search">
        <Search size={20} className="datatable__search-icon" />
        <input
          type="text"
          placeholder={searchPlaceholder}
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="datatable__search-input"
        />
      </div>

      <div className="datatable__table-wrapper">
        <table className="datatable__table">
          <thead>
            <tr>
              {columns.map(col => (
                <th
                  key={col.key}
                  className={col.sortable ? 'sortable' : ''}
                  onClick={() => col.sortable && handleSort(col.key)}
                >
                  {col.label}
                  {col.sortable && sortConfig?.key === col.key && (
                    <span className="datatable__sort-indicator">
                      {sortConfig.direction === 'asc' ? '↑' : '↓'}
                    </span>
                  )}
                </th>
              ))}
              <th className="actions-header">Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((row, idx) => (
              <tr key={row.id || idx}>
                {columns.map(col => (
                  <td key={col.key}>
                    {col.render ? col.render(row[col.key], row) : row[col.key]}
                  </td>
                ))}
                <td className="actions-cell">
                  {onView && (
                    <button onClick={() => onView(row)} className="btn-view">
                      <Eye size={16} />
                    </button>
                  )}
                  {onEdit && (
                    <button onClick={() => onEdit(row)} className="btn-edit">
                      <Edit size={16} />
                    </button>
                  )}
                  {onDelete && (
                    <button onClick={() => onDelete(row)} className="btn-delete">
                      <Trash2 size={16} />
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {totalPages > 1 && (
        <div className="datatable__pagination">
          <div className="datatable__page-info">
            Showing {startIndex + 1}–{Math.min(startIndex + itemsPerPage, sortedData.length)} of {sortedData.length}
          </div>
          <div className="datatable__page-controls">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              className="page-btn"
            >
              <ChevronLeft size={16} />
            </button>
            <span className="page-number">
              Page {currentPage} of {totalPages}
            </span>
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              className="page-btn"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
