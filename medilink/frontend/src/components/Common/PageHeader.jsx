// src/components/PageHeader.jsx
import React from 'react';
import { Plus } from 'lucide-react';
import '../../styles/PageHeader.css';

export const PageHeader = ({ title, description, action }) => {
  return (
    <div className="page-header">
      <div className="page-header__inner">
        <div className="page-header__titles">
          <h1 className="page-header__title">{title}</h1>
          {description && (
            <p className="page-header__description">{description}</p>
          )}
        </div>
        {action && (
          <button
            onClick={action.onClick}
            className="page-header__action-btn"
          >
            <Plus size={20} />
            <span>{action.label}</span>
          </button>
        )}
      </div>
    </div>
  );
};
