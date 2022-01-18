import React from 'react';

export default function Home() {
  return (
    <div className='container-md'>
      <h1>Home Page</h1>
        <div class="row align-items-start best-work-div">
          <h3 id="myWork" class="col-2">My Best Work</h3>
            <section class="codeRefractor col-8 best-work">
              <h4>Not So Subtle Santa!<div><a href="https://github.com/nandodavila/Wish-List">Repo</a></div></h4>
                <a href="https://wish-list-fscg.herokuapp.com/">
                  <img src="./images/NotSoSubtleSanta1.PNG" alt="not-so-subtle-santa" className="img-fluid" />
                </a>
            </section>
        </div>

        <div class="row align-items-start more-work"> 
          <h3 id='moreWork'>Other Projects</h3>    
            <section class="work offset-md-2 col-md-3">
              <h4>Work Day Scheduler<div><a href="https://github.com/nandodavila/Work-Day-Scheduler">Repo</a></div></h4>
                <a href="https://nandodavila.github.io/Work-Day-Scheduler/">
                  <img src="./assets/images/WorkDayScheduler.PNG" alt="exImg" class="img-fluid rounded"/>
                </a>
            </section>

            <section class="work offset-md-2 col-md-3">
              <h4>Weekly Meal Planner<div><a href="https://github.com/nandodavila/Weekly-Meal-Planners">Repo</a></div></h4>
              <a href="https://nandodavila.github.io/Weekly-Meal-Planners/">
                <img src="./assets/images/DragAndDrop!.PNG" alt="exImg" class="img-fluid rounded"/>
              </a>
            </section>

            <section class="work offset-md-2 col-md-3">
              <h4>Tech Blog<div><a href="https://github.com/nandodavila/Tech-Blog">Repo</a></div></h4>
              <a href="https://limitless-reef-64896.herokuapp.com/">
                <img src="./assets/images/TechBlog.PNG" alt="exImg" class="img-fluid rounded"/>
              </a>
            </section>
        </div>

    </div>
  );
}