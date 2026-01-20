
import { SkillCategory, Experience, Education, Project } from './types';

export const NAV_LINKS = [
  { name: 'À propos', href: '#about' },
  { name: 'Compétences', href: '#skills' },
  { name: 'Expériences', href: '#experience' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Contact', href: '#contact' },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Systèmes & Cloud',
    skills: [
      { name: 'Linux (Debian/RHEL)', level: 90 },
      { name: 'Windows Server', level: 85 },
      { name: 'Virtualisation (VMware/Hyper-V)', level: 80 },
      { name: 'Cloud Infrastructure', level: 75 },
    ],
  },
  {
    title: 'Réseau & Sécurité',
    skills: [
      { name: 'Firewalls & VPN', level: 85 },
      { name: 'Protocoles Réseaux', level: 80 },
      { name: 'Sécurité Offensive/Défensive', level: 70 },
      { name: 'Audit de Sécurité', level: 75 },
    ],
  },
  {
    title: 'Automatisation & DevOps',
    skills: [
      { name: 'Scripting (Bash/Python)', level: 80 },
      { name: 'Ansible', level: 75 },
      { name: 'Docker', level: 70 },
      { name: 'Monitoring (Zabbix/Prometheus)', level: 85 },
    ],
  },
];

export const EXPERIENCES: Experience[] = [
  {
    role: 'Administrateur Systèmes – Exploitation IT',
    company: 'Entreprise de Service Numérique',
    period: 'Mai 2023 – Présent',
    description: "Mise en place de systèmes de sauvegarde complexes, gestion proactive des incidents critiques et optimisation continue des performances des serveurs de production.",
    tags: ['Backup', 'Incident Management', 'Performance Tuning', 'Linux'],
  },
  {
    role: 'Agent de Production – Exploitation IT',
    company: 'Solution IT Solutions',
    period: 'Fév 2023 – Avril 2024',
    description: "Support technique de niveau 2, automatisation des tâches de maintenance répétitives via scripting et mise en place de tableaux de bord de surveillance.",
    tags: ['Scripting', 'Monitoring', 'Level 2 Support', 'Automation'],
  },
];

export const EDUCATION: Education[] = [
  {
    degree: 'Licence Professionnelle – Architecture des Systèmes',
    school: 'ENSEM Casablanca',
    year: '2023',
  },
  {
    degree: 'Technicien Spécialisé en Réseaux Informatiques',
    school: 'ISTA Bejaad',
    year: '2021',
  },
];

export const PROJECTS: Project[] = [
  {
    title: 'Refonte Architecture Sauvegarde',
    description: 'Conception et déploiement d\'une infrastructure de sauvegarde résiliente pour une entreprise de 200 collaborateurs, garantissant un RTO < 4h.',
    tech: ['Veeam', 'NAS Synology', 'Cloud Object Storage'],
  },
  {
    title: 'Automatisation Provisioning Ansible',
    description: 'Développement de playbooks Ansible pour le déploiement automatisé de stacks serveurs web (LAMP) sur environnements hybrides.',
    tech: ['Ansible', 'Proxmox', 'CentOS'],
  },
  {
    title: 'Cluster Monitoring Zabbix',
    description: 'Mise en place d\'un cluster de monitoring haute disponibilité couvrant plus de 150 actifs réseau et serveurs avec alertes prédictives.',
    tech: ['Zabbix', 'Grafana', 'SNMP'],
  },
];
