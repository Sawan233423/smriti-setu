import axios from 'axios';
import { 
  PatientProfile, 
  MemoryEntry, 
  GameSession, 
  ESP32Device, 
  DeviceEvent, 
  Reminder 
} from '../types';

// Standardized API Client Service Layer for SMRITI-SETU Platform
const apiClient = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
    'X-Platform-Region': 'North-Eastern-Region-India',
  },
  timeout: 10000,
});

export const authApi = {
  getProfile: async (): Promise<PatientProfile> => {
    // Service endpoint interface wrapper
    return apiClient.get('/auth/profile').then((res) => res.data);
  },
};

export const patientApi = {
  getPatientDetails: async (patientId: string): Promise<PatientProfile> => {
    return apiClient.get(`/patients/${patientId}`).then((res) => res.data);
  },
};

export const memoryApi = {
  getMemories: async (patientId: string): Promise<MemoryEntry[]> => {
    return apiClient.get(`/memories?patientId=${patientId}`).then((res) => res.data);
  },
  createMemory: async (memory: Partial<MemoryEntry>): Promise<MemoryEntry> => {
    return apiClient.post('/memories', memory).then((res) => res.data);
  },
};

export const gameApi = {
  submitSessionResult: async (session: GameSession): Promise<{ success: boolean; nextDifficulty: string }> => {
    return apiClient.post('/results', session).then((res) => res.data);
  },
  getSessionHistory: async (patientId: string): Promise<GameSession[]> => {
    return apiClient.get(`/sessions?patientId=${patientId}`).then((res) => res.data);
  },
};

export const deviceApi = {
  getDeviceTelemetry: async (deviceId: string): Promise<ESP32Device> => {
    return apiClient.get(`/devices/${deviceId}`).then((res) => res.data);
  },
  getDeviceEvents: async (deviceId: string): Promise<DeviceEvent[]> => {
    return apiClient.get(`/device-events?deviceId=${deviceId}`).then((res) => res.data);
  },
};

export const reminderApi = {
  getReminders: async (patientId: string): Promise<Reminder[]> => {
    return apiClient.get(`/reminders?patientId=${patientId}`).then((res) => res.data);
  },
  updateReminder: async (id: string, updates: Partial<Reminder>): Promise<Reminder> => {
    return apiClient.patch(`/reminders/${id}`, updates).then((res) => res.data);
  },
};

export default apiClient;
