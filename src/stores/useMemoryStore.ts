import { create } from 'zustand';
import { MemoryEntry, MemoryCategory } from '../types';

interface MemoryState {
  memories: MemoryEntry[];
  selectedCategory: MemoryCategory | 'All';
  addMemory: (memory: Omit<MemoryEntry, 'id' | 'createdAt'>) => void;
  deleteMemory: (id: string) => void;
  setCategory: (cat: MemoryCategory | 'All') => void;
}

const initialMemories: MemoryEntry[] = [
  {
    id: 'mem-1',
    patientId: 'pat-ner-001',
    title: 'Rongali Bihu Courtyard Gathering',
    year: 1984,
    person: 'Ananya & Family',
    location: 'Guwahati, Assam',
    category: 'Family',
    story: 'Gathering with the whole family under the courtyard neem tree during Rongali Bihu. We listened to dhol beats, shared fresh pitha, and sang traditional songs.',
    imageUrl: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=1200&q=80',
    createdAt: '2026-08-01T10:00:00Z',
    tags: ['Bihu', 'Family', 'Tradition', 'Guwahati'],
    featured: true,
  },
  {
    id: 'mem-2',
    patientId: 'pat-ner-001',
    title: 'Morning Mist at Dibrugarh Tea Estate',
    year: 1976,
    person: 'Colleague Suresh Barua',
    location: 'Dibrugarh, Assam',
    category: 'Career',
    story: 'Beginning my career as assistant manager in the lush green tea gardens of Dibrugarh. Early morning mist over the tea bushes and fresh morning tea.',
    imageUrl: 'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=800&q=80',
    createdAt: '2026-08-05T14:30:00Z',
    tags: ['Career', 'Tea Garden', 'Dibrugarh'],
  },
  {
    id: 'mem-3',
    patientId: 'pat-ner-001',
    title: 'Graduation Day at Cotton College',
    year: 1972,
    person: 'Classmates & Professor Saikia',
    location: 'Panbazar, Guwahati',
    category: 'School',
    story: 'Receiving degree diploma at Cotton College hall. Walking along Panbazar road with close friends celebrating over hot tea.',
    imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
    createdAt: '2026-08-10T11:15:00Z',
    tags: ['School', 'Cotton College', 'Graduation'],
  },
  {
    id: 'mem-4',
    patientId: 'pat-ner-001',
    title: 'Granddaughter Priyanshi\'s 5th Birthday',
    year: 2018,
    person: 'Priyanshi Borthakur',
    location: 'Dispur, Guwahati',
    category: 'Grandchildren',
    story: 'Priyanshi wearing her bright silk mekhela chador outfit and blowing out candles. She sang her favorite nursery rhyme for us.',
    imageUrl: 'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=800&q=80',
    createdAt: '2026-08-15T09:20:00Z',
    tags: ['Grandchildren', 'Birthday', 'Family'],
  },
  {
    id: 'mem-5',
    patientId: 'pat-ner-001',
    title: 'Sunset Ferry Ride across Brahmaputra',
    year: 1992,
    person: 'Ananya Borthakur',
    location: 'North Guwahati',
    category: 'Important Events',
    story: 'Crossing the mighty Brahmaputra river during golden hour. Calm waters, cool evening breeze, and temple bells ringing in the distance.',
    imageUrl: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80',
    createdAt: '2026-08-20T16:45:00Z',
    tags: ['Brahmaputra', 'River', 'Sunset'],
  },
];

export const useMemoryStore = create<MemoryState>((set) => ({
  memories: initialMemories,
  selectedCategory: 'All',
  addMemory: (newMem) =>
    set((state) => ({
      memories: [
        {
          ...newMem,
          id: `mem-${Date.now()}`,
          createdAt: new Date().toISOString(),
        },
        ...state.memories,
      ],
    })),
  deleteMemory: (id) =>
    set((state) => ({
      memories: state.memories.filter((m) => m.id !== id),
    })),
  setCategory: (cat) => set({ selectedCategory: cat }),
}));
