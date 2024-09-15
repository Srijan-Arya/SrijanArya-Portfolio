import React, { useEffect } from 'react';
import './project.scss'; // Assuming the SCSS file handles your styles

const Project = () => {
  useEffect(() => {
    // DOM elements
    const $cont = document.querySelector('.cont');
    const $elsArr = Array.from(document.querySelectorAll('.el')); // Convert NodeList to Array
    const $closeBtnsArr = Array.from(document.querySelectorAll('.el__close-btn'));

    // Remove 's--inactive' class after a delay
    setTimeout(() => {
      $cont.classList.remove('s--inactive');
    }, 200);

    // Add click event to each element to activate it
    $elsArr.forEach(($el) => {
      $el.addEventListener('click', () => {
        if ($el.classList.contains('s--active')) return; // Prevent if already active
        $cont.classList.add('s--el-active');
        $el.classList.add('s--active');
      });
    });

    // Add click event to close buttons to deactivate the active element
    $closeBtnsArr.forEach(($btn) => {
      $btn.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevents event bubbling
        $cont.classList.remove('s--el-active');
        document.querySelector('.el.s--active').classList.remove('s--active');
      });
    });

    // Cleanup event listeners when component unmounts
    return () => {
      $elsArr.forEach(($el) => {
        $el.removeEventListener('click', () => {});
      });
      $closeBtnsArr.forEach(($btn) => {
        $btn.removeEventListener('click', () => {});
      });
    };
  }, []);
  return (
    <div className='project-container'>
      <div className="project-head">
        <h1>Some Projects</h1>
      </div>

        {/* Carousel for smaller screens */}
        <div className="slider">
          <a href="#slide-1">1</a>
          <a href="#slide-2">2</a>
          <a href="#slide-3">3</a>
          <a href="#slide-4">4</a>
          <a href="#slide-5">5</a>

          <div className="slides">
            <div id="slide-1">
            <h3>
              MovieFinder Pro
            </h3>
            <ul>
              <li>Built with <strong>Python</strong> and <strong>scikit-learn</strong>.</li>
              <li>Implemented <strong>Collaborative Filtering</strong> for recommendations.</li>
              <li>Combined content-based and collaborative filtering in a <strong>hybrid model</strong>.</li>
              <li>Optimized using <strong>GridSearchCV</strong>.</li>
              <li>Developed a user-friendly Streamlit interface</li>
            </ul>
              <div className="link-ball">
                <div className="link1"><a href="https://github.com/Srijan-Arya/MovieFinder-Pro" target='_blank'><img src="./gh.png" alt="" /></a></div>
                <div className="link2"><a href="https://srijan-moviefinder.streamlit.app/" target='_blank'><img src="./web.png" alt="" /></a></div>
              </div>
            
            </div>

            <div id="slide-2">
            <h3>
              Drug Recommender System
            </h3>
            <ul>
              <li>Built with <strong>Python</strong>, <strong>scikit-learn</strong>, and <strong>Streamlit</strong>.</li>
              <li>Used <strong>TF-IDF</strong> and <strong>cosine similarity</strong> for drug matching.</li>
              <li>Optimized via <strong>GridSearchCV</strong>.</li>
              <li>Evaluated with <strong>confusion matrix</strong> and <strong>classification report</strong>.</li>
              <li>Comprehensive drug coverage.</li>

            </ul>
              <div className="link-ball">
                <div className="link1"><a href="https://github.com/Srijan-Arya/Drug-Recommendation-System" target='_blank'><img src="./gh.png" alt="" /></a></div>
                <div className="link2"><a href="https://srijan-drsystem.streamlit.app/" target='_blank'><img src="./web.png" alt="" /></a></div>
              </div>
            </div>

            <div id="slide-3">
            <h3>
              Credit Classifier
            </h3>
            <ul>
              <li>Built with <strong>Python</strong> and <strong>scikit-learn</strong>.</li>
              <li>Pre-processed data: handled missing values, encoding, and scaling.</li>
              <li>Implemented <strong>Logistic Regression</strong>, <strong>Random Forest</strong>, and <strong>SVM</strong>.</li>
              <li>Optimized using <strong>GridSearchCV</strong>.</li>
              <li>Evaluated with <strong>confusion matrix</strong> and <strong>classification report</strong>.</li>
            </ul>
            <div className="link-ball">
                <div className="link1"><a href="https://github.com/Srijan-Arya/Credit-Score-Classifier" target='_blank'><img src="./gh.png" alt="" /></a></div>
              </div>
            </div>
            <div id="slide-4">
            <h3>
              Survey Webpage : CapX
            </h3>
            <ul>
              <li>Built with <strong>HTML</strong>, <strong>CSS</strong>, and <strong>JavaScript</strong>.</li>
              <li>Interactive survey with question cards, <strong>"Next"</strong> and <strong>"Back"</strong> buttons.</li>
              <li>Shows a <strong>title screen</strong> upon completion or refresh.</li>
              <li>Uses <strong>LocalStorage</strong></li>
            </ul>
            <div className="link-ball">
                <div className="link1"><a href="https://github.com/Srijan-Arya/CapX" target='_blank'><img src="./gh.png" alt="" /></a></div>
                <div className="link2"><a href="https://srijancapx.netlify.app/" target='_blank'><img src="./web.png" alt="" /></a></div>
              </div>
            </div>
            <div id="slide-5">
            <h3>
              Draco: First Website
            </h3>
            <ul>
              <li>My first real website project, created with <strong>HTML5</strong> and <strong>CSS3</strong>.</li>
              <li>Includes dynamic sections with hover animations and basic CSS animations.</li>
              <li>Fully responsive layout, styled with CSS <strong>Media Queries</strong> for different screen sizes.</li>
              <li>No JavaScript used except Hamburger Menu.</li>
            </ul>
            <div className="link-ball">
                <div className="link1"><a href="https://github.com/Srijan-Arya/malfoy" target='_blank'><img src="./gh.png" alt="" /></a></div>
                <div className="link2"><a href="https://srijan-arya.github.io/malfoy/" target='_blank'><img src="./web.png" alt="" /></a></div>
              </div>
            </div>
          </div>
        </div>


      <div className="cont s--inactive">
        {/* <!-- cont inner start --> */}
        <div className="cont__inner">
          {/* <!-- el start --> */}
          
          <div className="el one">
            <div className="el__overflow">
              <div className="el__inner">
                <div className="el__bg"></div>
                <div className="el__preview-cont">
                  <h2 className="el__heading">MovieFinder Pro</h2>
                </div>
                <div className="el__content">
                  <div className="el__text">
                    <div className="TechStack">
                    <h2>Key Features</h2>
                        <ul>
                          <li><strong>Dataset:</strong> Utilized the MovieLens 20M dataset for movie ratings and information.</li>
                          <li><strong>Algorithm:</strong> Implemented collaborative filtering for personalized movie recommendations.</li>
                          <li><strong>Interface:</strong> Built using Streamlit, allowing users to input movie titles or genres for recommendations.</li>
                          <li><strong>Model:</strong> Matrix factorization techniques used to predict user preferences.</li>
                          <li><strong>Deployment:</strong> Hosted on Colab, with large <code>.pkl</code> files managed via Google Drive.</li>
                          <li><strong>UI/UX:</strong> Streamlined with easy controls, improved layout, and optimized image display.</li>
                        </ul>
                      <div className="link-ball">
                        <div className="link1"><a href="https://github.com/Srijan-Arya/MovieFinder-Pro" target='_blank'><img src="./gh.png" alt="" /></a></div>
                        <div className="link2"><a href="https://srijan-moviefinder.streamlit.app/" target='_blank'><img src="./web.png" alt="" /></a></div>
                      </div>
                    </div>
                  </div>
                  <div className="el__close-btn"></div>
                </div>
              </div>
            </div>
            <div className="el__index">
              <div className="el__index-back">1</div>
              <div className="el__index-front">
                <div className="el__index-overlay" data-index="1">1</div>
              </div>
            </div>
          </div>
          {/* <!-- el end --> */}
          {/* <!-- el start --> */}
          <div className="el two">
            <div className="el__overflow">
              <div className="el__inner">
                <div className="el__bg"></div>
                <div className="el__preview-cont">
                  <h2 className="el__heading">Drug Recommender System</h2>
                </div>
                <div className="el__content">
                  <div className="el__text">
                    <div className="TechStack">
                    <h2>Drug Recommendation System</h2>
                      <ul>
                        <li><strong>Dataset:</strong> Drug data stored in a compressed format for faster loading.</li>
                        <li><strong>Algorithm:</strong> Recommendation logic based on similarity between drugs using matrix factorization.</li>
                        <li><strong>Interface:</strong> Developed with Streamlit for an interactive and user-friendly experience.</li>
                        <li><strong>Model Files:</strong> Compressed with <code>joblib</code> and handled via Git LFS for smooth deployment on GitHub.</li>
                        <li><strong>Deployment:</strong> Hosted with integration to Google Drive for managing large files.</li>
                        <li><strong>UI/UX:</strong> Custom styling with streamlined controls and layout for enhanced usability.</li>
                      </ul>
                      <div className="link-ball">
                        <div className="link1"><a href="https://github.com/Srijan-Arya/Drug-Recommendation-System" target='_blank'><img src="./gh.png" alt="" /></a></div>
                        <div className="link2"><a href="https://srijan-drsystem.streamlit.app/" target='_blank'><img src="./web.png" alt="" /></a></div>
                      </div>
                    </div>
                  </div>
                  <div className="el__close-btn"></div>
                </div>
              </div>
            </div>
            <div className="el__index">
              <div className="el__index-back">2</div>
              <div className="el__index-front">
                <div className="el__index-overlay" data-index="2">2</div>
              </div>
            </div>
          </div>
          {/* <!-- el end --> */}
          {/* <!-- el start --> */}
          <div className="el three">
            <div className="el__overflow">
              <div className="el__inner">
                <div className="el__bg"></div>
                <div className="el__preview-cont">
                  <h2 className="el__heading">Credit Classifier</h2>
                </div>
                <div className="el__content">
                  <div className="el__text">
                    <div className="TechStack">
                    <h2>Credit Classifier</h2>
                      <ul>
                        <li>Built using <strong>Python</strong> and <strong>scikit-learn</strong> for machine learning tasks.</li>
                        <li>Data pre-processing involves handling missing values, encoding categorical features, and scaling numerical data.</li>
                        <li>Implemented various classification algorithms including <strong>Logistic Regression</strong>, <strong>Random Forest</strong>, and <strong>SVM</strong>.</li>
                        <li>Optimized model performance through <strong>GridSearchCV</strong> for hyperparameter tuning.</li>
                        <li>Used <strong>confusion matrix</strong> and <strong>classification report</strong> for performance evaluation.</li>
                        <li>Developed a simple interface to input features and get creditworthiness prediction results.</li>
                      </ul>  
                      <div className="link-ball">
                        <div className="link1"><a href="https://github.com/Srijan-Arya/Credit-Score-Classifier" target='_blank'><img src="./gh.png" alt="" /></a></div>
                        {/* <div className="link2"><a href=""><img src="./web.png" alt="" /></a></div> */}
                      </div>
                    </div>
                  </div>
                  <div className="el__close-btn"></div>
                </div>
              </div>
            </div>
            <div className="el__index">
              <div className="el__index-back">3</div>
              <div className="el__index-front">
                <div className="el__index-overlay" data-index="3">3</div>
              </div>
            </div>
          </div>
          {/* <!-- el end --> */}
          {/* <!-- el start --> */}
          <div className="el four">
            <div className="el__overflow">
              <div className="el__inner">
                <div className="el__bg"></div>
                <div className="el__preview-cont">
                  <h2 className="el__heading">Survey Page: CapX</h2>
                </div>
                <div className="el__content">
                  <div className="el__text">
                    <div className="TechStack">
                    <h2>Survey Page: CapX</h2>
                      <ul>
                        <li><strong>Question Cards:</strong> Displays individual cards with questions and input fields for user responses.</li>
                        <li><strong>Navigation:</strong> Includes a "Next" button to proceed through questions and a "Review Answers" button to review responses before submission.</li>
                        <li><strong>Title Screen:</strong> Presents a title screen with a welcoming message after all questions are answered.</li>
                        <li><strong>Progress Tracking:</strong> Features a progress bar to show user progress through the questions.</li>
                        <li><strong>Client-Side Validation:</strong> Ensures all questions are answered before proceeding to the next question or submission.</li>
                        <li><strong>Local Storage:</strong> Uses Web Storage API to save user responses, allowing users to continue even after refreshing or closing the browser.</li>
                        <li><strong>Responsive Design:</strong> Designed with CSS media queries and flexbox to ensure compatibility across various devices and screen sizes.</li>
                      </ul>  
                      <div className="link-ball">
                        <div className="link1"><a href="https://github.com/Srijan-Arya/CapX" target='_blank'><img src="./gh.png" alt="" /></a></div>
                        <div className="link2"><a href="https://srijancapx.netlify.app/" target='_blank'><img src="./web.png" alt="" /></a></div>
                      </div>
                    </div>
                  </div>
                  <div className="el__close-btn"></div>
                </div>
              </div>
            </div>
            <div className="el__index">
              <div className="el__index-back">4</div>
              <div className="el__index-front">
                <div className="el__index-overlay" data-index="4">4</div>
              </div>
            </div>
          </div>
          {/* <!-- el end --> */}
          {/* <!-- el start --> */}
          <div className="el five">
            <div className="el__overflow">
              <div className="el__inner">
                <div className="el__bg"></div>
                <div className="el__preview-cont">
                  <h2 className="el__heading">Draco Malfoy</h2>
                </div>
                <div className="el__content">
                  <div className="el__text">
                    <div className="TechStack">
                    <h2>Draco Malfoy</h2>
                      <ul>
                        <li><strong>Project Sections:</strong> Dynamic sections with hover animations using CSS Animations for a visually engaging experience.</li>
                        <li><strong>Interactive Elements:</strong> Features expanding and closing functionality for interactive project displays.</li>
                        <li><strong>Responsive Layout:</strong> Fully responsive design to ensure compatibility across different devices and screen sizes.</li>
                        <li><strong>Styling:</strong> Designed with SCSS for better maintainability and flexibility in styling.</li>
                        <li><strong>No JavaScript:</strong> Built without JavaScript to keep the design simple and focused on CSS and HTML.</li>
                      </ul>
                      <div className="link-ball">
                        <div className="link1"><a href="https://github.com/Srijan-Arya/malfoy" target='_blank'><img src="./gh.png" alt="" /></a></div>
                        <div className="link2"><a href="https://srijan-arya.github.io/malfoy/" target='_blank'><img src="./web.png" alt="" /></a></div>
                      </div>
                    </div>
                  </div>
                  <div className="el__close-btn"></div>
                </div>
              </div>
            </div>
            <div className="el__index">
              <div className="el__index-back">5</div>
              <div className="el__index-front">
                <div className="el__index-overlay" data-index="5">5</div>
              </div>
            </div>
          </div>
          {/* <!-- el end --> */}
        </div>
        {/* <!-- cont inner end --> */}
      </div>
    </div>
  )
}

export default Project