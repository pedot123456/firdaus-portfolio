import type { BlogPost } from '../types'

/** Words per minute used for reading-time calculation. */
const WPM = 200

/** Utility: count words and return ceiling minutes. */
function calcRT(content: string): number {
  return Math.ceil(content.trim().split(/\s+/).length / WPM)
}

const POST_1_CONTENT = `
Running 25 events in a single academic year sounds like a badge of honour — and it genuinely is — but nobody warns you about the invisible logistics tax that compounds with every project you add to the calendar.

I've been the President of Ambassador of Marketing Youth (ARMy) at UTP for just over a year. In that time, our committee has executed everything from intimate 30-person mental-health talks to 350-person inter-university networking nights. Here is the honest version of what I learned.

## 1. A living calendar beats a static Gantt chart

The first instinct when leading multiple events is to build a beautiful Gantt chart in Excel and share it once. The problem: it's outdated the moment the first venue cancels. We switched to a shared Notion board where every committee lead could drag tasks, mark blockers, and @-mention team members in real time. Visibility collapsed from hours to seconds.

## 2. Delegation is only as strong as your handover documentation

I used to delegate tasks verbally in WhatsApp. Accountability was fuzzy and follow-ups ate half my week. We introduced a one-page "task brief" template — problem statement, deliverable, deadline, escalation contact, and a definition of done. Completion rates improved noticeably within a month.

## 3. Post-mortems are your cheapest source of future insight

After every event, no matter how tired the team is, we run a 20-minute plus/delta retrospective. Two columns: what went well, what we change next time. That living document is now 40 pages long and has saved us from repeating at least a dozen costly mistakes.

## 4. Energy management matters more than time management

A committee member running on three hours of sleep will produce lower-quality work in four hours than a rested member produces in ninety minutes. I learned to schedule intensive production days early in the planning cycle, leave buffer days near the event for emergencies, and aggressively guard rest time in the final 72 hours before showtime.

## 5. Your sponsor relationships compound

The first event you bring a sponsor into is transactional. By the third, you are a known entity they plan budget for in advance. Invest in post-event report cards with real attendance data and photos. Send them before they ask. That discipline is why ARMy's sponsorship pipeline doubled in value across one academic year.

Leadership at scale is not glamorous. It is a thousand small decisions, a tolerance for ambiguity, and an obsessive commitment to the people around you.
`

const POST_2_CONTENT = `
When I first enrolled in Information Technology at UTP, cybersecurity was something I read about in news articles — distant, technical, intimidating. Two years, one PETRONAS-hosted hackathon, and several CTF competitions later, I want to share the map I wish I had at the start.

## Start with the fundamentals, not the tools

Every beginner wants to learn Kali Linux and run Metasploit immediately. I understand the appeal. But if you do not know how TCP/IP works, what a buffer overflow is at the memory level, or why SQL injection succeeds, you are memorising magic spells rather than learning a craft.

Invest your first three months in:

- Networking fundamentals (CompTIA Network+ curriculum is free on YouTube)
- Basic Linux command-line fluency
- How HTTP/S actually works at the packet level
- One scripting language — Python is the obvious choice

## Pick one domain and go deep

Cybersecurity is enormous. Penetration testing, digital forensics, malware analysis, cloud security, application security, OT/ICS security — these are separate careers, not chapters in the same book. Trying to learn everything in parallel produces shallow knowledge everywhere.

I chose OSINT and data-driven threat intelligence because it mapped to my strengths in Python and data analysis. That focus is what allowed me to build something coherent enough to place in the SECURE NEX Hackathon.

## Build, then break, then explain

The learning cycle that works: build a small web app, then deliberately try to exploit it, then write a paragraph explaining what the vulnerability was and how it could be fixed. This forced articulation is where understanding crystallises.

## Capture-the-Flag competitions are your gym

TryHackMe and HackTheBox provide structured environments. CTFtime.org lists upcoming competitions. The community is genuinely welcoming to newcomers. Pick a beginner-friendly CTF and commit to finishing three challenges before giving up on a room.

Cybersecurity is fundamentally a creative discipline — it rewards curiosity, lateral thinking, and tenacity more than raw memorisation. If you have those, you already have the most important prerequisites.
`

const POST_3_CONTENT = `
Mention Oracle APEX in a room full of web developers and you will get polite dismissal at best. I get it — the name conjures images of enterprise procurement cycles and legacy Oracle stacks. That reputation is genuinely unfair, and it is costing a lot of teams significant engineering hours.

## What APEX actually is

Oracle APEX is a low-code, web application development platform that runs entirely inside an Oracle Database. You build applications in a browser-based IDE, and the platform generates the application runtime automatically. The key insight is this: if your project is fundamentally data-in, data-out — forms, reports, dashboards, workflows — APEX can produce production-quality output in a fraction of the time a hand-coded alternative requires.

## Where it outcompetes traditional stacks

For data-heavy internal tools, the comparison is stark. A properly scoped dashboard that might take two weeks in React plus a REST API backend can be assembled and deployed in two days in APEX — with pagination, authentication, and CRUD operations handled by the platform.

I used APEX during coursework for an administrative reporting system at UTP. What would have required a full Node.js + PostgreSQL backend and custom frontend took three evenings to build, with polished UI that my lecturer assumed was a paid template.

## The genuine limitations

APEX is not the right tool for consumer-facing applications that need highly custom UI, real-time features, or complex client-side interactivity. It also assumes an Oracle Database backend, which adds infrastructure cost outside of academic or enterprise settings where Oracle licences already exist.

## The verdict

If you are a data-oriented developer working in analytics, finance, education administration, or enterprise IT — APEX deserves a genuine evaluation. Do not let the brand association stop you from picking up the most productive tool in a particular problem domain.
`

export const blogPosts: BlogPost[] = [
  {
    slug: 'lessons-from-25-campus-events',
    title: 'Lessons From Running 25+ Campus Events',
    excerpt:
      'What I actually learned leading ARMy UTP through a year of large-scale event production — delegation, energy management, and the compounding value of post-mortems.',
    date: '2025-03-15',
    dateFormatted: 'March 15, 2025',
    tags: ['Leadership', 'Events', 'Strategy'],
    content: POST_1_CONTENT,
    readingTime: calcRT(POST_1_CONTENT),
    featured: true,
    author: 'Muhammad Firdaus Zahin',
  },
  {
    slug: 'getting-started-cybersecurity-student',
    title: "Getting Started with Cybersecurity: A Student's Honest Guide",
    excerpt:
      'The actual learning path — avoiding the tool-first trap, picking one domain, and using CTF competitions as your gym for building real skills.',
    date: '2025-01-20',
    dateFormatted: 'January 20, 2025',
    tags: ['Cybersecurity', 'Learning', 'Career'],
    content: POST_2_CONTENT,
    readingTime: calcRT(POST_2_CONTENT),
    featured: false,
    author: 'Muhammad Firdaus Zahin',
  },
  {
    slug: 'why-oracle-apex-is-underrated',
    title: 'Why Oracle APEX Is Underrated for Rapid Development',
    excerpt:
      "The enterprise reputation doesn't tell the full story. For data-heavy internal tooling, APEX can outpace a hand-coded stack by an order of magnitude.",
    date: '2024-11-08',
    dateFormatted: 'November 8, 2024',
    tags: ['Oracle APEX', 'Tools', 'Development'],
    content: POST_3_CONTENT,
    readingTime: calcRT(POST_3_CONTENT),
    featured: false,
    author: 'Muhammad Firdaus Zahin',
  },
]

/** Find a single post by slug, returns undefined if not found. */
export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug)
}
