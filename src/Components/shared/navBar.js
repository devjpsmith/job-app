import './navBar.css';

export default function() {
  return (
      <div className="navBar">
          <div className="container">
              <div className="row">
                  <div className="col">
                      <div className="branding">
                          <svg width="75px" height="75px" viewBox="0 0 1024 1024" className="icon" version="1.1"
                               xmlns="http://www.w3.org/2000/svg">
                              <path
                                  d="M832 384l8 1.6-1.6 8 1.6 3.2-4.8 3.2-44.8 161.6-16-4.8 40-147.2-260.8 144-158.4 284.8-11.2-6.4-6.4 6.4-176-176 11.2-11.2 163.2 163.2 147.2-265.6-294.4-297.6 11.2-11.2v-8h9.6l3.2-3.2 3.2 3.2L664 208l1.6 16-395.2 22.4 278.4 278.4 276.8-153.6 6.4 12.8z"
                                  fill="#578575"/>
                              <path
                                  d="M896 384c0 35.2-28.8 64-64 64s-64-28.8-64-64 28.8-64 64-64 64 28.8 64 64z m-656-32c-62.4 0-112-49.6-112-112s49.6-112 112-112 112 49.6 112 112-49.6 112-112 112z m304 336c-80 0-144-64-144-144s64-144 144-144 144 64 144 144-64 144-144 144z m-224 144c0-35.2 28.8-64 64-64s64 28.8 64 64-28.8 64-64 64-64-28.8-64-64z m-144-176c0-17.6 14.4-32 32-32s32 14.4 32 32-14.4 32-32 32-32-14.4-32-32z m448-440c0-22.4 17.6-40 40-40s40 17.6 40 40-17.6 40-40 40-40-17.6-40-40zM736 560c0-27.2 20.8-48 48-48s48 20.8 48 48-20.8 48-48 48-48-20.8-48-48z"
                                  fill="#C3D9CA"/>
                          </svg>
                          <h5 className={'logo'}>JPS Job Portal</h5>
                      </div>
                  </div>
                  <div className="col">
                      <div className="nav-link-collection">
                          <a href="/">
                              <svg xmlns="http://www.w3.org/2000/svg"
                                   viewBox="0 -960 960 960">
                                  <path
                                      d="M220-180h150v-250h220v250h150v-390L480-765 220-570v390Zm-60 60v-480l320-240 320 240v480H530v-250H430v250H160Zm320-353Z"/>
                              </svg>
                          </a>
                          <a href="/addjob">
                              <svg xmlns="http://www.w3.org/2000/svg"
                                   viewBox="0 -960 960 960">
                                  <path d="M450-450H200v-60h250v-250h60v250h250v60H510v250h-60v-250Z"/>
                              </svg>
                          </a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
}