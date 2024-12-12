import React from "react";

const FormRowSelect = ({ name, labelText, list, defaultValue = "" }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
        <select name={name} id={name} className="form-select" defaultValue={defaultValue}>
          {list.map((itemValue) => {
            return (
              <option key={itemValue} value={itemValue}>
                {itemValue}
              </option>
            );
          })}
        </select>
      </label>
    </div>
  );
};

export default FormRowSelect;
