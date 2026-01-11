import { useLanguage } from "../contexts/LanguageContext";

const Manifesto = () => {
  const { t } = useLanguage();
  
  return (
    <section id="manifesto" className="py-32 matrix-dots relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section badge */}
          <div className="inline-flex items-center px-5 py-2.5 rounded-full border border-subtle bg-secondary/50 mb-12">
            <span className="font-mono text-sm text-foreground">
              {t('manifesto.title')} — {t('manifesto.subtitle')}
            </span>
          </div>

          {/* Philosophy text */}
          <p className="font-mono text-lg md:text-xl leading-relaxed text-secondary-foreground">
            {t('manifesto.text1')}{" "}
            <span className="text-highlight">{t('manifesto.experience')}</span>, {t('manifesto.text2')}{" "}
            <span className="text-foreground font-medium">{t('manifesto.websites')}</span> {t('manifesto.text3')}{" "}
            <span className="text-foreground font-medium">{t('manifesto.representation')}</span>{" "}
            {t('manifesto.text4')} {t('manifesto.by')}{" "}
            <span className="text-highlight font-medium">{t('manifesto.strongWebsite')}</span>, {t('manifesto.text5')}{" "}
            <span className="text-foreground font-medium">{t('manifesto.force')}</span>{" "}
            {t('manifesto.text6')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;
