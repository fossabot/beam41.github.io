import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faVuejs, faUnity } from '@fortawesome/free-brands-svg-icons'

import CollapseList from '../components/collapse-list'
import SEO from '../components/seo'

const SkillPage = () => (
  <div className="article">
    <SEO title="Skill" />
    <h2>Skill</h2>
    <div className="section-1">
      <section>
        <span className="icon big">
          <FontAwesomeIcon icon={faReact} />
        </span>
        <h3>React</h3>
        <p>
          React is the first JS framework I learn. I like how it merge
          JavaScript with HTML. (and called it JSX) But some function like using
          listener, conditional and loop, and scoped CSS is very frustrated to
          get used to, unlike Vue.
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
          process. Core concepts are the same except having more tools to help
          us (like having v-for, v-if instead of weird code madness in React)
          and overall make code less verbose and easier to understand. Also,
          VsCode's Emmet works in Vue.
        </p>
        <p>
          Like React, I have some personal and group project made using Vue, but
          I have more experience in Vue because I'm using it in my internship.
        </p>
      </section>
      <section>
        <span className="icon big">
          <FontAwesomeIcon icon={faUnity} />
        </span>
        <h3>Unity</h3>
        <p>
          I learn Unity because I'm interested in game development before I
          learn web development with React and rarely touch this subject again.
          It's the only game engine I learn. (two if you count Pygame) even
          though I don't know Unity that much. (and I suck at vector) Learning
          Unity give me alot of knowledge for C#.
        </p>
        <p>
          I actually using Unity in my department project. I made a game with
          friend for Science Week at my Faculty.
        </p>
      </section>
    </div>
    <section>
      <h3 className="more">Some more skill I have</h3>
      <div className="col-list">
        <CollapseList
          name="JavaScript"
          itemList={[
            {
              title: 'Express',
              desc: `The backend framwork I've use once in my class project. So, I have some experience with it, if it's only about api, not ejs.`,
            },
            {
              title: 'Angular',
              desc: `I've work with Angular in my project and in my department camp too. Compared to React and Vue, Angular is unnecessary complicated, so, I don't like it.`,
            },
          ]}
        />
        <CollapseList
          name="C#"
          itemList={[
            {
              title: 'ASP.NET',
              desc:
                'I uses ASP.NET as api server with some C# knowledge from Unity. I can work with it very easily.',
            },
          ]}
        />
        <CollapseList
          name="Other programming stuff"
          itemList={[
            {
              title: 'Python',
              desc: `The first language I learn. I've use a lot, writing simple script, in my project (I made a game from it with Pygame), and in my reserch class (with OpenCV, some NumPy and Matplotlib). I planned to learn Django.`,
            },
            {
              title: 'Java',
              desc: `I learn Java in OOP class and create one project from it. I prefer C# more because It's less verbose.`,
            },
            {
              title: 'UX/UI',
              desc: `I like to read design stuff on Internet. I know how to design and prototyping in Figma and Adobe XD, I'm better at UX than UI because I don't have much drawing skill.`,
            },
            {
              title: 'Flutter',
              desc: `I think it's have same component system as React. But without JSX it's so hard to look at the component code. Anyway I know how to write a simple app.`,
            },
            {
              title: 'Docker',
              desc: `I tries bundled my Node.js project with MongoDB once It's not so hard tho.`,
            },
            {
              title: 'CI/CD',
              desc: `I have little experience in CI/CD, like how I setup GitHub Action in this website.`,
            },
          ]}
        />
        <CollapseList
          name="Other non-programming stuff"
          itemList={[
            {
              title: 'Photography',
              desc: `I have 2 cameras. Old Canon 600d and new A7II. I don't know if My photos are good but everyone said they are. I know how to edit image too.`,
            },
            {
              title: 'Video Editing',
              desc: `I know Adobe Premiere Pro and DaVinci Resolve. but I prefer Adobe Premiere Pro.`,
            },
          ]}
        />
      </div>
    </section>
  </div>
)

export default SkillPage
