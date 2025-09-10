import "./Profile.css"
import data from "../Data/data.json"

export const Profile = () => {
    return (
        <>
            {
                data && data.profile.map((el) => (
                    <main key={el.name}>
                        <section className="child-1">
                            <div className="info">
                                <h3 name="name">Name: {el.name}</h3>
                                <p name="profile">Profile: { el.designation}</p>
                                <p name="skill">Skill: {el.skill}</p>
                                <div className="platform-div">
                                    <p name="platform">Platform: </p>
                                    {
                                        el?.platform.map((els) => (
                                            <p key={els.name} style={{ borderRadius: '10px', padding: '1px 10px', background: els.color, color: "#fff" }} name="platform">{ els.name}</p>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="img-prf">
                                <img src={el.img} alt={el.name} />
                            </div>
                        </section>
                        <section className="child-2">
                        {
                            el && el.socialMedia.map((elss) => {
                                <div className="box-1" key={elss.rate}>
                                    <h2>{elss.rate}</h2>
                                    <p>{elss.text1}</p>
                                    <div style={{ background: elss.color, padding: "10px 20px", borderRadius: "10px" }} className="img-ss">
                                        <img style={{ background: elss.color }} src={elss.icon} alt={elss.text} />
                                        <p style={{ background: elss.color }}>{ elss.text}</p>
                                    </div>
                                </div>
                            })
                            }
                            </section>
                    </main>
                ))
        }
        </>
    )
}