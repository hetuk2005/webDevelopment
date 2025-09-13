import "./Profile.css"
import data from "../Data/db.json"

export function Profile() {

  return (
      <>
          <div>
              Hello World
          </div>
          {
              data?.profile.map((el) => (
                  <main key={el.name}>
                      <section className='child1'>
                          <div className='img-div'>
                              <img src={el.img} alt="Image" className="profile"/>
                          </div>
                          <div className="info">
                              <h3>{el.name}</h3>
                              <h5>{el.designation}</h5>
                              <p>{ el.description}</p>
                                <div className="box1">
                          {
                              el?.socialMedia.map((els) => (
                                      <img src={els.icon} alt="Icons" />
                              ))
                          }
                              </div>
                          </div>
                      </section>
                      <section className="child2">
                              {
                              el?.Details.map((elss) => (
                          <div className="details">
                                      <img src={elss.phone} alt="Icon" key={elss.phone}/>
                                      <p>{elss.number}</p>
                          </div>
                                  ))
                              }
                      </section>
                  </main>
              ))
          }
    </>
  )
}