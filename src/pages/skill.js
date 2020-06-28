import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faVuejs, faUnity } from '@fortawesome/free-brands-svg-icons'

import SEO from '../components/seo'

const SkillPage = () => (
  <div className="article">
    <SEO title="Skill" />
    <h2>Skill</h2>
    <section>
      <span className="icon big">
        <FontAwesomeIcon icon={faReact} />
      </span>
      <h3>React</h3>
      <p>
        React is the first JS framework I learn. I like how it merge JavaScript
        with HTML. (and called it JSX) But some function like using listener,
        conditional and loop, and scoped CSS is very frustrated to get used to,
        unlike Vue.
      </p>
      <p>
        I have some personal and group project made using React, included this
        website (This website made with GatsbyJS)
      </p>
    </section>
    <section>
      <span className="icon big">
        <FontAwesomeIcon icon={faVuejs} />
      </span>
      <h3>Vue</h3>
      <p>
        I learn Vue after I'm quite fluent in React and it's a very smooth
        process. Core concepts are the same except having more tools to help us
        (like having v-for, v-if instead of weird code madness in React) and
        overall make code less verbose and easier to understand. Also, VsCode's
        Emmet works in Vue.
      </p>
      <p>
        Like React, I have some personal and group project made using Vue, but I
        have more experience in Vue because I'm using it in my internship.
      </p>
    </section>
    <section>
      <span className="icon big">
        <FontAwesomeIcon icon={faUnity} />
      </span>
      <h3>Unity</h3>
      <p>
        I learn Unity because I'm interested in game development before I learn
        web development with React and rarely touch this subject again. It's the
        only game engine I learn. (two if you count Pygame) even though I don't
        know Unity that much. (and I suck at vector) Learning Unity give me alot
        of knowledge for C#.
      </p>
      <p>
        I actually using Unity in my department project. I made a game with
        friend for Science Week at my Faculty.
      </p>
    </section>
    <section>
      <h3>Some more skill I have (group by language)</h3>
    </section>
  </div>
)

export default SkillPage
