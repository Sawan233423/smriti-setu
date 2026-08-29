import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// API Health Check
app.get('/api/health', (req: Request, res: Response) => {
  res.json({
    status: 'online',
    service: 'Smriti-Setu AI Gaming & Healthcare API Server',
    timestamp: new Date().toISOString(),
    region: 'Northeast India Ecosystem (NER)',
  });
});

// Sample API endpoints for AI cognitive activities
app.get('/api/activities', (req: Request, res: Response) => {
  res.json([
    { id: 'memory_match', name: 'Memory Card Match', category: 'Cognitive' },
    { id: 'picture_rec', name: 'Northeast Picture Recall', category: 'Visual Memory' },
    { id: 'familiar_sound', name: 'Familiar Sound Identify', category: 'Auditory' },
    { id: 'routine_recall', name: 'Daily Routine Task Order', category: 'Executive Function' },
  ]);
});

// Sample API endpoints for Healthcare Facilities Network
app.get('/api/facilities', (req: Request, res: Response) => {
  res.json([
    { id: 'fac-1', name: 'Guwahati AIIMS Geriatric Center', state: 'Assam', bedCapacity: 120 },
    { id: 'fac-2', name: 'NEIGRIHMS Shillong Cognitive Care', state: 'Meghalaya', bedCapacity: 85 },
    { id: 'fac-3', name: 'RIMS Imphal Memory Clinic', state: 'Manipur', bedCapacity: 60 },
  ]);
});

app.listen(PORT, () => {
  console.log(`🚀 Smriti-Setu Backend API Server listening on http://localhost:${PORT}`);
});
