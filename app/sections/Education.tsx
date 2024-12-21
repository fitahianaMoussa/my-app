import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, ChevronRight, Building2 } from 'lucide-react';

const education = [
  {
    degree: 'Master en Informatique',
    institution: 'Université de Technologie',
    date: 'Septembre 2018 - Juin 2020',
    description: 'Spécialisation en développement web et applications mobiles.',
    highlights: [
      'Développement Web Avancé',
      'Applications Mobiles',
      'Architecture Logicielle'
    ],
    color: 'from-violet-500 to-purple-500'
  },
  {
    degree: 'Licence en Informatique',
    institution: 'Université des Sciences',
    date: 'Septembre 2015 - Juin 2018',
    description: 'Formation en programmation, bases de données et systèmes d\'information.',
    highlights: [
      'Programmation',
      'Bases de Données',
      'Systèmes d\'Information'
    ],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    degree: 'Baccalauréat Scientifique',
    institution: 'Lycée Général',
    date: 'Septembre 2012 - Juin 2015',
    description: 'Formation générale avec un accent sur les mathématiques et les sciences.',
    highlights: [
      'Mathématiques',
      'Sciences Physiques',
      'Informatique'
    ],
    color: 'from-emerald-500 to-teal-500'
  },
];

const EducationCard = ({ edu, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl blur-xl opacity-50 group-hover:opacity-75 transition-all duration-300" />
      
      <div className="relative p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r rounded-t-xl opacity-75 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))` }}/>
        
        <div className="flex items-start gap-6">
          <div className="hidden sm:flex flex-col items-center gap-4">
            <div className="h-12 w-12 flex items-center justify-center rounded-full bg-gradient-to-br opacity-90 group-hover:opacity-100 transition-opacity duration-300">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <div className="w-px h-full bg-gradient-to-b opacity-20" />
          </div>
          
          <div className="flex-1 space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{edu.degree}</h3>
              <div className="flex items-center gap-2 mt-2 text-gray-600 dark:text-gray-300">
                <Building2 className="h-4 w-4" />
                <span className="text-lg">{edu.institution}</span>
              </div>
              <div className="flex items-center gap-2 mt-2 text-sm text-gray-500 dark:text-gray-400">
                <Calendar className="h-4 w-4" />
                <span>{edu.date}</span>
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-300">{edu.description}</p>

            <div className="border-t border-gray-100 dark:border-gray-800 pt-4">
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Points clés</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {edu.highlights.map((highlight, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 + idx * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300"
                  >
                    <ChevronRight className="h-4 w-4 text-gray-400" />
                    <span>{highlight}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Education() {
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
            Diplômes et Formations
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
          {education.map((edu, index) => (
            <EducationCard key={index} edu={edu} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}