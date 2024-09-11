import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          footer: {
            copyright: 'Made with ❤️ by'
          },
          navigation: {
            about: 'About',
            projects: 'Projects',
            contact: 'Contact'
          },
          resume: {
            button: 'Check out my resume',
            pai: {
              company: 'PAI',
              location: 'Bogotá, Colombia',
              title: 'Frontend Developer',
              achievements: [
                'Built app workflow and designed the frontend architecture.',
                'Implemented the frontend and collaborated in the backend development.',
                'Generated Backend with Node.js and Express.',
                'Implemented authentication and authorization with JWT.',
                'Implemented a real-time chat with Socket.io.',
                'Implemented a real-time chat with Socket.io.',
              ],
            },
            freelancer: {
              company: 'Freelancer',
              location: 'Bogotá, Colombia',
              title: 'Frontend Developer',
              achievements: [
                'Built app woresume.freelancer.achievements.0',
                'Implemresume.freelancer.achievements.1',
                'Generated Bresume.freelancer.achievements.2',
              ],
            },
          },
          home: {
            title: 'Hi, I´m Javier Moreno',
            subtitle: 'Frontend developer, amateur cyclist and enthusiastic marathon runner',
            description: '+3 years of experience building and maintaining responsive web applications, from Bogotá, Colombia.',
            description2: 'I am a self-taught developer passionate about learning new technologies and creating attractive and functional products.',
            contactMe: 'Contact me!',
            checkResume: 'Check out my resume'
          },
          work: { 
            title: 'Work'
          }
        }
      },
      es: {
        translation: {
          footer: {
            copyright: 'Hecho con ❤️ por'
          },
          navigation: {
            about: 'Acerca de',
            projects: 'Proyectos',
            contact: 'Contacto'
          },
          resume: {
            button: 'Revisa mi currículum',
            pai: {
              company: 'PAI',
              location: 'Bogotá, Colombia',
              title: 'Desarrollador frontend',
              achievements: [
                'Construí el flujo de trabajo de la aplicación y diseñé la arquitectura frontend.',
                'Implementé el frontend y colaboré en el desarrollo del backend.',
                'Generé el Backend con Node.js y Express.',
                'Implementé autenticación y autorización con JWT.',
                'Implementé un chat en tiempo real con Socket.io.',
                'Implementé un chat en tiempo real con Socket.io.',
              ],
            },
            freelancer: {
              company: 'Freelancer',
              location: 'Bogotá, Colombia',
              title: 'Desarrollador frontend',
              achievements: [
                'Construí una aplicación web completa sobre un Menú Digital para restaurantes. Utilicé HTML5, CSS3 y JavaScript. Es móvil responsive.',
                'Implementé el frontend y colaboré en el desarrollo del backend.',
                'Generé el Backend con Node.js y Express.',
                'Implementé autenticación y autorización con JWT.',
                'Implementé un chat en tiempo real con Socket.io.',
              ],
            },
          },
          home: {
            title: 'Hola, soy Javier Moreno',
            subtitle: 'Desarrollador frontend, ciclista amateur y entusiasta de las carreras de maratón',
            description: '+3 años de experiencia en la construcción y mantenimiento de aplicaciones web responsivas, de Bogotá, Colombia.',
            description2: 'Soy un desarrollador autodidacta apasionado por aprender nuevas tecnologías y crear productos atractivos y funcionales.',
            contactMe: '¡Contáctame!',
            checkResume: 'Revisa mi currículum'
          },
          work: {
            title: 'Experiencia'
          }
        }
      }
    },
    lng: "en", // idioma por defecto
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

  export default i18n;