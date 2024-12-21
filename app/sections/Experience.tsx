import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, ChevronRight } from 'lucide-react';

const experiences = [
  {
    title: 'Développeur Web',
    company: 'Entreprise A',
    date: 'Janvier 2020 - Présent',
    description: 'Développement d\'applications web modernes en utilisant React et Next.js.',
    highlights: [
      'Développement frontend avec React et Next.js',
      'Optimisation des performances',
      'Architecture de solutions scalables'
    ],
    color: 'from-blue-500 to-indigo-500'
  },
  {
    title: 'Ingénieur Logiciel',
    company: 'Entreprise B',
    date: 'Juin 2018 - Décembre 2019',
    description: 'Conception et mise en œuvre de solutions logicielles pour des clients variés.',
    highlights: [
      'Développement full-stack',
      'Gestion de projets clients',
      'Amélioration des processus'
    ],
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Stagiaire Développeur',
    company: 'Entreprise C',
    date: 'Mai 2017 - Août 2017',
    description: 'Assistance dans le développement de projets internes et amélioration des processus.',
    highlights: [
      'Support au développement',
      'Documentation technique',
      'Tests et débogage'
    ],
    color: 'from-teal-500 to-emerald-500'
  }
];

const ExperienceCard = ({ experience, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl blur-xl opacity-50 group-hover:opacity-75 transition-all duration-300" />
      
      <div className="relative p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800">
        <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r rounded-t-xl opacity-75 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))` }}/>
        
        <div className="flex items-start gap-4">
          <div className="hidden sm:flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br opacity-90 group-hover:opacity-100 transition-opacity duration-300">
            <Briefcase className="h-6 w-6 text-white" />
          </div>
          
          <div className="flex-1 space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{experience.title}</h3>
              <p className="text-lg font-medium text-gray-600 dark:text-gray-300">{experience.company}</p>
              <div className="flex items-center gap-2 mt-2 text-sm text-gray-500 dark:text-gray-400">
                <Calendar className="h-4 w-4" />
                <span>{experience.date}</span>
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-300">{experience.description}</p>

            <ul className="space-y-2">
              {experience.highlights.map((highlight, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 + idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300"
                >
                  <ChevronRight className="h-4 w-4" />
                  <span>{highlight}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Experience() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300"
          >
            Mon Expérience
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-4 h-1 w-20 bg-gradient-to-r from-blue-500 to-primary-600 mx-auto rounded-full"
          />
        </div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}