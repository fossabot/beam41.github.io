import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Collapse } from 'react-collapse'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

import styles from './collapse-list.module.scss'

const CollapseList = ({ name, itemList }) => {
  const [opened, setOpened] = useState(false)
  return (
    <div className={styles.collapseList}>
      <label>
        <div className={styles.bar + ' ' + (opened ? styles.opened : '')}>
          <p>{name}</p>
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
        <input
          className="fully-hidden"
          aria-hidden="true"
          type="checkbox"
          checked={opened}
          onChange={e => setOpened(e.target.checked)}
        />
      </label>
      <div className={styles.listCover}>
        <Collapse isOpened={opened}>
          {itemList.map(({ title, desc }) => (
            <div>
              {title} {desc}
            </div>
          ))}
        </Collapse>
      </div>
    </div>
  )
}

CollapseList.propTypes = {
  name: PropTypes.string.isRequired,
  itemList: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
    }),
  ).isRequired,
}

export default CollapseList
