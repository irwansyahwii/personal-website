'use client';

export const Main = ()=>{
  return (
    <>
			{/* <!-- Header --> */}
			<header id="header">
				<div className="inner">
					<a href="#" className="image avatar"><img src="images/avatar.jpg" alt="" /></a>
					<h1><strong>I am Irwansyah</strong>, an AI Engineer<br /></h1>
				</div>
		{/* <!-- Footer --> */}
			<footer id="footer" >
				<div className="inner"  >
					<ul className="icons" style={{alignItems:"center", justifyContent:"center", alignContent:"center", justifyItems:"center", justifySelf:"center"}}>
						{/* <li><a href="#" className="icon brands fa-twitter"><span className="label">Twitter</span></a></li> */}
						<li><a href="https://www.github.com/irwansyahwii" className="icon brands fa-github"><span className="label">Github</span></a></li>
						{/* <li><a href="#" className="icon brands fa-dribbble"><span className="label">Dribbble</span></a></li> */}
						<li><a href="mailto:irwansyah@gmail.com" className="icon solid fa-envelope"><span className="label">Email</span></a></li>
					</ul>
					<ul className="copyright">
						<li>&copy; 2024 Irwansyah</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
					</ul>
				</div>
			</footer>				
			</header>

		{/* <!-- Main --> */}
			<div id="main">

				{/* <!-- One --> */}
					<section id="one">
						<header className="major">
							<h2>Please talk with my own AI on the left<br />
							</h2>
						</header>
					</section>

				{/* <!-- Three --> */}
					<section id="three" >
						<h2>Get In Touch</h2>

						<div className="row">
							<div className="col-8 col-12-small">
								<form method="post" action="#">
									<div className="row gtr-uniform gtr-50">
										<div className="col-6 col-12-xsmall"><input type="text" name="name" id="name" placeholder="Name" /></div>
										<div className="col-6 col-12-xsmall"><input type="email" name="email" id="email" placeholder="Email" /></div>
										<div className="col-12"><textarea name="message" id="message" placeholder="Message" rows={4}></textarea></div>
									</div>
								</form>
								<ul className="actions">
									<li><input type="submit" value="Send Message" /></li>
								</ul>
							</div>
							<div className="col-4 col-12-small">
								<ul className="labeled-icons">
									<li>
										<h3 className="icon solid fa-home"><span className="label">Address</span></h3>
										Jakarta<br />										
										Indonesia
									</li>
									<li>
										<h3 className="icon solid fa-mobile-alt"><span className="label">Phone</span></h3>
										
									</li>
									<li>
										<h3 className="icon solid fa-envelope"><span className="label">Email</span></h3>
										<a href="#">irwansyah@gmail.com</a>
									</li>
								</ul>
							</div>
						</div>
					</section>						

			</div>



		{/* <!-- Scripts --> */}
			{/* <script src="assets/js/jquery.min.js"></script>
			<script src="assets/js/jquery.poptrox.min.js"></script>
			<script src="assets/js/browser.min.js"></script>
			<script src="assets/js/breakpoints.min.js"></script>
			<script src="assets/js/util.js"></script>
			<script src="assets/js/main.js"></script>     */}
    </>
  )
}