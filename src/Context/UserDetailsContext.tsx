import React, { createContext, useContext, useState, ReactNode, useMemo, useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import { useAuth0 } from "@auth0/auth0-react";

export interface User {
  id: number;
  auth0_id: string;
  first_name: string;
  last_name: string;
  email: string;
  organization?: string;
  org_type?: string;
  org_website?: string;
  job_title?: string;
  linkedin?: string;
  expertise?: string;
  about_me?: string;
  is_registration_complete: boolean;
  created_at: string;
  updated_at: string;
}

interface UserDetailsContextProps {
  userDetails: User | undefined;
  loading: boolean;
  handleLoading: (val: boolean) => void;
  error: any;
}

const UserDetailsContext = createContext<UserDetailsContextProps | undefined>(undefined);

export const UserDetailsProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const { user, getAccessTokenSilently, isLoading } = useAuth0();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);
  const [userDetails, setUserDetails] = useState<User>();

  const handleLoading = (val:boolean) => setLoading(val);

  const fetchUserData = async () => {
      try {
        setLoading(true);
        const token = await getAccessTokenSilently();
        // TODO: Change the below URLS
        const response: AxiosResponse<User> = await axios.get<User>(`http://localhost:3000/api/user/details`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        setUserDetails(response.data);
        setLoading(false);
      } catch (err) {
        console.log('THERE IS AN ERROR', err)
        setError('Failed to fetch user data.');
        setLoading(false);
      }
    };

  useEffect(() => {
      if(!isLoading) fetchUserData();
  }, [isLoading]);

  const value = useMemo(() => ({
    userDetails,
    loading,
    handleLoading,
    error,
  }), [userDetails, loading, error]);

  return (
    <UserDetailsContext.Provider value={value}>
      {children}
    </UserDetailsContext.Provider>
  );
};

export const useUserDetailsContext = () => {
  const context = useContext(UserDetailsContext);
  if (context === undefined) {
    throw new Error("useUserDetailsContext must be used within a UserDetailsContext");
  }
  return context;
};
