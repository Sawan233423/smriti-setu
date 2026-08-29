import { 
  HealthFacility, 
  NERState, 
  HealthServiceCategory, 
  GovProgram, 
  GovUpdate, 
  GovResource,
  GovPortalFilters 
} from '../types/govPortal';

import { nerStatesData } from '../data/statesData';
import { sampleFacilitiesData } from '../data/facilitiesData';
import { sampleHealthServicesData } from '../data/healthServicesData';
import { sampleProgramsData } from '../data/programsData';
import { sampleUpdatesData } from '../data/updatesData';
import { sampleResourcesData } from '../data/resourcesData';

export const portalService = {
  getStates: async (): Promise<NERState[]> => {
    return Promise.resolve(nerStatesData);
  },

  getStateByCode: async (code: string): Promise<NERState | undefined> => {
    return Promise.resolve(nerStatesData.find((s) => s.code === code || s.name.toLowerCase() === code.toLowerCase()));
  },

  getHealthServices: async (): Promise<HealthServiceCategory[]> => {
    return Promise.resolve(sampleHealthServicesData);
  },

  searchFacilities: async (filters: GovPortalFilters): Promise<HealthFacility[]> => {
    let result = [...sampleFacilitiesData];

    if (filters.searchQuery) {
      const q = filters.searchQuery.toLowerCase();
      result = result.filter(
        (f) =>
          f.name.toLowerCase().includes(q) ||
          f.district.toLowerCase().includes(q) ||
          f.state.toLowerCase().includes(q) ||
          f.services.some((s) => s.toLowerCase().includes(q))
      );
    }

    if (filters.selectedState && filters.selectedState !== 'All') {
      result = result.filter((f) => f.state.toLowerCase() === filters.selectedState.toLowerCase());
    }

    if (filters.selectedDistrict && filters.selectedDistrict !== 'All') {
      result = result.filter((f) => f.district.toLowerCase() === filters.selectedDistrict.toLowerCase());
    }

    if (filters.selectedType && filters.selectedType !== 'All') {
      result = result.filter((f) => f.type === filters.selectedType);
    }

    if (filters.hasCognitiveOnly) {
      result = result.filter((f) => f.hasCognitiveCare);
    }

    return Promise.resolve(result);
  },

  getPrograms: async (): Promise<GovProgram[]> => {
    return Promise.resolve(sampleProgramsData);
  },

  getUpdates: async (): Promise<GovUpdate[]> => {
    return Promise.resolve(sampleUpdatesData);
  },

  getResources: async (): Promise<GovResource[]> => {
    return Promise.resolve(sampleResourcesData);
  },
};
