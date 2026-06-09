/**
 * personal.ts — Single source of truth for contact & identity data.
 * Import this wherever name, links, or contact info is needed.
 */
export const personal = {
  /* Identity */
  name:      'Muhammad Firdaus Zahin',
  fullName:  'Muhammad Firdaus Zahin Bin Nurus Sham',
  nameDisplay: 'Muhammad\nFirdaus Zahin', // multi-line hero break
  role:      'IT Undergraduate & Digital Solutions Builder',
  university: 'Universiti Teknologi PETRONAS (UTP)',
  programme:  'Bachelor of Information Technology (Hons), Minor in Corporate Management',
  scholarship: 'MARA (Full Scholarship)',
  graduation:  'Jan 2028 (Expected)',
  internship:  'Sept 2026 – Apr 2027',
  location:    'Perak, Malaysia',

  /* Contact */
  email:        'muhammad_22011567@utp.edu.my',
  emailAlt:     'firdausforcaamskin@gmail.com',
  phone:        '+60 11-3143 5653',
  linkedin:     'https://www.linkedin.com/in/muhammad-firdaus-zahin-bin-nurus-sham-3ba334341',
  linkedinLabel: 'linkedin.com/in/muhammad-firdaus-zahin-bin-nurus-sham-3ba334341',
  github:         'https://github.com/pedot123456',
  githubLabel:    'github.com/pedot123456',
  instagram:      'https://www.instagram.com/zhnshm/',
  instagramLabel: 'instagram.com/zhnshm',

  /* Assets — files live in public/ (Vite serves them at root).
     Spaces are percent-encoded so the path is a valid URL in all browsers. */
  photo:          '/FIRDAUS%20stand%20left.png',
  cvPath:         '/(UTP)%2022011567%20MUHAMMAD%20FIRDAUS%20ZAHIN%20BIN%20NURUS%20SHAM%20IT.pdf',
  cvDownloadName: 'Firdaus_Zahin_Resume.pdf',
  linkedinQr:     '/FIRDAUS%20ZAHIN%20LINKEDIN.png',

  /* References */
  references: [
    {
      name:  'Ts Dr Halimaton Saadiah Bt Hakimi',
      email: 'halimaton.hakimi@utp.edu.my',
      phone: '+60 5 368 7433',
      dept:  'Department of Computing, UTP',
    },
    {
      name:  'Ts. Saipunidzam Bin Mahamad',
      email: 'saipunidzam_mahamad@utp.edu.my',
      phone: '+60 5 368 7408',
      dept:  'Department of Computing, UTP',
    },
  ],
}
