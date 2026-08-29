import { create } from 'zustand';
import { SyncState, SyncPendingItem } from '../types';

interface SyncStoreState {
  isOnline: boolean;
  syncState: SyncState;
  pendingItems: SyncPendingItem[];
  setOnlineStatus: (isOnline: boolean) => void;
  addPendingItem: (action: SyncPendingItem['action'], payload: Record<string, any>) => void;
  triggerManualSync: () => Promise<void>;
}

export const useSyncStore = create<SyncStoreState>((set, get) => ({
  isOnline: true,
  syncState: 'synced',
  pendingItems: [],

  setOnlineStatus: (isOnline) => {
    set({
      isOnline,
      syncState: isOnline ? (get().pendingItems.length > 0 ? 'syncing' : 'synced') : 'offline',
    });

    if (isOnline && get().pendingItems.length > 0) {
      get().triggerManualSync();
    }
  },

  addPendingItem: (action, payload) => {
    const newItem: SyncPendingItem = {
      id: `sync-${Date.now()}`,
      action,
      payload,
      createdAt: new Date().toISOString(),
    };

    set((state) => {
      const updatedPending = [...state.pendingItems, newItem];
      return {
        pendingItems: updatedPending,
        syncState: state.isOnline ? 'syncing' : 'offline',
      };
    });

    if (get().isOnline) {
      get().triggerManualSync();
    }
  },

  triggerManualSync: async () => {
    if (!get().isOnline || get().pendingItems.length === 0) return;

    set({ syncState: 'syncing' });

    // Simulate network sync roundtrip to regional gateway
    await new Promise((resolve) => setTimeout(resolve, 1500));

    set({
      pendingItems: [],
      syncState: 'synced',
    });
  },
}));
