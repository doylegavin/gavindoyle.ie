'use client';

import React from 'react';
import NetflixCard from '@/components/NetflixCard';
import { NavigationProvider } from '@/components/NavigationProvider';
import NavSection from '@/components/NavSection';

export default function CuriousPage() {
  return (
    <NavigationProvider>
      <div className="netflix-page">
        {/* Hero Section */}
        <div className="netflix-hero">
          <NetflixCard
            title="The Deep Dive"
            subtitle="Everything you wanted to know"
            description="Welcome to the rabbit hole! This is where you'll find the real Gavin Doyle - the good, the bad, and the beautifully messy. From childhood memories to current obsessions, from embarrassing moments to proud achievements."
            imageUrl="/images/personas/curious/basketball-headshot.JPG"
            badge="Rabbit Hole"
            rating="Deep"
            tags={["Everything", "Real Gavin", "Rabbit Hole"]}
            href="/about"
            size="hero"
            imagePosition={8}
          />
        </div>

        {/* Basketball Photoshoot */}
        <NavSection title="Basketball Photoshoot Day">
          <NetflixCard
            title="Just Wanna Ball"
            subtitle="Main photoshoot"
            description="Our basketball club had a photoshoot day to promote the club and we RAN with it. I just wanna ball with my bros."
            imageUrl="/images/personas/curious/basketball-photoshoot-main.JPG"
            tags={["Basketball", "Photoshoot", "Squad"]}
            imagePosition={8}
          />
          <NetflixCard
            title="Team Photo"
            subtitle="Squad fr"
            description="Squad fr - the whole team together for the official photo."
            imageUrl="/images/personas/curious/basketball-photoshoot-team.JPG"
            tags={["Team", "Squad", "Basketball"]}
            imagePosition={7}
          />
          <NetflixCard
            title="Holding It Down"
            subtitle="Strong boy hours"
            description="I'm lowkey kinda strong - this boy is like 110kg and I'm holding him up!"
            imageUrl="/images/personas/curious/basketball-photoshoot-holding.JPG"
            tags={["Strong", "110kg", "Basketball"]}
            imagePosition={8}
          />
          <NetflixCard
            title="Jump Shot"
            subtitle="Don't mess with us"
            description="Dont mess with us - we mean business on this court."
            imageUrl="/images/personas/curious/basketball-photoshoot-jump.JPG"
            tags={["Jump", "Basketball", "Action"]}
            imagePosition={8}
          />
          <NetflixCard
            title="Double Jump"
            subtitle="DONT MESS WITH US"
            description="DONT MESS WITH US - seriously, we're not playing around!"
            imageUrl="/images/personas/curious/basketball-photoshoot-jump2.JPG"
            tags={["Jump", "Intense", "Basketball"]}
            imagePosition={8}
          />
          <NetflixCard
            title="Kicking It"
            subtitle="Don't get fresh"
            description="Don't be getting fresh with me or this'll be you - martial arts crossover!"
            imageUrl="/images/personas/curious/basketball-photoshoot-kicking.JPG"
            tags={["Kick", "Fresh", "Fun"]}
          />
          <NetflixCard
            title="Laughing"
            subtitle="How cute"
            description="How cute - when the photoshoot gets too funny."
            imageUrl="/images/personas/curious/basketball-photoshoot-laughig.JPG"
            tags={["Laughing", "Cute", "Fun"]}
            imagePosition={8}
          />
          <NetflixCard
            title="Love on Court"
            subtitle="We love love"
            description="We love love - showing affection for the teammates."
            imageUrl="/images/personas/curious/basketball-photoshoot-love.JPG"
            tags={["Love", "Teammates", "Bond"]}
            imagePosition={8}
          />
          <NetflixCard
            title="Hugging It Out"
            subtitle="We love love"
            description="We love love - team bonding at its finest."
            imageUrl="/images/personas/curious/basketball-photoshoot-hugging.JPG"
            tags={["Hugs", "Team", "Love"]}
            imagePosition={7}
          />
          <NetflixCard
            title="Pregnant Pause"
            subtitle="This could be us"
            description="This could us but you playin' - messing around during the photoshoot."
            imageUrl="/images/personas/curious/basketball-photoshoot-pregnant.JPG"
            tags={["Funny", "Messing", "Basketball"]}
          />
          <NetflixCard
            title="Serious Mode"
            subtitle="Woof woof"
            description="Woof woof - putting on our serious faces for the camera."
            imageUrl="/images/personas/curious/basketball-photoshoot-serious.JPG"
            tags={["Serious", "Intense", "Basketball"]}
            imagePosition={9}
          />
          <NetflixCard
            title="Wheelbarrow"
            subtitle="Teamwork"
            description="Teamwork makes the dream work <3 - classic wheelbarrow pose."
            imageUrl="/images/personas/curious/basketball-photoshoot-wheelbarrow.JPG"
            tags={["Teamwork", "Fun", "Dreams"]}
          />
        </NavSection>

        {/* Basketball Achievements */}
        <NavSection title="Basketball Achievements">
          <NetflixCard
            title="Weatherproof Squad"
            subtitle="WEATHERPROOOOOOFFFFFF"
            description="WEATHERPROOOOOOFFFFFF - when rain can't stop the ballers."
            imageUrl="/images/personas/curious/baller-squad-weatherproof.jpg"
            tags={["Weatherproof", "Squad", "Dedication"]}
          />
          <NetflixCard
            title="Summer League 2022"
            subtitle="High fives for Mark"
            description="The highest of fives for my friend Mark (I blocked him fr) - summer league basketball moments."
            imageUrl="/images/personas/curious/basketball-SL-2022.jpg"
            tags={["Summer League", "Block", "Mark"]}
            imagePosition={8}
          />
          <NetflixCard
            title="Don't Jump Pass"
            subtitle="Basketball tip"
            description="Dont jump and pass!! - classic basketball mistake we all make."
            imageUrl="/images/personas/curious/basketball-SL.jpg"
            tags={["Basketball", "Tip", "Pass"]}
          />
          <NetflixCard
            title="Scholarship Days"
            subtitle="How cute am I"
            description="How cute am I - back when I got the basketball scholarship."
            imageUrl="/images/personas/curious/bball-scholarship.JPG"
            tags={["Scholarship", "Young", "Basketball"]}
          />
          <NetflixCard
            title="White Man Can Jump"
            subtitle="Favorite basketball photo"
            description="WHITE MAN CAN JUMP - one of my favorite basketball photos ever."
            imageUrl="/images/personas/curious/fav-basketball-photo.jpg"
            tags={["Jump", "Favorite", "Basketball"]}
            imagePosition={8}
          />
          <NetflixCard
            title="Stat Sheet Stuffer"
            subtitle="The Luka Doncic of Division 7"
            description="The Luka Doncic of Division 7 - when the stats speak for themselves."
            imageUrl="/images/personas/curious/graphic_of_me_player_of_the_game_basketball.JPG"
            tags={["Stats", "Luka", "Division 7"]}
          />
        </NavSection>

        {/* School Basketball Success */}
        <NavSection title="Ardscoil Rís Basketball Legacy">
          <NetflixCard
            title="Hall of Fame"
            subtitle="Immortalised"
            description="We are immortalised forever on the Walls of Ardscoil Rís Sports Hall - our team photos hanging in glory."
            imageUrl="/images/personas/curious/schoolball.JPG"
            tags={["Ardscoil Rís", "Champions", "Legacy"]}
          />
          <NetflixCard
            title="Leinster Champions"
            subtitle="Hall of Fame 2"
            description="We are immortalised forever on the Walls of Ardscoil Rís Sports Hall - winning Leinster nearly every year."
            imageUrl="/images/personas/curious/schoolball2.JPG"
            tags={["Leinster", "Champions", "School"]}
          />
          <NetflixCard
            title="All Ireland"
            subtitle="Hall of Fame 3"
            description="We are immortalised forever on the Walls of Ardscoil Rís Sports Hall - some All Ireland success too."
            imageUrl="/images/personas/curious/schoolball3.JPG"
            tags={["All Ireland", "Success", "Pride"]}
          />
          <NetflixCard
            title="The Dynasty"
            subtitle="Hall of Fame 4"
            description="We are immortalised forever on the Walls of Ardscoil Rís Sports Hall - a very successful basketball team."
            imageUrl="/images/personas/curious/schoolball4.JPG"
            tags={["Dynasty", "Basketball", "Legacy"]}
          />
        </NavSection>

        {/* Oasis & Music */}
        <NavSection title="Oasis Obsession">
          <NetflixCard
            title="At the Gig"
            subtitle="Best night ever"
            description="Seeing Oasis irl was the best night of my life - top 0.01% worldwide listener for 4 years!"
            imageUrl="/images/personas/curious/at_oasis_gig.JPG"
            tags={["Oasis", "Concert", "Dream"]}
          />
          <NetflixCard
            title="Post-Gig Guinness"
            subtitle="Felt cool for once"
            description="Probably the first time I ever felt cool - drinking Guinness after Oasis at Croke Park 2025."
            imageUrl="/images/personas/curious/cool_drinking_guinness_at_oasis.JPG"
            tags={["Guinness", "Oasis", "Cool"]}
          />
        </NavSection>

        {/* Belfast Friends */}
        <NavSection title="Belfast Friends">
          <NetflixCard
            title="Kelly's Cellar"
            subtitle="Best Guinness in Ireland"
            description="Kellys is the best pint of Guinness in Ireland - yearly tradition with Matty and Goan."
            imageUrl="/images/personas/curious/boys-in-kellys.JPG"
            tags={["Kelly's", "Guinness", "Tradition"]}
          />
          <NetflixCard
            title="Ollie's Aftermath"
            subtitle="Bad day for the dancefloor"
            description="Bad day to be the dancefloor in Ollie's - when the night gets blurry."
            imageUrl="/images/personas/curious/boys-in-ollies.JPG"
            tags={["Ollie's", "Dancing", "Belfast"]}
          />
          <NetflixCard
            title="Matty's Kingdom"
            subtitle="King of Ollie's"
            description="Matty is the king of Ollie's - impeccable overalls game."
            imageUrl="/images/personas/curious/matty-in-ollies.JPG"
            tags={["Matty", "Overalls", "King"]}
          />
          <NetflixCard
            title="Belfast Roommates"
            subtitle="Fruit bowl destroyers"
            description="Fruit bowls HATE to see us coming - the Belfast roommate squad."
            imageUrl="/images/personas/curious/belfast-roommates.JPG"
            tags={["Roommates", "Belfast", "Fruit"]}
          />
          <NetflixCard
            title="Sad Boys"
            subtitle="The sad boys"
            description="The sad boys - sometimes you just need to embrace the melancholy."
            imageUrl="/images/personas/curious/sad-boys.jpg"
            tags={["Sad Boys", "Friends", "Mood"]}
            imagePosition={8}
          />
        </NavSection>

        {/* Best Friends */}
        <NavSection title="Best Friends">
          <NetflixCard
            title="Luke - Best Friend"
            subtitle="Half our lives"
            description="Best Friends for more than half of our lives. Here's to the rest of it."
            imageUrl="/images/personas/curious/fav-photo-of-me-and-luke.jpg"
            tags={["Luke", "Best Friend", "Forever"]}
            imagePosition={8}
          />
          <NetflixCard
            title="Before We Got Fat"
            subtitle="2018 throwback"
            description="Back before we got fat - me and Luke in 2018."
            imageUrl="/images/personas/curious/me-and-luke-2018.JPG"
            tags={["Luke", "2018", "Throwback"]}
            imagePosition={8}
          />
          <NetflixCard
            title="Mary & Tosh"
            subtitle="The inspiration"
            description="Me with my best friends parents, Mary and Tosh - Mary Byrne inspired me to become a teacher."
            imageUrl="/images/personas/curious/me-and-mary-and-tosh.jpg"
            tags={["Mary", "Tosh", "Teaching"]}
          />
        </NavSection>

        {/* Coffee Culture */}
        <NavSection title="Coffee Culture">
          <NetflixCard
            title="Getting Coffee"
            subtitle="3fe vibes"
            description="Getting my daily coffee fix at my favourite spot."
            imageUrl="/images/personas/curious/getting_coffee.JPG"
            tags={["Coffee", "3fe", "Daily"]}
          />
          <NetflixCard
            title="Latte Art"
            subtitle="Not bad ay!"
            description="The boys in 3fe have been teaching me to do some latte art - not bad ay!!!"
            imageUrl="/images/personas/curious/latte-art.JPG"
            tags={["Latte Art", "3fe", "Learning"]}
          />
        </NavSection>

        {/* Travel & Adventures */}
        <NavSection title="Travel & Adventures">
          <NetflixCard
            title="Vintage Paris"
            subtitle="Through vintage lens"
            description="Vintage lense of Paris - capturing the city of lights with a classic feel."
            imageUrl="/images/personas/curious/vintage-paris.JPG"
            tags={["Paris", "Vintage", "Travel"]}
          />
          <NetflixCard
            title="Paris Streets"
            subtitle="Vintage lens 2"
            description="Vintage lense of Paris - more beautiful streets."
            imageUrl="/images/personas/curious/vintage-paris2.JPG"
            tags={["Paris", "Streets", "Vintage"]}
          />
          <NetflixCard
            title="Paris Architecture"
            subtitle="Vintage lens 3"
            description="Vintage lense of Paris - the stunning architecture."
            imageUrl="/images/personas/curious/vintage-paris3.JPG"
            tags={["Paris", "Architecture", "Beauty"]}
          />
          <NetflixCard
            title="Paris Views"
            subtitle="Vintage lens 4"
            description="Vintage lense of Paris - iconic views."
            imageUrl="/images/personas/curious/vintage-paris4.JPG"
            tags={["Paris", "Views", "Iconic"]}
          />
          <NetflixCard
            title="Paris Final"
            subtitle="Vintage lens 5"
            description="Vintage lense of Paris - the final shot."
            imageUrl="/images/personas/curious/vintage-paris5.PNG"
            tags={["Paris", "Final", "Memories"]}
          />
          <NetflixCard
            title="Powerscourt"
            subtitle="Waterfall vibes"
            description="HE LIVES UNDAAA A WAAATAA FALL - stunning Powerscourt waterfall."
            imageUrl="/images/personas/curious/powerscourt.JPG"
            tags={["Powerscourt", "Waterfall", "Ireland"]}
          />
          <NetflixCard
            title="Gone Fishing"
            subtitle="With Dad"
            description="Fishing + pints + dad = great time - quality father-son moments."
            imageUrl="/images/personas/curious/gone-fishing.JPG"
            tags={["Fishing", "Dad", "Pints"]}
          />
          <NetflixCard
            title="Parents in Belfast"
            subtitle="First visit"
            description="Mam and Dad's first time in Belfast! Showing them around my college city."
            imageUrl="/images/personas/curious/parents-first-trip-to-belfast.JPG"
            tags={["Parents", "Belfast", "Family"]}
          />
          <NetflixCard
            title="Boston Bound"
            subtitle="Matty Boston"
            description="Shipping off to Boston!! Matty Belfast + Boston = Matty Boston."
            imageUrl="/images/personas/curious/shipping-off-to-boston.JPG"
            tags={["Boston", "Matty", "Adventure"]}
          />
          <NetflixCard
            title="First Baseball Game"
            subtitle="American experience"
            description="Gavin's first baseball game x - experiencing American sports culture."
            imageUrl="/images/personas/curious/my-first-baseball-game.JPG"
            tags={["Baseball", "America", "First"]}
          />
          <NetflixCard
            title="Casement's Bar"
            subtitle="SF Visitors Book"
            description="A gorgeous passage from the Visitors book, Casement's Bar, Mission District, San Francisco."
            imageUrl="/images/personas/curious/passage-from-visitors-book-casements-sf.jpg"
            tags={["San Francisco", "Irish Bar", "Visitors"]}
          />
          <NetflixCard
            title="Olympics Support"
            subtitle="COYBIG"
            description="COYBIG - supporting Ireland at the Olympics!"
            imageUrl="/images/personas/curious/at-olympic-rugby-game-with-irish-ireland-flag.JPG"
            tags={["Olympics", "Ireland", "Rugby"]}
          />
        </NavSection>

        {/* Street Photography */}
        <NavSection title="Street Photography">
          <NetflixCard
            title="Cool Laneway"
            subtitle="Photo opportunity"
            description="Found a cool lane way once and decided it would be a great photo opp."
            imageUrl="/images/personas/curious/laneway.JPG"
            tags={["Laneway", "Photography", "Cool"]}
          />
          <NetflixCard
            title="Fashion Shoot"
            subtitle="Impromptu"
            description="Lil impromptu fashion shoot in the laneway."
            imageUrl="/images/personas/curious/laneway2.JPG"
            tags={["Fashion", "Impromptu", "Style"]}
          />
        </NavSection>

        {/* Lifestyle & Personality */}
        <NavSection title="Lifestyle & Personality">
          <NetflixCard
            title="Olympic Weightlifting"
            subtitle="Heavy things"
            description="I like lifting heavy things and putting them back down again."
            imageUrl="/images/personas/curious/olympic_weightlifting.JPG"
            tags={["Weightlifting", "Fitness", "Strong"]}
          />
          <NetflixCard
            title="Coolest T-Shirt"
            subtitle="Biggest regret"
            description="My biggest regret in life was NOT buying this t shirt - still haunts me."
            imageUrl="/images/personas/curious/coolest-tshirt.jpg"
            tags={["Fashion", "Regret", "Cool"]}
          />
          <NetflixCard
            title="Movember"
            subtitle="First and last"
            description="My first and last Movember - the moustache experiment."
            imageUrl="/images/personas/curious/first-and-last-movember.jpg"
            tags={["Movember", "Moustache", "Charity"]}
          />
          <NetflixCard
            title="Modelling Debut"
            subtitle="First shoot"
            description="First Modeling shoot hehe - trying my hand at modelling."
            imageUrl="/images/personas/curious/first-modelling-shoot.JPG"
            tags={["Modelling", "First", "Shoot"]}
            imagePosition={9}
          />
          <NetflixCard
            title="Mug Collection"
            subtitle="My collection"
            description="This is my mug collection - I'm a collector of fine mugs."
            imageUrl="/images/personas/curious/mug-collection.JPG"
            tags={["Mugs", "Collection", "Home"]}
          />
          <NetflixCard
            title="Hella Fruit"
            subtitle="Fruit bowl terror"
            description="The fruit bowl that HATES to see me and my housemates coming."
            imageUrl="/images/personas/curious/hella-fruit.JPG"
            tags={["Fruit", "Healthy", "Housemates"]}
          />
          <NetflixCard
            title="Miami Vice Audition"
            subtitle="Didn't get the part"
            description="Miami Vice Audition (didn't get the part) - but the vibes were immaculate."
            imageUrl="/images/personas/curious/miami-vice-audition.JPG"
            tags={["Miami Vice", "Audition", "Vibes"]}
            imagePosition={8}
          />
          <NetflixCard
            title="Mattress Mick!"
            subtitle="Wedding photo bomb"
            description="Posing getting a nice picture just so we could get a snap of MATTRESS MICK!"
            imageUrl="/images/personas/curious/mattress-mick-wedding.JPG"
            tags={["Mattress Mick", "Wedding", "Legend"]}
          />
          <NetflixCard
            title="He's a Shooter"
            subtitle="SHOOTAAAA"
            description="HE'S A SHOOTAAAA - basketball shooter mentality."
            imageUrl="/images/personas/curious/shoota.JPG"
            tags={["Shooter", "Basketball", "Mentality"]}
          />
          <NetflixCard
            title="Tea Time"
            subtitle="Simple pleasures"
            description="Tea - sometimes the simple things in life are the best."
            imageUrl="/images/personas/curious/tea.jpg"
            tags={["Tea", "Simple", "Relax"]}
          />
          <NetflixCard
            title="Woodwork Project"
            subtitle="LC creation"
            description="Here's my LC woodwork project! - handmade craftsmanship."
            imageUrl="/images/personas/curious/woodwork-project.JPG"
            tags={["Woodwork", "LC", "Handmade"]}
          />
          <NetflixCard
            title="Oh Donuts Guy"
            subtitle="Random encounter"
            description="Hey man do you like oh! donuts man?? - memorable encounters."
            imageUrl="/images/personas/curious/oh!-donuts-guy.PNG"
            tags={["Donuts", "Random", "Encounter"]}
            imagePosition={8}
          />
          <NetflixCard
            title="Spaghetti Arms"
            subtitle="Final edition"
            description="The final Spaghetti Arms - workout aftermath."
            imageUrl="/images/personas/curious/last-spaghetti-arms.JPG"
            tags={["Workout", "Arms", "Gym"]}
          />
        </NavSection>

        {/* Childhood & Family */}
        <NavSection title="Childhood & Family">
          <NetflixCard
            title="Christmas 2010"
            subtitle="Nana's floor"
            description="Me and my cousins receiving our Christmas presents on our nana's floor, 2010."
            imageUrl="/images/personas/curious/12yo-gav.JPG"
            tags={["Christmas", "2010", "Family"]}
          />
          <NetflixCard
            title="Baby Gav"
            subtitle="Used to be cute"
            description="A cute baby photo of myself, I used to be cute!"
            imageUrl="/images/personas/curious/babyphoto.JPG"
            tags={["Baby", "Cute", "Childhood"]}
          />
          <NetflixCard
            title="Mam and Dad"
            subtitle="Adrienne and Tony"
            description="Adrienne and Tony - my wonderful parents."
            imageUrl="/images/personas/curious/mam-and-dad.JPG"
            tags={["Parents", "Family", "Love"]}
          />
        </NavSection>

        {/* Stay Connected */}
        <NavSection title="Stay Connected">
          <NetflixCard
            title="Email Me"
            subtitle="Direct questions welcome"
            description="Ask me anything - about the unfinished master's, teaching stories, startup journey, or Dublin's hidden gems."
            imageUrl="/images/personas/curious/me-and-mary-and-tosh.jpg"
            tags={["Email", "Questions", "Stories"]}
            href="mailto:doyle.d.gavin@gmail.com"
          />
          <NetflixCard
            title="Instagram"
            subtitle="@gavinthecraic"
            description="Follow for the real behind-the-scenes content, random Dublin discoveries, and the occasional deep thought."
            imageUrl="/images/personas/curious/getting_coffee.JPG"
            tags={["Instagram", "Behind Scenes", "Dublin"]}
            href="https://instagram.com/gavinthecraic"
          />
        </NavSection>
      </div>
    </NavigationProvider>
  );
}
