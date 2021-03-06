import React, {Fragment} from 'react'
import {useSkillsContext} from '../services/skills'
import {Skill} from '../ui/Skill'
import styles from './Skills.module.scss'
import {FocusVisibleProvider} from '../services/focus'

export const Skills = () => {
    const {skills} = useSkillsContext()
    const sortedSkill = Object.values(skills.reduce((acc, s) => ({
        ...acc,
        [s.group]: acc[s.group] ? acc[s.group].concat(s) : [s],
    }), {}))

    return (
        <FocusVisibleProvider>
            <div className={styles.skills}>{
                sortedSkill.map((group, i, {length}) => (
                    <Fragment key={i}>
                        <section className={styles.column}>{
                            group.map((skill, j) => <Skill skill={skill} key={'' + i + j}/>)
                        }</section>
                        {(i < length - 1) && <div className={styles.divider}/>}
                    </Fragment>
                ))}
            </div>
        </FocusVisibleProvider>
    )
}
