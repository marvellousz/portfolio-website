export interface ProjectData {
  id: string;
  title: string;
  tags: string[];
  description: string;
  longDescription: string;
  features: string[];
  thumbnail: string;
  repo: string;
  liveUrl?: string;
  techStack: {
    frontend: string[];
    backend: string[];
    services: string[];
    deployment: string[];
  };
}

export interface ExperienceData {
  title: string;
  duration: string;
  location: string;
  description: string;
}
