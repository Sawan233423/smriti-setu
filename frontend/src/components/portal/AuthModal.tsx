import React, { useState } from 'react';
import { 
  Lock, 
  UserCheck, 
  HeartPulse, 
  Stethoscope, 
  Building2, 
  X, 
  ArrowRight,
  ShieldCheck,
  Key
} from 'lucide-react';
import { useAuthStore } from '../../stores/useAuthStore';
import { UserRole } from '../../types';
import { AshokaEmblem } from '../common/GovEmblem';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (role: UserRole) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  onLoginSuccess,
}) => {
  const { setRole } = useAuthStore();
  const [selectedRole, setSelectedRole] = useState<UserRole>('patient');
  const [nationalId, setNationalId] = useState('ABHA-NER-986401');
  const [pin, setPin] = useState('1234');

  if (!isOpen) return null;

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRole(selectedRole);
    onLoginSuccess(selectedRole);
    onClose();
  };

  const handleQuickRoleSelect = (role: UserRole) => {
    setSelectedRole(role);
    setRole(role);
    onLoginSuccess(role);
    onClose();
  };

  const roleProfiles = [
    {
      id: 'patient' as UserRole,
      title: 'Patient Access',
      name: 'Ranjit Borthakur (72 Yrs)',
      description: 'Simplified cognitive schedule, voice assistance & daily memory activities.',
      icon: <HeartPulse className="w-6 h-6 text-red-600" />,
      color: 'border-red-200 bg-red-50/50 hover:bg-red-50',
    },
    {
      id: 'caregiver' as UserRole,
      title: 'Caregiver Portal',
      name: 'Ananya Borthakur',
      description: 'Patient monitoring, Memory Garden timeline, and daily reminders management.',
      icon: <UserCheck className="w-6 h-6 text-emerald-600" />,
      color: 'border-emerald-200 bg-emerald-50/50 hover:bg-emerald-50',
    },
    {
      id: 'clinician' as UserRole,
      title: 'Clinician Analytics',
      name: 'Dr. Devashish Phukan',
      description: 'Session history, response time trends, and AI-assisted observations.',
      icon: <Stethoscope className="w-6 h-6 text-blue-600" />,
      color: 'border-blue-200 bg-blue-50/50 hover:bg-blue-50',
    },
    {
      id: 'facility_admin' as UserRole,
      title: 'Facility Administrator',
      name: 'Guwahati Care Center Node',
      description: 'Stationary ESP32 gateway telemetry, LED status, and event stream logs.',
      icon: <Building2 className="w-6 h-6 text-amber-600" />,
      color: 'border-amber-200 bg-amber-50/50 hover:bg-amber-50',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-banner border border-slate-300 overflow-hidden">
        
        {/* Modal Header */}
        <div className="bg-govNavy-dark text-white p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <AshokaEmblem className="w-8 h-10 filter invert shrink-0" />
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-300 block">
                Official Government Access Gateway
              </span>
              <h3 className="font-serif font-bold text-xl text-white">
                Smriti-Setu Platform Login
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-300 hover:text-white rounded-full hover:bg-govNavy-light transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 md:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
          
          <div className="space-y-1">
            <h4 className="font-serif font-bold text-slate-900 text-lg">
              Select Your Authorized Access Role
            </h4>
            <p className="text-xs text-slate-600">
              Select a role below for instant frontend interactive platform testing:
            </p>
          </div>

          {/* Quick Role Options Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {roleProfiles.map((role) => (
              <div
                key={role.id}
                onClick={() => handleQuickRoleSelect(role.id)}
                className={`p-4 rounded-2xl border-2 cursor-pointer transition-all duration-200 space-y-2 group ${role.color}`}
              >
                <div className="flex items-center justify-between">
                  <div className="p-2 bg-white rounded-xl shadow-xs">
                    {role.icon}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-govNavy group-hover:underline flex items-center gap-1">
                    Select Role <ArrowRight className="w-3 h-3" />
                  </span>
                </div>

                <div>
                  <h5 className="font-bold text-slate-900 text-sm">{role.title}</h5>
                  <p className="text-xs font-semibold text-slate-600">{role.name}</p>
                </div>

                <p className="text-[11px] text-slate-500 leading-tight">
                  {role.description}
                </p>
              </div>
            ))}
          </div>

          {/* Form Credentials Option */}
          <form onSubmit={handleFormSubmit} className="pt-4 border-t border-slate-200 space-y-4">
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700">
              <ShieldCheck className="w-4 h-4 text-govNavy" />
              <span>Or Login via ABHA Health ID / Access Credentials:</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">ABHA Health ID / Username</label>
                <input
                  type="text"
                  value={nationalId}
                  onChange={(e) => setNationalId(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs font-semibold text-slate-900 bg-slate-50 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-govNavy"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Passcode / PIN</label>
                <input
                  type="password"
                  value={pin}
                  onChange={(e) => setPin(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs font-semibold text-slate-900 bg-slate-50 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-govNavy"
                />
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between">
              <span className="text-[11px] font-semibold text-slate-500">
                Encrypted Session · Official Gov Access
              </span>
              <button
                type="submit"
                className="bg-govNavy text-white hover:bg-govNavy-light px-6 py-2.5 rounded-xl font-bold text-xs shadow-xs transition-all flex items-center gap-1.5"
              >
                <Lock className="w-3.5 h-3.5 text-govYellow" />
                <span>Enter Platform</span>
              </button>
            </div>
          </form>

        </div>

      </div>
    </div>
  );
};
