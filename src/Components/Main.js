import ImageLL from "../Images/intro-img-1.png"
function Main() {
	return (
		<main>
		<div class = "MainInfo">
		<div> <img src={ImageLL}/></div>
		<div> 
		<h1>Ласкаво просимо у фітнес-центр <span>"Твоя Форма"</span></h1>
        <p>Професійні тренери, сучасне обладнання та індивідуальні програми тренувань для кожного.</p>	
        <button height="100px" weight="200px"> Записатись </button>	</div>
		</div>
		</main>
		);
}
export default Main;