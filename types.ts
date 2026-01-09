
import { ReactNode } from 'react';

export enum WindowType {
  HOME = 'HOME',
  JOURNEY = 'JOURNEY',
  PROJECTS = 'PROJECTS',
  CONTACT = 'CONTACT',
  QUALIFICATIONS = 'QUALIFICATIONS',
}

export interface WindowState {
  id: WindowType;
  title: string;
  isOpen: boolean;
  isMinimized: boolean;
  zIndex: number;
  content: ReactNode;
}

export interface ProjectLink {
  label: string;
  url: string;
}

export interface ProjectData {
  id: string;
  title: string;
  description: string;
  story?: string; // Added for the detailed backstory
  tech: string[];
  image: string;
  links?: ProjectLink[];
  status: 'completed' | 'development' | 'highlight'; // Added highlight status
  color: string; 
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  icon: 'education' | 'work' | 'tech';
}
