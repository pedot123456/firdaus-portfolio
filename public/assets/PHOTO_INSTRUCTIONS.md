# Asset Injection Instructions

## Profile Photo
Place your headshot at this exact path:
  public/assets/headshot.jpg

Then in src/routes/index.tsx and src/routes/resume.tsx, replace the
placeholder <div> elements with:
  <img src="/assets/headshot.jpg" alt="Muhammad Firdaus Zahin" />

Recommended: 800×1000px JPG, portrait orientation, compressed to <200KB.

## Resume PDF
Place your resume PDF at:
  public/assets/resume.pdf

The "Download CV" button in the Header and Footer will then work automatically.
