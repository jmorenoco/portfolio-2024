import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          contact: {
            title: 'Contact me!',
            intro: 'I\'d love to discuss how we can work together and take your project to the next level.',
            name: 'Type your name *',
            nameTitle: 'Name accepts only letters and blanks.',
            email: 'Type your email *',
            emailTitle: 'Please enter a valid email address.',
            comments: 'Leave me your comments *',
            send: 'Send message',
            response: 'Thank you very much, I will get back to you asap.',
            error: 'An error has occurred. Please try again later.'
          },
          footer: {
            copyright: 'Made with ❤️ by'
          },
          navigation: {
            title: 'Select an option',
            about: 'About',
            projects: 'Projects',
            contact: 'Contact'
          },
          resume: {
            button: 'Check out my resume',
            pai: { 
              start: '05/2021',
              end: {
                label: 'Present',
                dateTime: new Date().getFullYear().toString(),
              },
              company: 'PAI',
              location: 'Bogotá, Colombia',
              title: 'Frontend Developer',
              achievements: [
                'Migrated the main project’s styles from SASS to Tailwind CSS. This migration resulted in faster compilation, improved performance, and an optimized user experience.',
                'Identified and corrected multiple inconsistencies between Figma prototypes and implemented designs. These actions improved visual cohesion and facilitated better understanding for the end user.',
                'Reviewed and optimized the semantic structure of several projects, significantly improving the websites accessibility and SEO.',
                'Integrated Stripe Elements into several client projects, facilitating secure and efficient payment processes.',
                'Managed implementations using Laravel, InertiaJS, and VueJS, and effectively integrated data consumed from REST APIs.',
              ],
            },
            freelancer: {
              start: '04/2020',
              end: '05/2021',
              company: 'Freelancer',
              location: 'Bogotá, Colombia',
              title: 'Frontend Developer',
              achievements: [
                'Built app workflow and designed foundations and each component of the same.',
                'Implemented the application with with React JS and Redux.',
                'Generated Backend with NodeJS, Mongoose and Express',
                'Made complete project about Digital Menu for restaurants. I use stack HTML5, CSS3 and JavaScript. Mobile responsive.'
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
          }, 
          projects: {
            title: 'Some things I’ve done...',
            intro: 'I’ve worked on variety of projects over the years but these are the ones that I’m most proud of. Although, some of them doesn\'t exist; others I\'m working on them right now. Please, check out the code and contribute if you have ideas for how it can be improved.',
            pai: {
              name: 'pai-subscriptions',
              description: 'HTML5 and CSS3 Layout exercise. Responsive.',
              link: {
                href: 'https://javandresmoreno.github.io/pai-subscriptions/',
                label: 'pai-subscriptions',
              }
            },
            arrozPaisaRexton: {
              name: 'arroz-paisa-rexton',
              description: 'HTML5 and CSS3 Layout exercise. Responsive.',
              link: {
                href: 'https://javandresmoreno.github.io/arroz-paisa-rexton/',
                label: 'arroz-paisa-rexton',
              }
            },
            eventApp: {
              name: 'event-app',
              description: 'Event app with React and Firebase.',
              link: {
                href: 'https://javandresmoreno.github.io/event-app/',
                label: 'event-app',
              }
            },
            ipAddressTracker: {
              name: 'ip-address-tracker',
              description: 'IP address tracker with React and IP Geolocation API.',
              link: {
                href: 'https://javandresmoreno.github.io/ip-address-tracker/',
                label: 'ip-address-tracker',
              }
            },
            digitalMenu: {
              name: 'digital-menu',
              description: 'Digital menu for restaurants with React and Firebase.',
              link: {
                href: 'https://javandresmoreno.github.io/digital-menu/',
                label: 'digital-menu',
              }
            },
          },
        }
      },
      es: {
        translation: {
          contact: {
            title: '¡Contáctame!',
            intro: 'Me encantaría discutir cómo podemos trabajar juntos y llevar tu proyecto al siguiente nivel.',
            name: 'Escribe tu nombre *',
            nameTitle: 'El nombre debe contener solo letras y espacios.',
            email: 'Escribe tu email *',
            emailTitle: 'Por favor, introduce una dirección de correo electrónico válida.',
            comments: 'Deja tus comentarios *',
            send: 'Enviar mensaje',
            response: 'Muchas gracias, me pondré en contacto contigo lo más pronto posible.',
            error: 'Se ha producido un error. Por favor, inténtalo de nuevo más tarde.'
          },
          footer: {
            copyright: 'Hecho con ❤️ por'
          },
          navigation: {
            title: 'Selecciona una opción',
            about: 'Acerca de',
            projects: 'Proyectos',
            contact: 'Contacto'
          },
          resume: {
            button: 'Revisa mi currículum',
            pai: {
              start: '05/2021',
              end: {
                label: 'Presente',
                dateTime: new Date().getFullYear().toString(),
              },
              company: 'PAI',
              location: 'Bogotá, Colombia',
              title: 'Desarrollador frontend',
              achievements: [
                'Migre los estilos del proyecto principal de SASS a Tailwind CSS. Esta migración resultó en una compilación más rápida, un mejor rendimiento y una experiencia de usuario optimizada.',
                'Identifiqué y corregí múltiples inconsistencias entre los prototipos de Figma y los diseños implementados. Estas acciones mejoraron la cohesión visual y facilitaron una mejor comprensión para el usuario final.',
                'Revisé y optimicé la estructura semántica de varios proyectos, mejorando significativamente la accesibilidad y el SEO de los sitios web.',
                'Integré Stripe Elements en varios proyectos de clientes, facilitando procesos de pago seguros y eficientes.',
                'Administré implementaciones utilizando Laravel, InertiaJS y VueJS, y integré con éxito datos consumidos de APIs REST.',
              ],
            },
            freelancer: {
              start: '04/2020',
              end: '05/2021',
              company: 'Freelancer',
              location: 'Bogotá, Colombia',
              title: 'Desarrollador frontend',
              achievements: [
                'Diseñé y construí el flujo de trabajo de la aplicación, así como los fundamentos y cada componente del mismo.',
                'Implementé la aplicación con React JS y Redux.',
                'Generé Backend con NodeJS, Mongoose y Express',
                'Realicé un proyecto completo sobre un Menú Digital para restaurantes. Utilicé stack HTML5, CSS3 y JavaScript. Mobile responsive.'
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
          }, 
          projects: {
            title: 'Algunos proyectos que he hecho...',
            intro: 'He trabajado en varios proyectos a lo largo de los años, pero estos son los que me siento más orgulloso. Aunque algunos no existen, otros los estoy desarrollando en este momento. Por favor, revisa el código y contribuye si tienes ideas para mejorarlo.',
            
            pai: {
              name: 'pai-subscriptions',
              description: 'Ejercicio de diseño de HTML5 y CSS3. Responsivo.',
              link: {
                href: 'https://javandresmoreno.github.io/pai-subscriptions/',
                label: 'pai-subscriptions',
              }
            },
            arrozPaisaRexton: {
              name: 'arroz-paisa-rexton',
              description: 'Ejercicio de diseño de HTML5 y CSS3. Responsivo.',
              link: {
                href: 'https://javandresmoreno.github.io/arroz-paisa-rexton/',
                label: 'arroz-paisa-rexton',
              }
            },
            eventApp: {
              name: 'event-app',
              description: 'Aplicación de eventos con React y Firebase.',
              link: {
                href: 'https://javandresmoreno.github.io/event-app/',
                label: 'event-app',
              }
            },
            ipAddressTracker: {
              name: 'ip-address-tracker',
              description: 'Rastreador de IP con React y API de geolocalización.',
              link: {
                href: 'https://javandresmoreno.github.io/ip-address-tracker/',
                label: 'ip-address-tracker',
              }
            },
            digitalMenu: {
              name: 'digital-menu',
              description: 'Menú digital para restaurantes con React y Firebase.',
              link: {
                href: 'https://javandresmoreno.github.io/digital-menu/',
                label: 'digital-menu',
              }
            },
          }
        }
      }
    },
    lng: "es", 
    fallbackLng: "es",
    interpolation: {
      escapeValue: false
    }
  });

  export default i18n;