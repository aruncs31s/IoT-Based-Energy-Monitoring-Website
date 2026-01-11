/// <reference types="vite/client" />

/**
 * API Client
 * Central HTTP client for making API requests
 */

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:8080";

export interface ApiSuccessResponse<T> {
  success: true;
  data: T;
  meta?: string;
  message?: string;
}

export interface ApiErrorResponse {
  success: false;
  error: {
    code: number;
    status: string;
    message: string;
    details: string;
  };
}

export interface ApiMessageResponse {
  message: string;
}

export class ApiClient {
  private baseURL: string;

  constructor(baseURL: string = API_BASE_URL) {
    this.baseURL = baseURL;
  }

  private async request<T>(
    method: string,
    url: string,
    options: RequestInit = {},
  ): Promise<ApiSuccessResponse<T>> {
    const fullUrl = new URL(url, this.baseURL).toString();

    const response = await fetch(fullUrl, {
      method,
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }

    return response.json();
  }

  async get<T = unknown>(
    url: string,
    options: RequestInit = {},
  ): Promise<ApiSuccessResponse<T>> {
    return this.request<T>("GET", url, options);
  }

  async post<T = unknown>(
    url: string,
    data: unknown,
    options: RequestInit = {},
  ): Promise<ApiSuccessResponse<T>> {
    return this.request<T>("POST", url, {
      ...options,
      body: JSON.stringify(data),
    });
  }

  async put<T = unknown>(
    url: string,
    data: unknown,
    options: RequestInit = {},
  ): Promise<ApiSuccessResponse<T>> {
    return this.request<T>("PUT", url, {
      ...options,
      body: JSON.stringify(data),
    });
  }

  async patch<T = unknown>(
    url: string,
    data: unknown,
    options: RequestInit = {},
  ): Promise<ApiSuccessResponse<T>> {
    return this.request<T>("PATCH", url, {
      ...options,
      body: JSON.stringify(data),
    });
  }

  async delete<T = unknown>(
    url: string,
    options: RequestInit = {},
  ): Promise<ApiSuccessResponse<T>> {
    return this.request<T>("DELETE", url, options);
  }

  /**
   * Helper methods that extract data directly
   * These methods call the API and return only the inner data
   */
  async getData<T>(url: string, options: RequestInit = {}): Promise<T> {
    const response = await this.get<T>(url, options);
    return response.data;
  }

  async postData<T>(
    url: string,
    data: unknown,
    options: RequestInit = {},
  ): Promise<T> {
    const response = await this.post<T>(url, data, options);
    return response.data;
  }

  async putData<T>(
    url: string,
    data: unknown,
    options: RequestInit = {},
  ): Promise<T> {
    const response = await this.put<T>(url, data, options);
    return response.data;
  }

  async patchData<T>(
    url: string,
    data: unknown,
    options: RequestInit = {},
  ): Promise<T> {
    const response = await this.patch<T>(url, data, options);
    return response.data;
  }

  async deleteData<T>(url: string, options: RequestInit = {}): Promise<T> {
    const response = await this.delete<T>(url, options);
    return response.data;
  }
}

// Singleton instance
const apiClient = new ApiClient();
export default apiClient;
