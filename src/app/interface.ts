export interface TimeSlot {
    id: number;
    slot_timings: string;
  }
  
 export interface JobRole {
    id: number;
    job_title: string;
    package: string;
    job_description: string;
    job_requirements: string;
  }
  
  export interface DriveDetails {
    id: number;
    guid: string;
    drive_title: string;
    start_date: string;
    end_date: string;
    location: string;
    job_Roles: JobRole[] | null; // Array of JobRole or null if not available
    time_Slots: TimeSlot[] | null; // Array of TimeSlot or null if not available
    dt_created: string;
    dt_modified: string;
    expiry?: number; // Optional property with number type
    general_instructions?: string; // Optional property with string type
    instructions_for_exam?: string; // Optional property with string type
    minimum_system_requirements?: string; // Optional property with string type
    process?: string; // Optional property with string type
  }
  