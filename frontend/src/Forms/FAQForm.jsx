import React, { useState } from "react";
import "../styles/FAQForm.css";

/**
 * FAQForm
 * Props:
 * - initialData: optional { id, question, answer, category, status }
 * - onSubmit(faqObj)
 * - onCancel()
 */
const FAQForm = ({ initialData = {}, onSubmit, onCancel }) => {
  const [question, setQuestion] = useState(initialData.question ?? "");
  const [answer, setAnswer] = useState(initialData.answer ?? "");
  const [category, setCategory] = useState(initialData.category ?? "General");
  const [status, setStatus] = useState(initialData.status ?? "Active");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!question.trim() || !answer.trim()) {
      setError("Question and answer are required.");
      return;
    }
    const faq = {
      id: initialData.id ?? `faq_${Date.now()}`,
      question: question.trim(),
      answer: answer.trim(),
      category,
      status,
      createdAt: initialData.createdAt ?? new Date().toISOString(),
    };
    onSubmit(faq);
  };

  return (
    <form className="faq-form" onSubmit={handleSubmit}>
      {error && <div className="faq-form__error">{error}</div>}

      <label className="faq-form__label">Question</label>
      <input className="faq-form__input" value={question} onChange={(e)=>setQuestion(e.target.value)} placeholder="Enter the frequently asked question" />

      <label className="faq-form__label">Answer</label>
      <textarea className="faq-form__textarea" value={answer} onChange={(e)=>setAnswer(e.target.value)} placeholder="Enter the detailed answer" />

      <label className="faq-form__label">Category</label>
      <select className="faq-form__input" value={category} onChange={(e)=>setCategory(e.target.value)}>
        <option>General</option>
        <option>Billing</option>
        <option>Appointments</option>
        <option>Technical</option>
      </select>

      <label className="faq-form__label">Status</label>
      <select className="faq-form__input" value={status} onChange={(e)=>setStatus(e.target.value)}>
        <option>Active</option>
        <option>Inactive</option>
      </select>

      <div className="faq-form__actions">
        <button type="button" className="faq-form__btn faq-form__btn--cancel" onClick={onCancel}>Cancel</button>
        <button type="submit" className="faq-form__btn faq-form__btn--submit">Add FAQ</button>
      </div>
    </form>
  );
};

export default FAQForm;
