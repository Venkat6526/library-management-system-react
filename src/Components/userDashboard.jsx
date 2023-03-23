import '../Styles/userDashboard.css'
const UserDashboard = () => {
    return ( 
        <div className="userDashboard">
            <div className="userDash">
                <img src="../images/userDash.jpg" alt="" />
            </div>
            <div className="tag">
                <div className="Hoopla">
                    <h1>Heritage with Hoopla </h1>
                </div>
                <div className="wed">
                    <p>On Wednesday, January 18 at 2:00 pm, join us as we wander through Hoopla's "Discovering Your Roots: An Introduction to Genealogy" using The Great Courses series.</p>
                </div>
                <div className="Mark">
                    <button>Mark Your Calender <span>-</span></button>
                </div>
            </div>
            <div className="lab">
                <div className="learning">
                    <h1>Learning Lab</h1>
                </div>
                <div className="technology">
                    <p>The mission of the Library’s Learning Lab is to create an environment in which Greenwich Library staff and patrons can empower themselves with a practical understanding of current technology.</p>
                </div>
            </div>
            
                <div className="over">
                    <img src="../images/LinkedInLearning.jpg" alt="" />
                </div>
                <div className="linkedin">
                <div className="LEARN">
                    <label htmlFor="">LEARN</label>
                    </div>
                    <div className="lynda">
                    <h1>LinkedIn Learning</h1>
                    </div>
                <div className="intrests">
                    <p>LinkedIn Learning (formerly Lynda) is an online educational site that features thousands of courses and video tutorials where you can discover, complete, and track courses related to your industry or interests.</p>
                </div>
                <div className="started">
                    <button>Get Started -</button>
                </div>
                </div>
                <div className="Nee">
                    <img src="../images/Screenshot.png" alt="" />
                </div>
                <div className="New">
                    <div className="Help">
                        <h1>Learn Something New or Get Tech Help</h1>
                        <h4>Register on the online calendar. For more information call (203) 622-7920.</h4>
                        <div className="View">
                            <button>view Calender -</button>
                        </div>
                    </div>
                </div>
            
        </div>
     );
}
 
export default UserDashboard;