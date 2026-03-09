import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Frontend Developer</h4>
                <h5>Hero MotoCorp Ltd. — Gurgaon, Haryana</h5>
              </div>
              <h3>Nov 2023 – Present</h3>
            </div>
            <p>
              Integrated Micro Frontend architecture using Webpack Module Federation
              for independent deployment and scalability. Led complete frontend
              revamp for 200K+ active users, improving LCP by 45% and reducing TTI
              by 2.3s (30% higher engagement). Migrated legacy codebase to
              React.js & TypeScript, reducing bundle size by 35%. Led code reviews,
              mentored junior developers, and resolved critical production blockers.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Associate Software Engineer</h4>
                <h5>Daffodil Software Pvt. Ltd. — Gurgaon, Haryana</h5>
              </div>
              <h3>Oct 2020 – Nov 2023</h3>
            </div>
            <p>
              Developed and maintained 5+ full-scale web and mobile applications
              using React.js, Next.js, and React Native with optimized performance
              and reusable architecture. Individually developed multiple projects
              from scratch, handling the complete lifecycle from requirement analysis
              to production deployment. Worked on SaaS projects.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Teaching Assistant – Intern</h4>
                <h5>Coding Ninjas — Remote</h5>
              </div>
              <h3>Mar 2020 – Jul 2020</h3>
            </div>
            <p>
              Assisted 300+ students in mastering Data Structures and debugging
              assignments. Conducted live support and structured problem-solving
              sessions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
