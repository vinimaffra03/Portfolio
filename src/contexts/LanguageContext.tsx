import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'pt';

interface Translations {
  [key: string]: {
    en: string;
    pt: string;
  };
}

const translations: Translations = {
  // Header
  'nav.projects': { en: 'projects', pt: 'projetos' },
  'nav.stacks': { en: 'stacks', pt: 'tecnologias' },
  'nav.manifesto': { en: 'manifesto', pt: 'manifesto' },
  
  // Hero Section
  'hero.trust': { en: 'Trusted by 10+ companies', pt: 'Confiado por 10+ empresas' },
  'hero.line1': { en: 'Websites are the clearest representation', pt: 'Sites são a representação mais clara' },
  'hero.line2': { en: 'of a company\'s technological prowess.', pt: 'do poderio tecnológico de uma empresa.' },
  'hero.line3': { en: 'I build them.', pt: 'Eu os construo.' },
  'hero.cta': { en: 'Let\'s Work Together', pt: 'Vamos Trabalhar Juntos' },
  'hero.ctaSubtext': { en: 'Schedule a 30-minute call', pt: 'Agende uma chamada de 30 minutos' },
  'hero.scroll': { en: 'Scroll Down', pt: 'Role para Baixo' },
  
  // Projects Section
  'projects.title': { en: 'Featured Projects', pt: 'Projetos em Destaque' },
  
  // Manifesto Section
  'manifesto.title': { en: 'Manifesto', pt: 'Manifesto' },
  'manifesto.subtitle': { en: 'My Work Philosophy', pt: 'Minha Filosofia de Trabalho' },
  'manifesto.text1': { en: 'From the beginning to where I stand today in my career', pt: 'Do início até onde estou hoje na minha carreira' },
  'manifesto.experience': { en: '[3+ years]', pt: '[3+ anos]' },
  'manifesto.text2': { en: ', I\'ve understood that', pt: ', entendi que' },
  'manifesto.websites': { en: 'websites', pt: 'sites' },
  'manifesto.text3': { en: 'are not mere portals to connect users to companies. They mean something more: they are a', pt: 'não são meros portais para conectar usuários a empresas. Eles significam algo mais: são uma' },
  'manifesto.representation': { en: 'clear representation of technological prowess', pt: 'representação clara do poderio tecnológico' },
  'manifesto.text4': { en: 'of a company. By having a', pt: 'de uma empresa. Ao ter um' },
  'manifesto.by': { en: '', pt: '' },
  'manifesto.strongWebsite': { en: 'strong and captivating website', pt: 'site forte e cativante' },
  'manifesto.text5': { en: ', it becomes clear that the company is a', pt: ', fica claro que a empresa é uma' },
  'manifesto.force': { en: 'force to be reckoned with', pt: 'força a ser reconhecida' },
  'manifesto.text6': { en: 'in its market.', pt: 'em seu mercado.' },
  
  // Stacks Section
  'stacks.title': { en: 'Tech Stack', pt: 'Tecnologias' },
  'stacks.subtitle': { en: 'Technologies I work with', pt: 'Tecnologias que trabalho' },
  'stacks.main': { en: 'Main Tools & Languages', pt: 'Principais Ferramentas & Linguagens' },
  'stacks.learning': { en: 'Currently Learning', pt: 'Aprendendo Atualmente' },
  
  // Contact Section
  'contact.title': { en: 'Let\'s Connect', pt: 'Vamos Conectar' },
  'contact.heading': { en: 'Ready to build something', pt: 'Pronto para construir algo' },
  'contact.highlight': { en: 'amazing', pt: 'incrível' },
  'contact.description': { en: 'I\'m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.', pt: 'Estou sempre aberto a discutir novos projetos, ideias criativas ou oportunidades para fazer parte da sua visão.' },
  'contact.button': { en: 'Get in Touch', pt: 'Entre em Contato' },
  
  // Footer
  'footer.prompt': { en: 'user@', pt: 'usuário@' },
  'footer.domain': { en: 'viniciusmaffra.dev', pt: 'viniciushmdem15@gmail.com' },
  'footer.command': { en: 'whoami', pt: 'quem_eu_sou' },
};

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'pt' : 'en');
  };

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
