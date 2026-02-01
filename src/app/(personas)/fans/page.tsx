'use client';

import React from 'react';
import NetflixCard from '@/components/NetflixCard';
import { NavigationProvider } from '@/components/NavigationProvider';
import NavSection from '@/components/NavSection';

export default function FansPage() {
  return (
    <NavigationProvider>
    <div className="netflix-page">
      {/* Hero Section */}
      <div className="netflix-hero">
        <NetflixCard
        title="Welcome, Fans! 🎭"
          subtitle="Where technology meets artistry"
          description="Step into my creative world of passion projects, creative experiments, and personal stories behind the code. From teacher to founder to creative technologist."
          imageUrl="/images/personas/fans/basketball-headshot1.JPG"
          badge="Creative"
          rating="Artist & Tech"
          duration="Passion Projects"
          tags={["Creative", "Technology", "Art", "Music"]}
          href="/projects"
          size="hero"
          imagePosition={8}
        />
      </div>

        {/* Basketball Photoshoot */}
        <NavSection title="Basketball Photoshoot Day">
          <NetflixCard
            title="Main Shot"
            subtitle="Ball is life"
            description="Our basketball club had a photoshoot day to promote the club and we RAN with it. I just wanna ball with my bros."
            imageUrl="/images/personas/fans/basketball-photoshoot-main.JPG"
            tags={["Basketball", "Photoshoot", "Bros"]}
            imagePosition={8}
          />
          <NetflixCard
            title="Team Photo"
            subtitle="Squad fr"
            description="Squad fr - the whole team together."
            imageUrl="/images/personas/fans/basketball-photoshoot-team.JPG"
            tags={["Team", "Squad", "Basketball"]}
            imagePosition={7}
          />
          <NetflixCard
            title="Holding It Down"
            subtitle="110kg strong"
            description="I'm lowkey kinda strong - this boy is like 110kg!"
            imageUrl="/images/personas/fans/basketball-photoshoot-holding.JPG"
            tags={["Strong", "Athletic", "110kg"]}
            imagePosition={8}
          />
          <NetflixCard
            title="Jump Shot"
            subtitle="Don't mess with us"
            description="Dont mess with us - bringing the intensity."
            imageUrl="/images/personas/fans/basketball-photoshoot-jump.JPG"
            tags={["Jump", "Athletic", "Intense"]}
            imagePosition={8}
          />
          <NetflixCard
            title="Double Jump"
            subtitle="DONT MESS"
            description="DONT MESS WITH US - seriously!"
            imageUrl="/images/personas/fans/basketball-photoshoot-jump2.JPG"
            tags={["Athletic", "Jump", "Power"]}
            imagePosition={8}
          />
          <NetflixCard
            title="Kicking"
            subtitle="Don't get fresh"
            description="Don't be getting fresh with me or this'll be you!"
            imageUrl="/images/personas/fans/basketball-photoshoot-kicking.JPG"
            tags={["Fun", "Athletic", "Playful"]}
          />
          <NetflixCard
            title="Laughing"
            subtitle="How cute"
            description="How cute - when things get too funny."
            imageUrl="/images/personas/fans/basketball-photoshoot-laughig.JPG"
            tags={["Laughing", "Cute", "Joy"]}
            imagePosition={8}
          />
          <NetflixCard
            title="Love"
            subtitle="We love love"
            description="We love love - team bonding vibes."
            imageUrl="/images/personas/fans/basketball-photoshoot-love.JPG"
            tags={["Love", "Bond", "Team"]}
            imagePosition={8}
          />
          <NetflixCard
            title="Hugging"
            subtitle="Affectionate"
            description="We love love - hugging it out."
            imageUrl="/images/personas/fans/basketball-photoshoot-hugging.JPG"
            tags={["Hugs", "Affection", "Caring"]}
            imagePosition={7}
          />
          <NetflixCard
            title="Pregnant Pose"
            subtitle="This could be us"
            description="This could us but you playin'"
            imageUrl="/images/personas/fans/basketball-photoshoot-pregnant.JPG"
            tags={["Funny", "Playful", "Humor"]}
          />
          <NetflixCard
            title="Serious"
            subtitle="Woof woof"
            description="Woof woof - putting on serious faces."
            imageUrl="/images/personas/fans/basketball-photoshoot-serious.JPG"
            tags={["Serious", "Intense", "Focused"]}
            imagePosition={9}
          />
          <NetflixCard
            title="Wheelbarrow"
            subtitle="Teamwork"
            description="Teamwork makes the dream work <3"
            imageUrl="/images/personas/fans/basketball-photoshoot-wheelbarrow.JPG"
            tags={["Teamwork", "Fun", "Partner"]}
          />
          <NetflixCard
            title="Classic Shot"
            subtitle="Ball is life"
            description="I just wanna ball with my bros."
            imageUrl="/images/personas/fans/basketball-photoshoot.JPG"
            tags={["Basketball", "Classic", "Life"]}
            imagePosition={8}
          />
          <NetflixCard
            title="Closer Shot"
            subtitle="Up close"
            description="I just wanna ball with my bros - closer view."
            imageUrl="/images/personas/fans/basketball-photoshoot-closer.JPG"
            tags={["Basketball", "Close", "Photoshoot"]}
            imagePosition={8}
          />
          <NetflixCard
            title="Headshot"
            subtitle="Modeling career"
            description="My modeling career is dead and gone."
            imageUrl="/images/personas/fans/basketball-headshot1.JPG"
            tags={["Headshot", "Modeling", "Basketball"]}
            imagePosition={8}
          />
        </NavSection>

        {/* Basketball Achievements */}
        <NavSection title="Basketball Achievements">
          <NetflixCard
            title="Weatherproof Squad"
            subtitle="WEATHERPROOOOOOFFFFFF"
            description="WEATHERPROOOOOOFFFFFF - rain can't stop us."
            imageUrl="/images/personas/fans/baller-squad-weatherproof.jpg"
            tags={["Weatherproof", "Dedication", "Rain"]}
          />
          <NetflixCard
            title="Summer League 2022"
            subtitle="High fives for Mark"
            description="The highest of fives for my friend Mark (I blocked him fr)"
            imageUrl="/images/personas/fans/basketball-SL-2022.jpg"
            tags={["Summer League", "Block", "Friends"]}
            imagePosition={8}
          />
          <NetflixCard
            title="Don't Jump Pass"
            subtitle="Basketball tip"
            description="Dont jump and pass!! - classic mistake."
            imageUrl="/images/personas/fans/basketball-SL.jpg"
            tags={["Basketball", "Skills", "Game"]}
          />
          <NetflixCard
            title="Scholarship Days"
            subtitle="How cute"
            description="How cute am I - basketball scholarship days."
            imageUrl="/images/personas/fans/bball-scholarship.JPG"
            tags={["Scholarship", "Young", "Cute"]}
          />
          <NetflixCard
            title="White Man Can Jump"
            subtitle="Favorite photo"
            description="WHITE MAN CAN JUMP - one of my favorites."
            imageUrl="/images/personas/fans/fav-basketball-photo.jpg"
            tags={["Jump", "Athletic", "Favorite"]}
            imagePosition={8}
          />
          <NetflixCard
            title="Stat Sheet Stuffer"
            subtitle="The Luka Doncic of Division 7"
            description="The Luka Doncic of Division 7 - stat sheet stuffer on our team's funny Instagram account."
            imageUrl="/images/personas/fans/graphic_of_me_player_of_the_game_basketball.JPG.JPG"
            tags={["Stats", "Luka", "Division 7"]}
          />
          <NetflixCard
            title="National Cup Champions"
            subtitle="Ulster University"
            description="The aftermath in the changing room in the National Basketball Arena with my Ulster University teammate after our team had won the National Cup."
            imageUrl="/images/personas/fans/winning-basketball-national-cup.JPG"
            tags={["Champions", "National Cup", "Ulster"]}
          />
        </NavSection>

        {/* School Basketball */}
        <NavSection title="Ardscoil Rís Basketball Legacy">
          <NetflixCard
            title="Hall of Fame"
            subtitle="Immortalised"
            description="We are immortalised forever on the Walls of Ardscoil Rís Sports Hall."
            imageUrl="/images/personas/fans/schoolball.JPG"
            tags={["Ardscoil Rís", "Champions", "Legacy"]}
          />
          <NetflixCard
            title="Leinster Champions"
            subtitle="Hall of Fame 2"
            description="We are immortalised forever on the Walls of Ardscoil Rís Sports Hall - winning Leinster nearly every year."
            imageUrl="/images/personas/fans/schoolball2.JPG"
            tags={["Leinster", "Champions", "School"]}
          />
          <NetflixCard
            title="All Ireland"
            subtitle="Hall of Fame 3"
            description="We are immortalised forever on the Walls of Ardscoil Rís Sports Hall - some All Ireland success too."
            imageUrl="/images/personas/fans/schoolball3.JPG"
            tags={["All Ireland", "Success", "Pride"]}
          />
          <NetflixCard
            title="The Dynasty"
            subtitle="Hall of Fame 4"
            description="We are immortalised forever on the Walls of Ardscoil Rís Sports Hall - a very successful basketball team."
            imageUrl="/images/personas/fans/schoolball4.JPG"
            tags={["Dynasty", "Basketball", "Legacy"]}
          />
        </NavSection>

        {/* Oasis & Music */}
        <NavSection title="Oasis Obsession">
          <NetflixCard
            title="Dream Come True"
            subtitle="Croke Park 2025"
            description="Cool photo of me and my friend David drinking Guinness after going to see Oasis in Croke Park, 2025. One of the best nights of my life, a dream come true. Oasis are my favourite band."
            imageUrl="/images/personas/fans/drinking-guinness.jpg"
            tags={["Oasis", "Croke Park", "Guinness"]}
          />
        </NavSection>

      {/* Belfast Friends */}
        <NavSection title="Belfast Traditions">
          <NetflixCard
            title="Kelly's Cellar"
            subtitle="Best Guinness in Ireland"
            description="Kellys is the best pint of Guinness in Ireland - yearly tradition with Matty and Goan."
            imageUrl="/images/personas/fans/boys-in-kellys.JPG"
            tags={["Kelly's", "Guinness", "Tradition"]}
          />
          <NetflixCard
            title="Ollie's Aftermath"
            subtitle="Gets blurry"
            description="What happens after we go for a few pints of Guinness in Kellys, we end up in Ollie's and it gets blurry."
            imageUrl="/images/personas/fans/boys-in-ollies.JPG"
            tags={["Ollie's", "Blurry", "Fun"]}
          />
          <NetflixCard
            title="Matty's Kingdom"
            subtitle="King of Ollie's"
            description="I'm dressed impeccably in my overalls."
            imageUrl="/images/personas/fans/matty-in-ollies.JPG"
            tags={["Matty", "Overalls", "Style"]}
          />
          <NetflixCard
            title="Belfast Roommates"
            subtitle="Fruit bowl terror"
            description="Fruit bowls HATE to see us coming."
            imageUrl="/images/personas/fans/belfast-roommates.JPG"
            tags={["Roommates", "Belfast", "Fun"]}
          />
          <NetflixCard
            title="Sad Boys"
            subtitle="The mood"
            description="The sad boys - embracing all the emotions."
            imageUrl="/images/personas/fans/sad-boys.jpg"
            tags={["Sad Boys", "Mood", "Real"]}
            imagePosition={8}
          />
        </NavSection>

        {/* Best Friends */}
        <NavSection title="Best Friends">
          <NetflixCard
            title="Luke - Best Friend"
            subtitle="Half our lives"
            description="Best Friends for more than half of our lives. Here's to the rest of it."
            imageUrl="/images/personas/fans/fav-photo-of-me-and-luke.jpg"
            tags={["Luke", "Best Friend", "Forever"]}
            imagePosition={8}
          />
          <NetflixCard
            title="Before We Got Fat"
            subtitle="2018 throwback"
            description="Back before we got fat - me and Luke in 2018."
            imageUrl="/images/personas/fans/me-and-luke-2018.JPG"
            tags={["Luke", "2018", "Throwback"]}
            imagePosition={8}
          />
          <NetflixCard
            title="Mary & Tosh"
            subtitle="The inspiration"
            description="Me with my best friends parents, Mary and Tosh - Mary Byrne inspired me to become a teacher."
            imageUrl="/images/personas/fans/me-and-mary-and-tosh.jpg"
            tags={["Mary", "Tosh", "Teaching"]}
          />
          <NetflixCard
            title="Kate O'Connor"
            subtitle="Olympian friend"
            description="An old photo of me and my friend Kate O'Connor at the sports awards when we used to study at Ulster University together. Kate's gone on to win silver at the world athletics championships in 2025, as well compete in the Olympics in Paris, 2024. She's a baller."
            imageUrl="/images/personas/fans/me-and-kateoconnor-at-a-ball.JPG"
            tags={["Kate O'Connor", "Olympian", "Ulster"]}
            imagePosition={8}
          />
        </NavSection>

      {/* Coffee Culture */}
        <NavSection title="Coffee Culture">
          <NetflixCard
            title="Eric the Wizard"
            subtitle="3fe Coffee Shop"
            description="Me, in my favourite coffee shop, 3fe, getting served coffee by my favourite barista and friend, Eric the Wizard."
            imageUrl="/images/personas/fans/]getting-coffee.JPG"
            tags={["3fe", "Eric", "Coffee"]}
          />
          <NetflixCard
            title="Latte Art"
            subtitle="Not bad ay!"
            description="The boys in 3fe have been teaching me to do some latte art - not bad ay!!!"
            imageUrl="/images/personas/fans/latte-art.JPG"
            tags={["Latte Art", "3fe", "Learning"]}
          />
        </NavSection>

        {/* Fitness & Health */}
        <NavSection title="Fitness Journey">
          <NetflixCard
            title="Hyrox Barcelona"
            subtitle="Brutal but fun"
            description="Me and my best friend Ciaran after completing our first Hyrox together in Barcelona! It was brutal. I thought it would be easy so I didn't do any training as I thought I'd be fine. I'm not much of a runner so we didn't do as well as expected! But still fun."
            imageUrl="/images/personas/fans/completing-a-hyrox.jpg"
            tags={["Hyrox", "Barcelona", "Ciaran"]}
            imagePosition={6}
          />
          <NetflixCard
            title="Spaghetti Arms"
            subtitle="Post workout"
            description="The final Spaghetti Arms - after a tough session."
            imageUrl="/images/personas/fans/last-spaghetti-arms.JPG"
            tags={["Workout", "Arms", "Training"]}
          />
        </NavSection>

        {/* Travel & Adventures */}
        <NavSection title="Travel & Adventures">
          <NetflixCard
            title="Vintage Paris"
            subtitle="City of lights"
            description="Vintage lense of Paris - capturing the beauty."
            imageUrl="/images/personas/fans/vintage-paris.JPG"
            tags={["Paris", "Vintage", "Beauty"]}
          />
          <NetflixCard
            title="Paris Streets"
            subtitle="Vintage lens"
            description="Vintage lense of Paris - street scenes."
            imageUrl="/images/personas/fans/vintage-paris2.JPG"
            tags={["Paris", "Streets", "Charming"]}
          />
          <NetflixCard
            title="Paris Views"
            subtitle="Architecture"
            description="Vintage lense of Paris - stunning architecture."
            imageUrl="/images/personas/fans/vintage-paris3.JPG"
            tags={["Paris", "Architecture", "Views"]}
          />
          <NetflixCard
            title="More Paris"
            subtitle="Continued"
            description="Vintage lense of Paris - more beautiful shots."
            imageUrl="/images/personas/fans/vintage-paris4.JPG"
            tags={["Paris", "Travel", "Photos"]}
          />
          <NetflixCard
            title="Paris Final"
            subtitle="Last shot"
            description="Vintage lense of Paris - the final capture."
            imageUrl="/images/personas/fans/vintage-paris5.PNG"
            tags={["Paris", "Final", "Memories"]}
          />
          <NetflixCard
            title="Powerscourt"
            subtitle="Waterfall"
            description="HE LIVES UNDAAA A WAAATAA FALL - Powerscourt beauty."
            imageUrl="/images/personas/fans/powerscourt.JPG"
            tags={["Powerscourt", "Waterfall", "Ireland"]}
          />
          <NetflixCard
            title="Gone Fishing"
            subtitle="With Dad"
            description="Fishing + pints + dad = great time."
            imageUrl="/images/personas/fans/gone-fishing.JPG"
            tags={["Fishing", "Dad", "Quality Time"]}
          />
          <NetflixCard
            title="Parents Visit"
            subtitle="Belfast tour"
            description="Mam and Dad's first time in Belfast!"
            imageUrl="/images/personas/fans/parents-first-trip-to-belfast.JPG"
            tags={["Parents", "Belfast", "Family"]}
          />
          <NetflixCard
            title="Boston Bound"
            subtitle="Shipping off"
            description="Shipping off to Boston!! Matty Belfast + Boston = Matty Boston."
            imageUrl="/images/personas/fans/shipping-off-to-boston.JPG"
            tags={["Boston", "Travel", "Adventure"]}
          />
          <NetflixCard
            title="First Baseball"
            subtitle="American experience"
            description="Gavin's first baseball game x - experiencing America."
            imageUrl="/images/personas/fans/my-first-baseball-game.JPG"
            tags={["Baseball", "America", "First"]}
          />
          <NetflixCard
            title="Casement's SF"
            subtitle="Irish bar"
            description="A gorgeous passage from the Visitors book, Casement's Bar, Mission District, San Francisco."
            imageUrl="/images/personas/fans/passage-from-visitors-book-casements-sf.jpg"
            tags={["SF", "Irish", "Bar"]}
          />
          <NetflixCard
            title="Olympics Support"
            subtitle="COYBIG"
            description="Me repping Ireland at the Paris 2024 Olympics, shouting for the Women's rugby 7s. I'm wearing my dad's 2002 world cup Ireland jersey, a classic and a family treasure. Maddison Levi for Australia was our favourite player at the tournament - MADDISON LEVI!"
            imageUrl="/images/personas/fans/supporting-ireland-at-olympics.JPG"
            tags={["Olympics", "Ireland", "Rugby"]}
          />
        </NavSection>

        {/* Street Photography */}
        <NavSection title="Street Photography">
          <NetflixCard
            title="Cool Laneway"
            subtitle="Photo opportunity"
            description="Found a cool lane way once and decided it would be a great photo opp."
            imageUrl="/images/personas/fans/laneway.JPG"
            tags={["Laneway", "Photography", "Cool"]}
          />
          <NetflixCard
            title="Fashion Shoot"
            subtitle="Impromptu"
            description="Lil impromptu fashion shoot in the laneway."
            imageUrl="/images/personas/fans/laneway2.JPG"
            tags={["Fashion", "Impromptu", "Style"]}
          />
        </NavSection>

        {/* Lifestyle & Personality */}
        <NavSection title="Lifestyle & Personality">
          <NetflixCard
            title="Coolest T-Shirt"
            subtitle="Biggest regret"
            description="My biggest regret in life was NOT buying this t shirt."
            imageUrl="/images/personas/fans/coolest-tshirt.jpg"
            tags={["Fashion", "Regret", "Cool"]}
          />
          <NetflixCard
            title="Movember"
            subtitle="First and last"
            description="My first and last Movember - the moustache experiment."
            imageUrl="/images/personas/fans/first-and-last-movember.jpg"
            tags={["Movember", "Moustache", "Charity"]}
          />
          <NetflixCard
            title="Modelling Debut"
            subtitle="First shoot"
            description="First Modeling shoot hehe - trying my hand at modelling."
            imageUrl="/images/personas/fans/first-modelling-shoot.JPG"
            tags={["Modelling", "First", "Shoot"]}
            imagePosition={9}
          />
          <NetflixCard
            title="Mug Collection"
            subtitle="Collector"
            description="This is my mug collection - I'm a collector of fine mugs."
            imageUrl="/images/personas/fans/mug-collection.JPG"
            tags={["Mugs", "Collection", "Home"]}
          />
          <NetflixCard
            title="Hella Fruit"
            subtitle="Fruit bowl terror"
            description="The fruit bowl that HATES to see me and my housemates coming."
            imageUrl="/images/personas/fans/hella-fruit.JPG"
            tags={["Fruit", "Healthy", "Housemates"]}
          />
          <NetflixCard
            title="Miami Vice"
            subtitle="Didn't get the part"
            description="Miami Vice Audition (didn't get the part) - but the vibes were immaculate."
            imageUrl="/images/personas/fans/miami-vice-audition.JPG"
            tags={["Miami Vice", "Audition", "Vibes"]}
            imagePosition={8}
          />
          <NetflixCard
            title="Mattress Mick!"
            subtitle="Legend spotted"
            description="Posing getting a nice picture just so we could get a snap of MATTRESS MICK!"
            imageUrl="/images/personas/fans/mattress-mick-wedding.JPG"
            tags={["Mattress Mick", "Wedding", "Legend"]}
          />
          <NetflixCard
            title="He's a Shooter"
            subtitle="SHOOTAAAA"
            description="HE'S A SHOOTAAAA - basketball shooter mentality."
            imageUrl="/images/personas/fans/shoota.JPG"
            tags={["Shooter", "Basketball", "Mentality"]}
          />
          <NetflixCard
            title="Tea Time"
            subtitle="Simple pleasures"
            description="Tea - sometimes the simple things in life are the best."
            imageUrl="/images/personas/fans/tea.jpg"
            tags={["Tea", "Simple", "Relax"]}
          />
          <NetflixCard
            title="Woodwork Project"
            subtitle="LC creation"
            description="Here's my LC woodwork project! - handmade craftsmanship."
            imageUrl="/images/personas/fans/woodwork-project.JPG"
            tags={["Woodwork", "LC", "Handmade"]}
          />
          <NetflixCard
            title="Oh Donuts"
            subtitle="Random encounter"
            description="Hey man do you like oh! donuts man?? - memorable encounters."
            imageUrl="/images/personas/fans/oh!-donuts-guy.PNG"
            tags={["Donuts", "Random", "Encounter"]}
            imagePosition={8}
          />
        </NavSection>

        {/* Childhood & Family */}
        <NavSection title="Childhood & Family">
          <NetflixCard
            title="Christmas 2010"
            subtitle="Nana's floor"
            description="Me and my cousins receiving our Christmas presents on our nana's floor, 2010."
            imageUrl="/images/personas/fans/12yo-gav.JPG"
            tags={["Christmas", "2010", "Family"]}
          />
          <NetflixCard
            title="Baby Gav"
            subtitle="Used to be cute"
            description="A cute baby photo of myself, I used to be cute!"
            imageUrl="/images/personas/fans/babyphoto.JPG"
            tags={["Baby", "Cute", "Childhood"]}
          />
          <NetflixCard
            title="Mam and Dad"
            subtitle="Adrienne and Tony"
            description="Adrienne and Tony - my wonderful parents."
            imageUrl="/images/personas/fans/mam-and-dad.JPG"
            tags={["Parents", "Family", "Love"]}
          />
        </NavSection>

        {/* Projects */}
        <NavSection title="Projects">
          <NetflixCard
            title="The Kneecapp"
            subtitle="Learning Irish through music"
            description="I love Kneecap, and I want to be able to speak more Irish - so I built the kneecapp - I've taken all their songs and translated them from Irish to English (and English to Irish) to help me learn some Gaeilge while enjoying their music."
            imageUrl="/images/personas/fans/thekneecap.png"
            tags={["Kneecap", "Irish", "Translation"]}
          />
        </NavSection>

        {/* Stay Connected */}
        <NavSection title="Stay Connected">
          <NetflixCard
            title="Email Me"
            subtitle="Direct contact"
            description="Drop me a line about anything - projects, basketball, Dublin recommendations, or just to say hello!"
            imageUrl="/images/personas/fans/latte-art.JPG"
            tags={["Email", "Personal", "Chat"]}
            href="mailto:doyle.d.gavin@gmail.com"
          />
          <NetflixCard
            title="Instagram"
            subtitle="@gavinthecraic"
            description="Behind the scenes content, Dublin life, basketball courts, coffee culture, and the occasional build update."
            imageUrl="/images/personas/fans/]getting-coffee.JPG"
            tags={["Instagram", "Behind Scenes", "Dublin"]}
            href="https://instagram.com/gavinthecraic"
          />
        </NavSection>
      </div>
    </NavigationProvider>
  );
}
