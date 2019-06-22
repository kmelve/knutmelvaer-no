import React from 'react'
import css from './presentation.module.css'

const Collaborators = ({name, id}) => <span className={css.collaborator} key={id}>
  {name}
</span>

const addLineBreaks = string =>
  string.split('\n').map((text, index) => (
    <React.Fragment key={`${text}-${index}`}>
      {text}
      <br />
    </React.Fragment>
  ))

const languageRender = language => {
  const languages = {
    'no-NO': 'Norwegian',
    'no-NB': 'Norwegian',
    'en-EN': 'English'
  }
  return (<> in{' '}
    <span className={css.lang}>
      {languages[language] || language}
    </span></>)
}

export default function Presentation (props) {
  const {
    collaborators,
    date,
    description,
    id,
    language,
    link,
    place,
    presentationType,
    title
  } = props.node
  return (<article key={id} className={css.container}>
    <h4 className={css.header}>
      { link
        ? <a className={css.headerLink} href={link} target='_blank' rel='noreferer noopener'>{title}</a>
        : <span>{title}</span>
      }

    </h4>
    {description && <blockquote className={css.description}>{addLineBreaks(description)}</blockquote>}
    A <span className={css.type}>{presentationType}</span> on <time className={css.time}>{date}</time> at <span className={css.place}>{place}</span>{language && languageRender(language)}
    {
      collaborators.length > 0 &&
        <span> with {collaborators.map(Collaborators)}</span>
    }
  </article>)
}
