import React, { useRef, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { signup } from '../../../store/slices/auth.slice';

export const useSignin = () => {
      const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const hospitalNameRef = useRef<HTMLInputElement>(null);
  const hospitalLocationRef = useRef<HTMLInputElement>(null);
  const registrationNumberRef = useRef<HTMLInputElement>(null);
  const hospitalEmailRef = useRef<HTMLInputElement>(null);
  const hospitalPhone1Ref = useRef<HTMLInputElement>(null);
  const hospitalPhone2Ref = useRef<HTMLInputElement>(null);
  const hospitalTypeRef = useRef<HTMLSelectElement>(null);
  const agreeToTermsRef = useRef<HTMLInputElement>(null);

  // UI state only (for things that affect rendering)
  const [selectedUserTypeValue, setSelectedUserTypeValue] = useState('user');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state:any) => state?.authReducer);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name } = e.target;
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleUserTypeSelect = (userType: string) => {
    setSelectedUserTypeValue(userType);
    setIsDropdownOpen(false);
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    // Get values directly from refs
    const firstName = firstNameRef.current?.value || '';
    const lastName = lastNameRef.current?.value || '';
    const email = emailRef.current?.value || '';
    const phone = phoneRef.current?.value || '';
    const password = passwordRef.current?.value || '';
    const confirmPassword = confirmPasswordRef.current?.value || '';
    const hospitalName = hospitalNameRef.current?.value || '';
    const hospitalLocation = hospitalLocationRef.current?.value || '';
    const registrationNumber = registrationNumberRef.current?.value || '';
    const hospitalEmail = hospitalEmailRef.current?.value || '';
    const hospitalPhone1 = hospitalPhone1Ref.current?.value || '';
    const hospitalPhone2 = hospitalPhone2Ref.current?.value || '';
    const agreeToTerms = agreeToTermsRef.current?.checked || false;

    if (!firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!phone) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[\d\s-()]+$/.test(phone)) {
      newErrors.phone = 'Phone number is invalid';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password)) {
      newErrors.password = 'Password must contain uppercase, lowercase and number';
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    // Hospital Admin specific validations
    if (selectedUserTypeValue === 'hospital-admin') {
      if (!hospitalName.trim()) {
        newErrors.hospitalName = 'Hospital name is required';
      }

      if (!hospitalLocation.trim()) {
        newErrors.hospitalLocation = 'Hospital location is required';
      }

      if (!registrationNumber.trim()) {
        newErrors.registrationNumber = 'Registration number is required';
      }

      if (!hospitalEmail) {
        newErrors.hospitalEmail = 'Hospital email is required';
      } else if (!/\S+@\S+\.\S+/.test(hospitalEmail)) {
        newErrors.hospitalEmail = 'Hospital email is invalid';
      }

      if (!hospitalPhone1) {
        newErrors.hospitalPhone1 = 'Hospital phone number is required';
      } else if (!/^\+?[\d\s-()]+$/.test(hospitalPhone1)) {
        newErrors.hospitalPhone1 = 'Hospital phone number is invalid';
      }

      if (hospitalPhone2 && !/^\+?[\d\s-()]+$/.test(hospitalPhone2)) {
        newErrors.hospitalPhone2 = 'Hospital phone number is invalid';
      }
    }

    if (!agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the terms and conditions';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
   
    // Collect form data from refs
    const formData = {
      firstName: firstNameRef.current?.value || '',
      lastName: lastNameRef.current?.value || '',
      email: emailRef.current?.value || '',
      phone: phoneRef.current?.value || '',
      password: passwordRef.current?.value || '',
      confirmPassword: confirmPasswordRef.current?.value || '',
      userType: selectedUserTypeValue,
      agreeToTerms: agreeToTermsRef.current?.checked || false,
      // Hospital Admin specific fields
      hospitalName: hospitalNameRef.current?.value || '',
      hospitalLocation: hospitalLocationRef.current?.value || '',
      registrationNumber: registrationNumberRef.current?.value || '',
      hospitalType: hospitalTypeRef.current?.value || 'private',
      hospitalEmail: hospitalEmailRef.current?.value || '',
      hospitalPhone1: hospitalPhone1Ref.current?.value || '',
      hospitalPhone2: hospitalPhone2Ref.current?.value || ''
    };

    dispatch(signup(formData));
    
  };

  return {
    // Input refs
    firstNameRef,
    lastNameRef,
    emailRef,
    phoneRef,
    passwordRef,
    confirmPasswordRef,
    hospitalNameRef,
    hospitalLocationRef,
    registrationNumberRef,
    hospitalEmailRef,
    hospitalPhone1Ref,
    hospitalPhone2Ref,
    hospitalTypeRef,
    agreeToTermsRef,
    
    // UI state
    selectedUserTypeValue,
    showPassword,
    showConfirmPassword,
    isDropdownOpen,
    isLoading,
    errors,
    
    // State setters
    setShowPassword,
    setShowConfirmPassword,
    setIsDropdownOpen,
    
    // Functions
    handleInputChange,
    handleUserTypeSelect,
    validateForm,
    handleSubmit
  }
}
