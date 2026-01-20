
export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  tags: string[];
}

export interface Education {
  degree: string;
  school: string;
  year: string;
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  link?: string;
}
