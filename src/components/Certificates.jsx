'use client';

import { useState, useEffect, useCallback } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import RevealOnScroll from './RevealOnScroll';

export default function Certificates() {
  const { t } = useLanguage();
  const c = t.certificates;
  const [active, setActive] = useState(null);

  const close = useCallback(() => setActive(null), []);

  useEffect(() => {
    if (!active) return;
    const onKey = (e) => {
      if (e.key === 'Escape') close();
    };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [active, close]);

  return (
    <section className="section certificates" id="certificates">
      <div className="container">
        <RevealOnScroll>
          <h2 className="section__title">
            <span className="section__number">{c.sectionNumber}</span> {c.title}
          </h2>
        </RevealOnScroll>
        <div className="certificates__grid">
          {c.items.map((cert) => (
            <RevealOnScroll key={cert.credentialId}>
              <article className="cert-card">
                <button
                  type="button"
                  className="cert-card__preview"
                  onClick={() => setActive(cert)}
                  aria-label={`${c.viewCertificate}: ${cert.name}`}
                >
                  <iframe
                    className="cert-card__frame"
                    src={`${cert.pdf}#toolbar=0&navpanes=0&scrollbar=0&view=Fit`}
                    title={cert.name}
                    tabIndex={-1}
                    aria-hidden="true"
                  />
                  <span className="cert-card__overlay">
                    <span className="cert-card__overlay-inner">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 3h6v6M14 10l7-7M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" />
                      </svg>
                      {c.viewCertificate}
                    </span>
                  </span>
                </button>
                <div className="cert-card__body">
                  <div className="cert-card__org">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="8" r="6" />
                      <path d="M8.21 13.89 7 23l5-3 5 3-1.21-9.12" />
                    </svg>
                    <span>{cert.issuer}</span>
                  </div>
                  <h3 className="cert-card__name">{cert.name}</h3>
                  <dl className="cert-card__meta">
                    <div className="cert-card__meta-row">
                      <dt>{c.issuedLabel}</dt>
                      <dd>{cert.date}</dd>
                    </div>
                    <div className="cert-card__meta-row">
                      <dt>{c.credentialIdLabel}</dt>
                      <dd className="cert-card__credential">{cert.credentialId}</dd>
                    </div>
                  </dl>
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--outline cert-card__link"
                  >
                    {c.showCredential}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 3h6v6M10 14 21 3M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" />
                    </svg>
                  </a>
                </div>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>

      {active && (
        <div
          className="cert-modal"
          role="dialog"
          aria-modal="true"
          aria-label={active.name}
          onClick={close}
        >
          <div className="cert-modal__inner" onClick={(e) => e.stopPropagation()}>
            <div className="cert-modal__header">
              <div className="cert-modal__heading">
                <h3 className="cert-modal__title">{active.name}</h3>
                <span className="cert-modal__sub">{active.issuer} · {active.date}</span>
              </div>
              <button
                type="button"
                className="cert-modal__close"
                onClick={close}
                aria-label={c.closeLabel}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>
            </div>
            <iframe
              className="cert-modal__frame"
              src={`${active.pdf}#view=Fit`}
              title={active.name}
            />
          </div>
        </div>
      )}
    </section>
  );
}
