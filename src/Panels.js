import Navbar from "./Navbar";

function Panels(props) {
    return (
        <div>
            <Navbar panelsDis={true} />
            <div className="sidebar" />
            <div className="mainSide">
                <h1 className="leftTitle"> PANEL INFORMATION </h1>
                <p className="sub1"> SATURDAY </p>
                <p className="sub2"> <b>Descriptive Creative Writing</b></p>
                <i className="info"> Abrar Siddiqui</i>
                <p className="info">Creative writing, specifically description. Interesting ways of approaching abstraction and description within writing; the transition from symbols to detailed objects, which details to focus on when describing (the idea that you can never exactly construct one specific tree or complex object through writing), and how sentence ordering changes construction and emphasis of setting: why the origin and ordering of what you choose to describe matters.</p>
                <p className="sub2"> <b>Slide into our DMs</b> </p>
                <i className="info"> Alex Zonnenberg, Sebastian Toyotoshi and Ryan Arrazcaeta </i>
                <p className="info"> Becoming a Dungeon Master for the first time can be daunting, but it doesn't have to be! Join 3 long-time DMs and seasoned D&D nerds in a conversation about running your first Dungeons and Dragons campaign. We'll talk about the important decisions to make while world-building, the purpose of adventures and how to design them, and methods for integrating your players into the world. We'll share our thoughts and experiences for the first half of the panel, and then open the floor to audience questions and specific advice.  </p><p className="sub2"> <b>Star Wars: RANKED</b></p>
                <i className="info">TT <a className="link2" href="https://www.tiktok.com/@wes_the_dragon"> @Wes_The_Dragon </a> <a className="link2" href="https://www.tiktok.com/@tentimesthewxnder"> @Tentimesthewxnder </a> <a className="link2" href="https://www.tiktok.com/@space_boy78"> @spaceboy_78 </a></i>
                <p className="info">This is a civil discussion focused panel that takes your (the audience’s) input in order to rank Star Wars characters and have an ultimate showdown. We are dedicated to finding the best of the best out of the Star Wars universe. Ever wanted to find out which bounty hunter is the best? This is the panel for you. May the Tier List be with you. </p>
                <p className="sub2"> <b>Improv Madness</b></p>
                <i className="info"> IG <a className="link2" href="https://www.instagram.com/humbleproductionsatl/?hl=en"> @humbleproductionsatl </a></i>
                <p className="info">Improv Madness: Previously known as "Whose Con Is It Anyway?", this panel is a fun improv show that encourages audience participation. It will be a fun time full of madness! This panel has been extremely successful at Momocon, Anime Weekend Atlanta, Holiday Matsuri and Anime Matsuri. It will surely bring something fun to the convention's programming!</p>
                <p className="sub2"> <b>Kpop Mini-Concert</b></p>
                <i className="info">Sydney Anderson</i>
                <p className="info">Kpop and original songs singing and dancing mini concert! I may even be persuaded to do some Jpop.</p>
                <p className="sub1"> SUNDAY </p>
                <p className="sub2"> How [NOT] to Build Props</p>
                <i className="info"> Alex Casanova Chavez, Ivan Peshev</i>
                <p className="info"> Our panel demonstrates the creative process of making props. Our focus is on the Star Wars franchise, since it is famous for having practical effects. We'll be displaying Mandalorian cosplays, practical lightsabers and our very special secret project. We'll also discuss how to learn the different skills needed to plan and execute projects like this.</p>
                <p className="sub2"> <b>Drones!</b></p>
                <i className="info">IG <a className="link2" href="https://www.instagram.com/peachslicecreatives/?hl=en"> @peachslicecreatives </a></i>
                <p className="info">Drones! If someone is interested in learning more about getting into being a drone pilot or how to get started, this is a panel of a few speakers to chat about it and hold a Q&A. The panelist is a part 107 pilot based in ATL.</p>
                <p className="sub2"> <b>The Evolution of Superhero Content</b></p>
                <i className="info">Harriyanna Hook</i>
                <p className="info">More information coming soon! Check out the panelist here: {"\n"} <a className="link2" href="https://harriyanna.carrd.co/">https://harriyanna.carrd.co/</a></p>
                <p className="sub2"><b>Idolfest</b></p>
                <i className="info">TT <a className="link2" href="https://www.tiktok.com/@bubblestarlive"> @bubblestarlive </a> <a className="link2" href="https://www.tiktok.com/@10yin.cos"> @10yin.cos </a> <a className="link2" href="https://www.tiktok.com/@silverskylan"> @sliverskylan </a></i>
                <p className="info">BubbleStarL!ve wants to make people float with joy by hosting an IdolFest! At this IdolFest we will perform cover dances in cosplay. BubbleStarL!ve will not be the only group performing though! We will have other cosplay idol groups share the stage with us as well. We hope you will join us at this amazing performance~! You won’t want to miss this opportunity.</p>
            </div>
        </div>
    )
}

export default Panels;