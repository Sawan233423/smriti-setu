import { create } from 'zustand';
import { Reminder, ReminderState } from '../types';

interface ReminderStoreState {
  reminders: Reminder[];
  addReminder: (reminder: Omit<Reminder, 'id'>) => void;
  updateReminderState: (id: string, state: ReminderState) => void;
  deleteReminder: (id: string) => void;
}

const initialReminders: Reminder[] = [
  {
    id: 'rem-1',
    patientId: 'pat-ner-001',
    title: 'Morning Cognitive Health Medication',
    type: 'medicine',
    scheduledTime: '08:30 AM',
    state: 'upcoming',
    notes: 'Take 1 tablet after breakfast with warm water.',
    voicePromptText: 'Ranjit, it is time for your morning medication with warm water.',
  },
  {
    id: 'rem-2',
    patientId: 'pat-ner-001',
    title: 'Mid-Morning Hydration (Fresh Water)',
    type: 'hydration',
    scheduledTime: '11:00 AM',
    state: 'upcoming',
    notes: 'Drink one full glass of clean water.',
    voicePromptText: 'Time to drink a glass of fresh water to stay hydrated.',
  },
  {
    id: 'rem-3',
    patientId: 'pat-ner-001',
    title: 'Daily Memory Match Activity',
    type: 'activity',
    scheduledTime: '04:00 PM',
    state: 'upcoming',
    notes: 'Complete today\'s 5-minute Memory Match game.',
    voicePromptText: 'It is 4 PM. Let us enjoy today\'s Memory Match activity together.',
  },
  {
    id: 'rem-4',
    patientId: 'pat-ner-001',
    title: 'Monthly Cognitive Health Checkup',
    type: 'appointment',
    scheduledTime: '10:30 AM (Tomorrow)',
    state: 'upcoming',
    notes: 'Appointment with Dr. Devashish Phukan at Guwahati Regional Cognitive Care Center.',
    voicePromptText: 'Reminder: Tomorrow at 10:30 AM you have a health checkup with Dr. Phukan.',
  },
];

export const useReminderStore = create<ReminderStoreState>((set) => ({
  reminders: initialReminders,
  addReminder: (newRem) =>
    set((state) => ({
      reminders: [
        {
          ...newRem,
          id: `rem-${Date.now()}`,
        },
        ...state.reminders,
      ],
    })),
  updateReminderState: (id, newState) =>
    set((state) => ({
      reminders: state.reminders.map((r) => (r.id === id ? { ...r, state: newState } : r)),
    })),
  deleteReminder: (id) =>
    set((state) => ({
      reminders: state.reminders.filter((r) => r.id !== id),
    })),
}));
