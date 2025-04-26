import { BaseForm, LoginResponse } from "@/types";
import { authStore } from "../store/app-store";
import { API_URL } from "../helpers";
import toast from "react-hot-toast";

/**
 * Authenticates a user with email and password.
 * @param formData - Object containing email and password.
 * @returns A promise resolving to the login response, including error details if the API returns an error.
 */
export const loginUser = async (formData: BaseForm): Promise<LoginResponse> => {
  try {
    authStore.set((state) => ({
      ...state,
      isLoading: true
    }));

    const apiUrl = `${API_URL}/Account/ExternalPortalLogin`;

    const apiPayload = {
      email: formData.email,
      password: formData.password,
      LogInSource: "PharmacyApp",
    };

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiPayload),
    });

    const data = (await response.json()) as LoginResponse;

    const standardizedResponse: LoginResponse = {
      status: response.status,
      result: data.result || null,
      ErrorMessage: data.ErrorMessage || `Login failed: ${response.status} ${response.statusText}`,
    };

    authStore.set((state) => ({
      ...state,
      isLoading: false,
      user: data.result && data.result[0] ? data.result[0] : null
    }));

    console.log(data)

    if (!response.ok) {
      return standardizedResponse;
    }

    toast.success('Login successfully')

    return standardizedResponse;
  } catch (error) {
    const err = error as Error
    authStore.set((state) => ({
      ...state,
      isLoading: false
    }));

    toast.error(err.message)

    return {
      status: 0,
      result: null,
      ErrorMessage: "Failed to connect to the server",
    };
  }
};
