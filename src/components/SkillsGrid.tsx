import SkillCard from './SkillCard'
import { skills } from '../data/skills'

interface Props {
  title?: string
  subtitle?: string
}

export default function SkillsGrid({
  title = 'Technologies & Tools',
  subtitle = 'The stack I reach for when solving real problems.',
}: Props) {
  return (
    <div>
      {(title || subtitle) && (
        <div className="section__header">
          <p className="section__label">Tech Stack</p>
          <h2 className="section__title">{title}</h2>
          {subtitle && <p className="section__subtitle">{subtitle}</p>}
        </div>
      )}

      <div className="skills-bento">
        {skills.map((skill, i) => (
          <SkillCard key={skill.id} skill={skill} delay={i * 35} />
        ))}
      </div>
    </div>
  )
}
