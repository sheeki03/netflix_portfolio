// localDataService.ts
import portfolioData from './portfolio.json';
import { 
  ProfileBanner, 
  Project, 
  Skill, 
  TimelineItem, 
  Certification, 
  ContactMe, 
  WorkPermit 
} from '../types';

export async function getProfileBanner(): Promise<ProfileBanner> {
  return portfolioData.profilebanner;
}

export async function getProjects(): Promise<Project[]> {
  return portfolioData.allProjects;
}

export async function getSkills(): Promise<Skill[]> {
  return portfolioData.allSkills;
}

export async function getTimeline(): Promise<TimelineItem[]> {
  return portfolioData.allTimelines as TimelineItem[];
}

export async function getCertifications(): Promise<Certification[]> {
  return portfolioData.allCertifications;
}

export async function getContactMe(): Promise<ContactMe> {
  return portfolioData.contactme;
}

export async function getWorkPermit(): Promise<WorkPermit> {
  const data = portfolioData.workpermit;
  return {
    ...data,
    expiryDate: new Date(data.expiryDate)
  };
}