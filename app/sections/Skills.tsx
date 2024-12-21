'use client';

import { motion } from 'framer-motion';
import { Code2, Database ,Terminal, Settings, Users, GitBranch, WebhookIcon } from 'lucide-react';

const getIconComponent = (category: string) => {
  switch (category) {
    case 'Technologies Backend':
      return Terminal;
    case 'Technologies Frontend':
      return WebhookIcon;
    case 'Outils et Méthodologies de Développement':
      return GitBranch;
    case 'Conception et Modélisation':
      return Database;
    case 'Méthodologies':
      return Settings;
    case 'Outils Collaboratifs et de Gestion':
      return Users;
    default:
      return Code2;
  }
};

export default function Skills() {
  const skills = [
    {
      category: 'Technologies Backend',
      items: [
        {
          name: 'PHP',
          description: 'Développement de solutions robustes et évolutives.',
          level: 90
        },
        {
          name: 'Laravel',
          description: "Création d'applications web complexes avec des API REST.",
          level: 85
        },
        {
          name: 'Symfony',
          description: 'Framework PHP pour des applications modulaires et maintenables.',
          level: 80
        },
      ],
    },
    {
      category: 'Technologies Frontend',
      items: [
        {
          name: 'React.js',
          description: 'Applications SPA interactives et performantes.',
          level: 88
        },
        {
          name: 'Next.js',
          description: 'Applications web modernes avec SSR/SSG pour de meilleures performances SEO.',
          level: 85
        },
        {
          name: 'TypeScript',
          description: 'Typage statique pour un développement fiable.',
          level: 82
        },
      ],
    },
    {
      category: 'Outils et Méthodologies de Développement',
      items: [
        {
          name: 'Docker',
          description: 'Conteneurisation et orchestration pour un environnement isolé.',
          level: 75
        },
        {
          name: 'Git / GitHub / GitLab',
          description: 'Gestion du contrôle de version et collaboration en équipe.',
          level: 85
        },
        {
          name: 'Jira / Trello',
          description: 'Suivi et gestion de projet en méthodologie Agile Scrum.',
          level: 80
        },
      ],
    },
    {
      category: 'Conception et Modélisation',
      items: [
        {
          name: 'UML',
          description: 'Modélisation pour une architecture claire et évolutive.',
          level: 78
        },
        {
          name: 'Merise',
          description: 'Analyse fonctionnelle et conception de bases de données relationnelles.',
          level: 75
        },
      ],
    },
    {
      category: 'Méthodologies',
      items: [
        {
          name: 'Agile Scrum',
          description: 'Gestion de projet itérative et collaborative.',
          level: 85
        },
      ],
    },
    {
      category: 'Outils Collaboratifs et de Gestion',
      items: [
        {
          name: 'Jira',
          description: 'Suivi des tâches et planification de sprint.',
          level: 82
        },
        {
          name: 'Trello',
          description: 'Tableaux Kanban pour organiser les workflows.',
          level: 85
        },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-background via-background to-background/95 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1.5 mb-4 rounded-full bg-primary-500/10 text-primary-500 text-sm font-medium">
            Mes expertises
          </span>
          <h2 className="text-4xl font-bold mb-4">
            Compétences <span className="text-primary-500">Techniques</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((category, index) => {
            const IconComponent = getIconComponent(category.category);
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-primary-600/10 rounded-2xl blur-xl transition-opacity duration-500 opacity-0 group-hover:opacity-100" />
                
                <div className="relative bg-secondary-50 dark:bg-secondary-900/50 rounded-xl p-6 backdrop-blur-sm border border-secondary-200 dark:border-secondary-800 hover:border-primary-500/50 transition-colors duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-lg bg-primary-500/10 text-primary-500">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-semibold">{category.category}</h3>
                  </div>

                  <ul className="space-y-6">
                    {category.items.map((skill, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: (index * 0.1) + (idx * 0.1) }}
                        className="relative"
                      >
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-medium">{skill.name}</h4>
                          <span className="text-sm text-primary-500">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-secondary-200 dark:bg-secondary-800 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: (index * 0.1) + (idx * 0.1) }}
                            className="h-full bg-gradient-to-r from-primary-500 to-primary-600 rounded-full"
                          />
                        </div>
                        <p className="mt-2 text-sm text-foreground/70">{skill.description}</p>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}