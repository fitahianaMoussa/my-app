import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Linkedin, Github, Twitter, Mail, User, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error when user starts typing
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Nom requis';
    if (!formData.email) {
      newErrors.email = 'Email requis';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email invalide';
    }
    if (!formData.message) newErrors.message = 'Message requis';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      setIsLoading(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
      setIsLoading(false);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <Mail className="h-8 w-8 text-primary-500" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300"
          >
            Contactez-moi
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-4 h-1 w-20 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`block w-full pl-12 pr-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border ${
                      errors.name ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'
                    } focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors`}
                    placeholder="Votre nom"
                  />
                </div>
                {errors.name && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-2 text-sm text-red-500"
                  >
                    {errors.name}
                  </motion.p>
                )}
              </div>

              <div>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`block w-full pl-12 pr-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border ${
                      errors.email ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'
                    } focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors`}
                    placeholder="Votre email"
                  />
                </div>
                {errors.email && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-2 text-sm text-red-500"
                  >
                    {errors.email}
                  </motion.p>
                )}
              </div>

              <div>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className={`block w-full pl-12 pr-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border ${
                      errors.message ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'
                    } focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors`}
                    placeholder="Votre message"
                  />
                </div>
                {errors.message && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-2 text-sm text-red-500"
                  >
                    {errors.message}
                  </motion.p>
                )}
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-3 rounded-lg hover:from-primary-600 hover:to-primary-700 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    <span>Envoyer</span>
                  </>
                )}
              </button>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-100 rounded-lg text-center"
                >
                  Message envoyé avec succès!
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:pl-12 flex flex-col justify-between"
          >
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 mb-8">
              <h3 className="text-2xl font-semibold mb-6">Retrouvez-moi sur</h3>
              <div className="space-y-6">
                <a
                  href="https://linkedin.com/in/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  <div className="h-12 w-12 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                    <Linkedin className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="font-medium">LinkedIn</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Connectons-nous professionnellement</p>
                  </div>
                </a>

                <a
                  href="https://github.com/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  <div className="h-12 w-12 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
                    <Github className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                  </div>
                  <div>
                    <h4 className="font-medium">GitHub</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Découvrez mes projets</p>
                  </div>
                </a>

                <a
                  href="https://twitter.com/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  <div className="h-12 w-12 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                    <Twitter className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-medium">Twitter</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Suivez mes actualités</p>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}