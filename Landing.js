import "./Landing.css"; 
const Landing = () => {
    return (
        <>
            <h1>Hello, nice to meet you, I'm Emily Ton! 👋🏼</h1>  
            <p>(a San Francisco-based <span style={{color:"rgb(14, 85, 28)",fontWeight:"bold"}}>product designer</span>  passionate about creating delightful experiences!)</p>

            <div>
                <h3>this is me ✨</h3>
                <img src="../public/grad_image_emily.png" alt = "This is me"/>
            </div>

            <div>
                <h3>currently 📍</h3>
                <p>I am currently pursuing my <strong>Master of Information Management and Systems</strong> at <span style={{color:"#003262",fontWeight:"bold"}}>UC Berkeley</span>! I specifically am focusing on <strong>UX Design and Research.</strong> </p>
    
                <h3>previously 🌱</h3>
                <p> I recently graduated from the <span style={{color:"#FFCD00",fontWeight:"bold"}}>University of California, San Diego</span> (class of 2022) with a degree in <strong>Psychology</strong> and a minor in Design. Most recently, I was a UX Designer at a startup called DormIt and was a Design and Innovation intern for the San Diego International Airport! </p>
    
                <h3>when I am not on Figma 💻 ... </h3>
                <p>I like to 
                    <ul>
                        <li><a href="https://i0.wp.com/dianaurban.com/wp-content/uploads/2017/07/01-cat-stretching-feet.gif?resize=500%2C399&ssl=1" target="_blank" class="link">watch cat videos</a> </li>
                        <li><a href="https://c.tenor.com/HJvqN2i4Zs4AAAAj/milk-and-mocha-cute.gif" target="_blank" class="link">listen to podcasts</a></li>
                        <li><a href="https://c.tenor.com/_h5RONFrRawAAAAC/cafe-coffee.gif" target="_blank" class="link">try new cafes</a></li>
                    </ul>
                </p> 
            </div>


            <div>
                <footer>
                    <h3>get in touch 📨 </h3>
                    <a href="http://www.linkedin.com/in/emilyton" target="_blank" class="link">LinkedIn↗</a>
                    <p> </p>
                </footer>
            </div>

            <div>
                <form>
                    <label for="fname">Please enter your name</label><br />
                    <input type="text" name="name" /><br />
                    <p> </p>
                    <label for="fname">Email address (optional)</label><br />
                    <input type="text" name="email" /><br />
                    <p> </p>
    
                    <label for="fname">Would you be interested in a copy of my resume?</label><br />
                    <input type="checkbox" id="yes" name="yes" value="Yes" />
                    <label for="yes">Yes</label><br />
                    <input type="checkbox" id="no" name="no" value="No" />
                    <label for="no">No</label><br />
                    <input type="submit" value="Submit"/>
                </form>
                <p> By clicking yes, an email will be generated with my resume attached! </p>
            </div>
        </>
    );
};

export default Landing;