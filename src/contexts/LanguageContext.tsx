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
  'hero.trust': { en: 'Full-stack / Web3 / automation', pt: 'Full-stack / Web3 / automacao' },
  'hero.line1': { en: 'I build web products,', pt: 'Eu construo produtos web,' },
  'hero.line2': { en: 'Web3 apps and backend systems.', pt: 'apps Web3 e sistemas backend.' },
  'hero.line3': { en: 'From idea to working software.', pt: 'Da ideia ao software funcionando.' },
  'hero.cta': { en: 'Let\'s Work Together', pt: 'Vamos trabalhar juntos' },
  'hero.ctaSubtext': { en: 'React, Next.js, Python, APIs and smart contracts', pt: 'React, Next.js, Python, APIs e smart contracts' },
  'hero.scroll': { en: 'Scroll Down', pt: 'Role para baixo' },

  // Projects Section
  'projects.title': { en: 'Featured Projects', pt: 'Projetos em Destaque' },

  // Manifesto Section
  'manifesto.title': { en: 'Manifesto', pt: 'Manifesto' },
  'manifesto.subtitle': { en: 'My Work Philosophy', pt: 'Minha filosofia de trabalho' },
  'manifesto.text1': { en: 'From my first projects to the systems I build today', pt: 'Dos meus primeiros projetos aos sistemas que construo hoje' },
  'manifesto.experience': { en: '[3+ years]', pt: '[3+ anos]' },
  'manifesto.text2': { en: ', I have learned that', pt: ', aprendi que' },
  'manifesto.websites': { en: 'software', pt: 'software' },
  'manifesto.text3': { en: 'should not only look good. It should solve a real workflow, reduce manual work, and become a', pt: 'nao deve apenas parecer bom. Ele deve resolver um fluxo real, reduzir trabalho manual e se tornar uma' },
  'manifesto.representation': { en: 'clear operational advantage', pt: 'vantagem operacional clara' },
  'manifesto.text4': { en: 'for the people using it. By building a', pt: 'para quem usa. Ao construir um' },
  'manifesto.by': { en: '', pt: '' },
  'manifesto.strongWebsite': { en: 'reliable automation system', pt: 'sistema de automacao confiavel' },
  'manifesto.text5': { en: ', a business can move faster, understand more, and become a', pt: ', um negocio consegue se mover mais rapido, entender mais e se tornar uma' },
  'manifesto.force': { en: 'more capable operation', pt: 'operacao mais capaz' },
  'manifesto.text6': { en: 'in its market.', pt: 'no seu mercado.' },

  // Stacks Section
  'stacks.title': { en: 'Tech Stack', pt: 'Tecnologias' },
  'stacks.subtitle': { en: 'Technologies I use to ship real products', pt: 'Tecnologias que uso para entregar produtos reais' },
  'stacks.main': { en: 'Main Tools & Languages', pt: 'Principais ferramentas e linguagens' },
  'stacks.learning': { en: 'Also Building With', pt: 'Tambem construo com' },

  // Contact Section
  'contact.title': { en: 'Let\'s Connect', pt: 'Vamos conectar' },
  'contact.heading': { en: 'Ready to build something', pt: 'Pronto para construir algo' },
  'contact.highlight': { en: 'useful', pt: 'util' },
  'contact.description': { en: 'I am open to web apps, Web3 products, API integrations, Python automation, dashboards and backend work.', pt: 'Estou aberto a web apps, produtos Web3, integracoes de API, automacao Python, dashboards e backend.' },
  'contact.button': { en: 'Get in Touch', pt: 'Entre em contato' },

  // Footer
  'footer.prompt': { en: 'builder@', pt: 'builder@' },
  'footer.domain': { en: 'viniciusmaffra.dev', pt: 'viniciusmaffra.dev' },
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
