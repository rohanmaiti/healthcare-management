import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../../store/slices/auth.slice";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";


export const useLogin = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [selectedUserTypeValue, setSelectedUserTypeValue] = useState("user");

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isLoading } = useAppSelector((state) => state.authReducer);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleUserTypeSelect = (userType: string) => {
    setSelectedUserTypeValue(userType);
    setIsDropdownOpen(false);
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    // Get values directly from refs
    const email = emailRef.current?.value || "";
    const password = passwordRef.current?.value || "";

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    // Collect form data from refs
    const formData = {
      email: emailRef.current?.value || "",
      password: passwordRef.current?.value || "",
      userType: selectedUserTypeValue,
    };

    try {
      const result = await dispatch(login(formData));
      if (login.fulfilled.match(result)) {
        navigate(`/${result.payload.userType}`);
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };
  return {
    // Input refs
    emailRef,
    passwordRef,

    // UI state
    showPassword,
    isDropdownOpen,
    isLoading,
    errors,
    selectedUserTypeValue,

    // State setters
    setShowPassword,
    setIsDropdownOpen,

    // Functions
    handleInputChange,
    handleUserTypeSelect,
    validateForm,
    handleSubmit,
  };
};
