import React, { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
import './Resources.css';

type Category = 'UVA' | 'Local Cville' | 'Legal/ICE' | 'Health & Wellness' | 'Scholarships & Careers';

type ResourceItem = {
  id: string;
  name: string;
  description: string;
  category: Category;
  tags: string[];
  url?: string;
  phone?: string;
  address?: string;
};

const RESOURCES: ResourceItem[] = [
  {
    id: 'mss',
    name: 'UVA Multicultural Student Services',
    description:
      'Programs, mentoring, and community for Hispanic/Latine students and other multicultural communities at UVA.',
    category: 'UVA',
    tags: ['community', 'mentoring', 'support'],
    url: 'https://multicultural.virginia.edu/',
  },
  {
    id: 'shpe-uva',
    name: 'Society of Hispanic Professional Engineers (SHPE)',
    description:
      'Professional development, mentorship, and a strong community for Hispanic engineers.',
    category: 'UVA',
    tags: ['engineering', 'career', 'mentorship'],
    url: 'https://shpe.org/about-shpe/',
  },
  {
    id: 'student-legal-services',
    name: 'UVA Student Legal Services',
    description:
      'Low-cost legal consultations for eligible UVA students on a range of matters (not a replacement for immigration counsel).',
    category: 'UVA',
    tags: ['legal', 'consultation'],
    url: 'https://sls.virginia.edu/',
  },

  {
    id: 'lajc',
    name: 'Legal Aid Justice Center (LAJC) — Immigration Justice',
    description:
      'Virginia-based legal advocacy, including immigration justice and deportation defense support.',
    category: 'Local Cville',
    tags: ['legal', 'immigration', 'advocacy'],
    url: 'https://www.justice4all.org/',
  },
  {
    id: 'sin-barreras',
    name: 'Sin Barreras (Without Barriers) — Charlottesville',
    description:
      'Community organization providing services, clinics, and resources for the local Latino community.',
    category: 'Local Cville',
    tags: ['community', 'services', 'spanish'],
    url: 'https://www.sinbarrerascville.org/',
  },
  {
    id: 'irc-cville',
    name: 'International Rescue Committee — Charlottesville',
    description:
      'Resettlement services and support for refugees and immigrants in the Charlottesville area.',
    category: 'Local Cville',
    tags: ['resettlement', 'services'],
    url: 'https://www.rescue.org/united-states/charlottesville-va',
  },
  {
    id: 'international-neighbors',
    name: 'International Neighbors — Charlottesville',
    description:
      'Local nonprofit connecting neighbors to support immigrants and refugees with practical needs.',
    category: 'Local Cville',
    tags: ['neighbors', 'support'],
    url: 'https://internationalneighbors.org/',
  },

  {
    id: 'aclu-kyr',
    name: 'ACLU — Know Your Rights (Immigrants)',
    description:
      'Clear guides on your rights when interacting with ICE and law enforcement. Printable cards in English/Español.',
    category: 'Legal/ICE',
    tags: ['know your rights', 'guides', 'spanish'],
    url: 'https://www.aclu.org/know-your-rights/immigrants-rights',
  },
  {
    id: 'nilc',
    name: 'National Immigration Law Center (NILC)',
    description:
      'Policy, resources, and updates affecting low-income immigrants and their families.',
    category: 'Legal/ICE',
    tags: ['policy', 'legal'],
    url: 'https://www.nilc.org/',
  },
  {
    id: 'uwd-kyr',
    name: 'United We Dream — Know Your Rights Toolkit',
    description:
      'Community-friendly KYR materials, emergency planning, and rapid response tips.',
    category: 'Legal/ICE',
    tags: ['community', 'emergency plan'],
    url: 'https://unitedwedream.org/toolbox/know-your-rights/',
  },
  {
    id: 'immigration-equality',
    name: 'Immigration Equality',
    description:
      'Legal support and resources for LGBTQ+ and HIV-positive immigrants.',
    category: 'Legal/ICE',
    tags: ['lgbtq+', 'legal'],
    url: 'https://immigrationequality.org/',
  },

  {
    id: '988-es',
    name: '988 Lifeline',
    description:
      '24/7 free and confidential support for people in distress. Marca 988 y presiona 2 para Español.',
    category: 'Health & Wellness',
    tags: ['mental health', 'hotline', 'spanish'],
    url: 'https://988lifeline.org/help-yourself/en-espanol/',
    phone: '988',
  },
  {
    id: 'ndvh',
    name: 'National Domestic Violence Hotline',
    description:
      '24/7 Support. Call 1−800−799−SAFE (7233) or text “START” to 88788. Services en Español available.',
    category: 'Health & Wellness',
    tags: ['safety', 'hotline', 'spanish'],
    url: 'https://988lifeline.org/',
    phone: '1-800-799-7233',
  },

  {
    id: 'scholar-shpe',
    name: 'ScholarSHPE',
    description:
      'With over 1,500 scholarships awarded since 2018 totaling over $6,000,000, SHPE is actively narrowing the gap in the Hispanic STEM education pipeline. Apply Now!',
    category: 'Scholarships & Careers',
    tags: ['funding', 'aid'],
    url: 'https://shpe.org/engage/programs/scholarshpe/',
  },
  {
    id: 'hsf',
    name: 'Hispanic Scholarship Fund (HSF)',
    description:
      'Scholarship programs, mentorship, and career development opportunities.',
    category: 'Scholarships & Careers',
    tags: ['funding', 'mentorship'],
    url: 'https://www.hsf.net/',
  },
];

const CATEGORIES: Category[] = [
  'UVA',
  'Local Cville',
  'Legal/ICE',
  'Health & Wellness',
  'Scholarships & Careers',
];

function useBookmarks() {
  const [bookmarks, setBookmarks] = useState<string[]>(() => {
    try {
      return JSON.parse(localStorage.getItem('laic.bookmarks') || '[]');
    } catch {
      return [];
    }
  });
  useEffect(() => {
    localStorage.setItem('laic.bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);
  const toggle = (id: string) =>
    setBookmarks((b) => (b.includes(id) ? b.filter((x) => x !== id) : [...b, id]));
  return { bookmarks, toggle };
}

export default function Resources() {
  const [query, setQuery] = useState('');
  const [activeCats, setActiveCats] = useState<Category[]>([]);
  const [view, setView] = useState<'cards' | 'list'>('cards');
  const [openAccordions, setOpenAccordions] = useState<Record<string, boolean>>({ kyr: true });
  const { bookmarks, toggle } = useBookmarks();

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return RESOURCES.filter((r) => {
      const inCats = activeCats.length ? activeCats.includes(r.category) : true;
      const inText = q
        ? [r.name, r.description, r.category, r.tags.join(' ')].join(' ').toLowerCase().includes(q)
        : true;
      return inCats && inText;
    });
  }, [query, activeCats]);

  const toggleCat = (c: Category) =>
    setActiveCats((arr) => (arr.includes(c) ? arr.filter((x) => x !== c) : [...arr, c]));

  const copy = async (text?: string) => {
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
    } catch {}
  };

  const isBookmarked = (id: string) => bookmarks.includes(id);

  return (
    <div className="resources-page">
      <Header />
      <main className="resources-main">
        <section className="resources-hero">
          <h1 className="resources-title">Resources</h1>
          <p className="resources-tag">
            Curated support for UVA Hispanics and our Charlottesville community — legal, wellness, and opportunity hubs.
          </p>
          <div className="resources-controls">
            <input
              aria-label="Search resources"
              className="resources-search"
              placeholder="Search by name, tag, or description"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <div className="resources-view">
              <button
                className={view === 'cards' ? 'active' : ''}
                onClick={() => setView('cards')}
                aria-pressed={view === 'cards'}
              >
                Cards
              </button>
              <button
                className={view === 'list' ? 'active' : ''}
                onClick={() => setView('list')}
                aria-pressed={view === 'list'}
              >
                List
              </button>
            </div>
          </div>

          <div className="resources-chips" role="group" aria-label="Filter by category">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => toggleCat(c)}
                className={activeCats.includes(c) ? 'chip active' : 'chip'}
                aria-pressed={activeCats.includes(c)}
              >
                {c}
              </button>
            ))}
            {activeCats.length > 0 && (
              <button className="chip clear" onClick={() => setActiveCats([])}>Clear</button>
            )}
          </div>
        </section>

        <section className="resources-accordion">
          <Accordion
            id="kyr"
            title="Know Your Rights — Quick Tips"
            open={!!openAccordions['kyr']}
            onToggle={() =>
              setOpenAccordions((s) => ({ ...s, kyr: !s['kyr'] }))
            }
          >
            <ul className="kyr-list">
              <li>
                You have the right to remain silent. You do not have to open the door unless agents show a warrant signed by a judge with your name and address.
              </li>
              <li>
                Ask for an attorney. Do not sign anything you do not understand. You can refuse to sign documents.
              </li>
              <li>
                Prepare an emergency plan: a trusted contact, childcare instructions, and copies of key documents.
              </li>
            </ul>
            <div className="kyr-links">
              <a href="https://www.aclu.org/know-your-rights/immigrants-rights" target="_blank" rel="noreferrer">ACLU KYR</a>
              <a href="https://unitedwedream.org/toolbox/know-your-rights/" target="_blank" rel="noreferrer">United We Dream</a>
            </div>
          </Accordion>
        </section>

        <section className={view === 'cards' ? 'resources-grid' : 'resources-list'}>
          <AnimatePresence mode="popLayout">
            {filtered.map((r) => (
              <motion.article
                key={r.id}
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                className={view === 'cards' ? 'resource-card' : 'resource-row'}
              >
                <div className="resource-top">
                  <span className="resource-cat">{r.category}</span>
                  <button
                    className={isBookmarked(r.id) ? 'bookmark active' : 'bookmark'}
                    onClick={() => toggle(r.id)}
                    aria-pressed={isBookmarked(r.id)}
                    aria-label={isBookmarked(r.id) ? 'Remove bookmark' : 'Bookmark'}
                  >
                    ★
                  </button>
                </div>
                <h3 className="resource-name">{r.name}</h3>
                <p className="resource-desc">{r.description}</p>
                {/* tags removed per request */}
                <div className="resource-actions">
                  {r.url && (
                    <a className="btn" href={r.url} target="_blank" rel="noreferrer">Open</a>
                  )}
                  {r.phone && (
                    <button className="btn secondary" onClick={() => copy(r.phone)}>Copy phone</button>
                  )}
                  {r.address && (
                    <a
                      className="btn secondary"
                      target="_blank"
                      rel="noreferrer"
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(r.address)}`}
                    >
                      Map
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </section>
      </main>
    </div>
  );
}

function Accordion({
  id,
  title,
  open,
  onToggle,
  children,
}: {
  id: string;
  title: string;
  open: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="accordion">
      <button
        className="accordion-header"
        aria-expanded={open}
        aria-controls={`sect-${id}`}
        onClick={onToggle}
      >
        <span>{title}</span>
        <span className="accordion-icon" aria-hidden>
          {open ? '−' : '+'}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`sect-${id}`}
            className="accordion-panel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="accordion-inner">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
