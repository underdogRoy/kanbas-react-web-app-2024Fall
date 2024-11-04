import React from 'react';
import { useSelector } from 'react-redux';

interface ProtectedContentProps {
  children: React.ReactNode;
  roles?: string[];
}

const ProtectedContent = ({ children, roles }: ProtectedContentProps) => {
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  // If there's no user logged in, don't show the content
  if (!currentUser) {
    return null;
  }

  // If no roles are specified, show content to any authenticated user
  if (!roles) {
    return <>{children}</>;
  }

  // If roles are specified, only show content if user has one of the required roles
  if (roles.includes(currentUser.role)) {
    return <>{children}</>;
  }

  // Don't render anything if user doesn't have required role
  return null;
};

export default ProtectedContent;