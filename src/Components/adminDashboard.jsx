import '../Styles/adminDashboard.css'
const AdminDashboard = () => {
    return ( 
        <div className="adminDashboard">
            <div className="position">   
            <img src="../images/adminDash.jpg" alt="" />
            </div>
            <div className="greenwich">
                <h1>Greenwich Library Blog</h1>
            </div>
            <div className="para">
                <p>Use dropdown to view other Explore Categories</p>
            </div>
            <div className="Blog">
               <p>Greenwich Library Blog</p>
            </div>
                <div className="C">
                    <img src="../images/EXPLORE.jpg" alt="" />
                </div>
                <div className="Host">
                    <div className="lib">
                    <h1>Greenwich Library to Host an Evening of Broadway Cabaret</h1>
                    </div>
                    <div className="jan">
                    <h6>By erik Berlin on January 12, 2023</h6>
                    </div>
                    <div className="friends">
                    <p>The Friends of Greenwich Library are pleased to host a special night of cabaret-style performances with How I Got to…</p>
                    </div>
                    <div className="look">
                    <a href="">Take a look</a>
                    </div>
                </div>
                <div className="S">
                   <img src="../images/EXPLORE.jpg" alt="" />
                </div>
                <div className="signature">
                    <div className="series">
                        <h1>Signature Series: In the News with Fareed Zakaria</h1>
                    </div>
                    <div className="feb">
                    <h6>By erik Berlin on January 11, 2023</h6>
                    </div>
                    <div className="Thursday">
                        <p>Greenwich Library’s Signature Series is pleased to welcome bestselling author and journalist Fareed Zakaria to the Library’s Berkley Theater on Thursday,…</p>
                    </div>
                    <div className="Take">
                        <a href="">Take a look</a>
                    </div>
                </div>
                <div className="A">
                   <img src="../images/EXPLORE.jpg" alt="" />
                </div>
                <div className="Erika">
                    <div className="january">
                        <h1>At the Library this January...</h1>
                    </div>
                    <div className="december">
                    <h6>By erik Berlin on December 22, 2022</h6>
                    </div>
                    <div className="online">
                        <p>Greenwich Library has a full schedule of (free!) enrichment events throughout January. Speak with a librarian or check the online…</p>
                    </div>
                    <div className="took">
                        <a href="">Take a look</a>
                    </div>
                </div>
        </div>
     );
}
 
export default AdminDashboard;