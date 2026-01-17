import ImageLL from "../Images/intro-img-1.png"
import TagembedWidget from "./TagembedWidget";
function Main() {
	return (
		<main>
		<div class = "MainInfo">
		<div> <img src={ImageLL}/></div>
		<div> 
		<h1>Ласкаво просимо у корекційний центр <span>"Квіти життя"</span></h1>
        <p>Професійні тренери, сучасне обладнання та індивідуальні програми тренувань для кожного.</p>	
        <button height="100px" weight="200px"> Записатись </button>	</div>
		</div>
		<h1> Новини </h1>
		<div id="news">

		</div>
		
		</main>
		);
}
export default Main;