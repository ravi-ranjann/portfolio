import React from "react";

const Interest = ({active}) => {
  return (
    <section className={active === 'interest' ? 'container active' : 'container'} id="blogs">
      <div className="blogs-content">
        <div className="main-title">
          <h2>
            Code <span>Portfolio</span>
            <span className="bg-text">Showcase </span>
          </h2>
        </div>
        <p className="port-text">
          Here I Code, and Improve My Problem Solving Skills.
          <br />
          PROGRAMMER | CODER | LEARNER
        </p>
        <div className="blogs">
          <div className="blog">
            <img src="img/leetcode.gif" alt="" />
            <div className="blog-text">
              <h4>
                <a href="https://leetcode.com/utkarssh_/">
                  LeetCode Code Vault
                </a>
              </h4>

              <p>
                "Solving challenging problems, showcasing algorithmic skills,
                helping to sharpen coding abilities, competing with others, and
                demonstrating expertise in problem-solving."
              </p>
            </div>
          </div>
          <div className="blog">
            <img src="img/gfg.gif" alt="" />
            <div className="blog-text">
              <h4>
                <a href="https://auth.geeksforgeeks.org/user/utkarshpaqzjs/practice">
                  {" "}
                  GeeksforGeeks Code Vault{" "}
                </a>
              </h4>
              <p>
                Expert in programming, problem-solving, and continuous learning.
                Notable achievements and contributions to the coding community.
                Passionate about coding and driving real-world solutions.
              </p>
            </div>
          </div>
          <div className="blog">
            <img src="img/hr.gif" alt="" />
            <div className="blog-text">
              <h4>
                <a href="https://www.hackerrank.com/utkarshpatidar01?hr_r=1">
                  {" "}
                  HackerRank Code Vault
                </a>
              </h4>
              <p>
                Skilled in coding, programming aptitude, and competitive
                programming. Demonstrated proficiency in solving complex coding
                challenges and delivering exceptional results. Committed to
                enhancing coding skills and embracing continuous improvement.
              </p>
            </div>
          </div>
          <div className="blog">
            <img src="img/blog3.jpg" alt="" />
            <div className="blog-text">
              <h4>Debbuging made easy with Web Inspector</h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Doloribus natus voluptas, eos obcaecati recusandae amet?
              </p>
            </div>
          </div>
          <div className="blog">
            <img src="img/port1.jpg" alt="" />
            <div className="blog-text">
              <h4>Get started with Web Design and UI Design</h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Doloribus natus voluptas, eos obcaecati recusandae amet?
              </p>
            </div>
          </div>
          <div className="blog">
            <img src="img/port3.jpg" alt="" />
            <div className="blog-text">
              <h4>This is what you need to know about Web Design</h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Doloribus natus voluptas, eos obcaecati recusandae amet?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interest;
