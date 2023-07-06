import React from "react";
import InputMask from "react-input-mask";
import styles from "./input.module.css";

export function Input({
  labelText,
  InputType,
  onChange,
  placeholder,
  isRequired,
  disabled,
  value,
  name,
  mask,
  isErrorState,
  setErrorState,
}) {
  const handleInputChange = (e) => {
    const currentValue = mask
      ? e.target.value.replace(/[^\d]/g, "")
      : e.target.value;

    if (value === currentValue) return false;

    typeof onChange === "function" && onChange(currentValue);

    if (InputType === "text") {
      typeof setErrorState === "function"
    } else if (mask && isRequired) {
      typeof setErrorState === "function" &&
        setErrorState(
          currentValue.length === mask.replace(/[^\d]/g, "").length
            ? false
            : true
        );
    } else {
      typeof setErrorState === "function" &&
        setErrorState(e.target.validity.valid ? false : true);
    }
  };

  return (
    <div className={styles.Container}>
      <label className={styles.Label} filled={value}>{labelText}</label>
      <InputMask
        type={InputType}
        onChange={(e) => {
          handleInputChange(e);
        }}
        placeholder={placeholder}
        required={isRequired}
        disabled={disabled}
        value={value}
        name={name}
        mask={mask}
      />
      {isErrorState && <span className={isErrorState ? styles.Error : styles.ErrorDisabled}>{}</span >}
    </div>
  );
}
