'use client';

import React from 'react';
import NetflixCard from '@/components/NetflixCard';
import { NavigationProvider } from '@/components/NavigationProvider';
import NavSection from '@/components/NavSection';

export default function SuitorsPage() {
  return (
    <NavigationProvider>
      <div className="netflix-page">
        {/* Hero Section */}
        <div className="netflix-hero">
          <NetflixCard
            title="The Complete Package"
            subtitle="6'2&quot;, athletic, creative, ambitious"
            description="Teacher-turned-founder building the future of education. Love basketball, photography, coffee culture, and deep conversations. Based in Dublin, ready for adventures."
            imageUrl="/images/personas/suitors/basketball-photoshoot-main.JPG"
            badge="Available"
            rating="Complete Package"
            duration="26 years old"
            tags={["Athletic", "Creative", "Ambitious", "Dublin"]}
            href="/contact"
            size="hero"
            imagePosition={10}
          />
        </div>

        {/* Athletic Photos */}
        <NavSection title="Athletic Side">
          <NetflixCard
            title="White Man Can Jump"
            subtitle="Favorite photo"
            description="WHITE MAN CAN JUMP - one of my favorites."
            imageUrl="/images/personas/suitors/fav-basketball-photo.jpg"
            tags={["Jump", "Athletic", "Favorite"]}
            imagePosition={8}
          />
          <NetflixCard
            title="Weatherproof"
            subtitle="WEATHERPROOOOOOFFFFFF"
            description="WEATHERPROOOOOOFFFFFF - rain can't stop us."
            imageUrl="/images/personas/suitors/baller-squad-weatherproof.jpg"
            tags={["Weatherproof", "Dedication", "Rain"]}
            imagePosition={5}
          />
          <NetflixCard
            title="Summer League"
            subtitle="High fives"
            description="The highest of fives for my friend Mark (I blocked him fr)"
            imageUrl="/images/personas/suitors/basketball-SL-2022.jpg"
            tags={["Summer League", "Basketball", "Friends"]}
            imagePosition={8}
          />
          <NetflixCard
            title="Don't Jump Pass"
            subtitle="Basketball tip"
            description="Dont jump and pass!! - classic mistake."
            imageUrl="/images/personas/suitors/basketball-SL.jpg"
            tags={["Basketball", "Skills", "Game"]}
            imagePosition={5}
          />
          <NetflixCard
            title="Scholarship Days"
            subtitle="How cute"
            description="How cute am I - basketball scholarship days."
            imageUrl="/images/personas/suitors/bball-scholarship.JPG"
            tags={["Scholarship", "Young", "Cute"]}
            imagePosition={8}
          />
        </NavSection>

        {/* Basketball Photoshoot */}
        <NavSection title="Basketball Photoshoot Day">
          <NetflixCard
            title="Just Wanna Ball"
            subtitle="Main shot"
            description="Our basketball club had a photoshoot day to promote the club and we RAN with it. I just wanna ball with my bros."
            imageUrl="/images/personas/suitors/basketball-photoshoot-main.JPG"
            tags={["Basketball", "Photoshoot", "Bros"]}
            imagePosition={10}
          />
          <NetflixCard
            title="Team Photo"
            subtitle="Squad fr"
            description="Squad fr - the whole team together."
            imageUrl="/images/personas/suitors/basketball-photoshoot-team.JPG"
            tags={["Team", "Squad", "Basketball"]}
            imagePosition={7}
          />
          <NetflixCard
            title="Strong Boy"
            subtitle="Holding 110kg"
            description="I'm lowkey kinda strong - this boy is like 110kg!"
            imageUrl="/images/personas/suitors/basketball-photoshoot-holding.JPG"
            tags={["Strong", "110kg", "Athletic"]}
            imagePosition={8}
          />
          <NetflixCard
            title="Jump Shot"
            subtitle="Don't mess with us"
            description="Dont mess with us - bringing the intensity."
            imageUrl="/images/personas/suitors/basketball-photoshoot-jump.JPG"
            tags={["Jump", "Athletic", "Intense"]}
            imagePosition={8}
          />
          <NetflixCard
            title="Double Jump"
            subtitle="DONT MESS"
            description="DONT MESS WITH US - seriously!"
            imageUrl="/images/personas/suitors/basketball-photoshoot-jump2.JPG"
            tags={["Athletic", "Jump", "Power"]}
            imagePosition={8}
          />
          <NetflixCard
            title="Kicking"
            subtitle="Don't get fresh"
            description="Don't be getting fresh with me or this'll be you!"
            imageUrl="/images/personas/suitors/basketball-photoshoot-kicking.JPG"
            tags={["Fun", "Athletic", "Playful"]}
            imagePosition={5}
          />
          <NetflixCard
            title="Laughing"
            subtitle="How cute"
            description="How cute - when things get too funny."
            imageUrl="/images/personas/suitors/basketball-photoshoot-laughig.JPG"
            tags={["Laughing", "Cute", "Joy"]}
            imagePosition={8}
          />
          <NetflixCard
            title="Love"
            subtitle="We love love"
            description="We love love - team bonding vibes."
            imageUrl="/images/personas/suitors/basketball-photoshoot-love.JPG"
            tags={["Love", "Bond", "Team"]}
            imagePosition={8}
          />
          <NetflixCard
            title="Hugging"
            subtitle="Affectionate"
            description="We love love - hugging it out."
            imageUrl="/images/personas/suitors/basketball-photoshoot-hugging.JPG"
            tags={["Hugs", "Affection", "Caring"]}
            imagePosition={7}
          />
          <NetflixCard
            title="Pregnant Pose"
            subtitle="This could be us"
            description="This could us but you playin'"
            imageUrl="/images/personas/suitors/basketball-photoshoot-pregnant.JPG"
            tags={["Funny", "Playful", "Humor"]}
            imagePosition={5}
          />
          <NetflixCard
            title="Serious"
            subtitle="Woof woof"
            description="Woof woof - putting on serious faces."
            imageUrl="/images/personas/suitors/basketball-photoshoot-serious.JPG"
            tags={["Serious", "Intense", "Focused"]}
            imagePosition={9}
          />
          <NetflixCard
            title="Wheelbarrow"
            subtitle="Teamwork"
            description="Teamwork makes the dream work <3"
            imageUrl="/images/personas/suitors/basketball-photoshoot-wheelbarrow.JPG"
            tags={["Teamwork", "Fun", "Partner"]}
            imagePosition={5}
          />
          <NetflixCard
            title="Classic Shot"
            subtitle="Ball is life"
            description="I just wanna ball with my bros."
            imageUrl="/images/personas/suitors/basketball-photoshoot.JPG"
            tags={["Basketball", "Classic", "Life"]}
            imagePosition={8}
          />
        </NavSection>

        {/* Creative & Art */}
        <NavSection title="Creative Side">
          <NetflixCard
            title="With My Art"
            subtitle="Very fine very art"
            description="Very Fine Very Art - appreciating the creative things."
            imageUrl="/images/personas/suitors/gav-with-art.JPG"
            tags={["Art", "Creative", "Culture"]}
            imagePosition={5}
          />
          <NetflixCard
            title="Artsy Boy"
            subtitle="I'm an artsy boy"
            description="I'm an artsy boy - embracing my creative side."
            imageUrl="/images/artboy.JPG"
            tags={["Art", "Creative", "Personality"]}
            imagePosition={5}
          />
          <NetflixCard
            title="Artsy Boy 2"
            subtitle="More art vibes"
            description="I'm an artsy boy - continuing the creative journey."
            imageUrl="/images/artboy2.JPG"
            tags={["Art", "Creative", "Vibes"]}
            imagePosition={5}
          />
          <NetflixCard
            title="Artsy Boy 3"
            subtitle="Art life"
            description="I'm an artsy boy - living the creative life."
            imageUrl="/images/artboy3.JPG"
            tags={["Art", "Creative", "Lifestyle"]}
            imagePosition={5}
          />
          <NetflixCard
            title="Getting Coffee"
            subtitle="Coffee culture"
            description="Hey man do you like coffee man - daily ritual."
            imageUrl="/images/personas/suitors/me-getting-coffee.JPG"
            tags={["Coffee", "3fe", "Daily"]}
            imagePosition={5}
          />
          <NetflixCard
            title="3fe with Eric"
            subtitle="The wizard"
            description="Me, in my favourite coffee shop, 3fe, getting served coffee by my favourite barista and friend, Eric the Wizard."
            imageUrl="/images/personas/fans/]getting-coffee.JPG"
            tags={["3fe", "Eric", "Coffee"]}
            imagePosition={5}
          />
          <NetflixCard
            title="Latte Art"
            subtitle="Learning the craft"
            description="The boys in 3fe have been teaching me to do some latte art - not bad ay!!!"
            imageUrl="/images/personas/fans/latte-art.JPG"
            tags={["Latte Art", "3fe", "Learning"]}
            imagePosition={5}
          />
          <NetflixCard
            title="Woodwork"
            subtitle="LC Project"
            description="Here's my LC woodwork project! - handmade."
            imageUrl="/images/personas/suitors/woodwork-project.JPG"
            tags={["Woodwork", "Handmade", "Creative"]}
            imagePosition={5}
          />
          <NetflixCard
            title="Flower Arrangement"
            subtitle="First creation"
            description="My first flower arrangement (Yeah I made them myself)."
            imageUrl="/images/Myfirstflowers.jpeg"
            tags={["Flowers", "Creative", "Handmade"]}
            imagePosition={5}
          />
        </NavSection>

        {/* Travel & Adventures */}
        <NavSection title="Adventures">
          <NetflixCard
            title="Scottish Mountains"
            subtitle="Hiking"
            description="In the Scottish Mountains - love exploring nature."
            imageUrl="/images/personas/suitors/gav-in-scottish-mountains.jpg"
            tags={["Scotland", "Mountains", "Adventure"]}
            imagePosition={5}
          />
          <NetflixCard
            title="Scotland Hike"
            subtitle="Trail vibes"
            description="On a hike in Scotland - the views were incredible."
            imageUrl="/images/personas/suitors/gav-on-hike-scotland.jpg"
            tags={["Hiking", "Scotland", "Nature"]}
            imagePosition={5}
          />
          <NetflixCard
            title="Italy Drinks"
            subtitle="Aperitivo"
            description="In Italy out for drinkies - la dolce vita."
            imageUrl="/images/personas/suitors/me-in-italy-out-for-drinks.JPG"
            tags={["Italy", "Drinks", "Travel"]}
            imagePosition={5}
          />
          <NetflixCard
            title="SF Pier"
            subtitle="With the seals"
            description="SF Pier ft. the seals - San Francisco adventures."
            imageUrl="/images/personas/suitors/me-on-sanfrancisco-pier.JPG"
            tags={["San Francisco", "Pier", "Seals"]}
            imagePosition={5}
          />
          <NetflixCard
            title="Boston Bound"
            subtitle="Shipping off"
            description="Shipping off to Boston!! Matty Belfast + Boston = Matty Boston."
            imageUrl="/images/personas/suitors/shipping-off-to-boston.JPG"
            tags={["Boston", "Travel", "Adventure"]}
            imagePosition={5}
          />
          <NetflixCard
            title="First Baseball"
            subtitle="American experience"
            description="Gavin's first baseball game x - experiencing America."
            imageUrl="/images/personas/suitors/my-first-baseball-game.JPG"
            tags={["Baseball", "America", "First"]}
            imagePosition={5}
          />
          <NetflixCard
            title="Casement's SF"
            subtitle="Irish bar"
            description="A gorgeous passage from the Visitors book, Casement's Bar, Mission District, San Francisco."
            imageUrl="/images/personas/suitors/passage-from-visitors-book-casements-sf.jpg"
            tags={["SF", "Irish", "Bar"]}
            imagePosition={5}
          />
          <NetflixCard
            title="Vintage Paris"
            subtitle="City of lights"
            description="Vintage lense of Paris - capturing the beauty."
            imageUrl="/images/personas/suitors/vintage-paris.JPG"
            tags={["Paris", "Vintage", "Beauty"]}
            imagePosition={5}
          />
          <NetflixCard
            title="Paris Streets"
            subtitle="Vintage lens"
            description="Vintage lense of Paris - street scenes."
            imageUrl="/images/personas/suitors/vintage-paris2.JPG"
            tags={["Paris", "Streets", "Charming"]}
          />
          <NetflixCard
            title="Paris Views"
            subtitle="Architecture"
            description="Vintage lense of Paris - stunning architecture."
            imageUrl="/images/personas/suitors/vintage-paris3.JPG"
            tags={["Paris", "Architecture", "Views"]}
          />
          <NetflixCard
            title="More Paris"
            subtitle="Continued"
            description="Vintage lense of Paris - more beautiful shots."
            imageUrl="/images/personas/suitors/vintage-paris4.JPG"
            tags={["Paris", "Travel", "Photos"]}
          />
          <NetflixCard
            title="Paris Final"
            subtitle="Last shot"
            description="Vintage lense of Paris - the final capture."
            imageUrl="/images/personas/suitors/vintage-paris5.PNG"
            tags={["Paris", "Final", "Memories"]}
          />
          <NetflixCard
            title="Powerscourt"
            subtitle="Waterfall"
            description="HE LIVES UNDAAA A WAAATAA FALL - Powerscourt beauty."
            imageUrl="/images/personas/suitors/powerscourt.JPG"
            tags={["Powerscourt", "Waterfall", "Ireland"]}
          />
          <NetflixCard
            title="Gone Fishing"
            subtitle="With Dad"
            description="Fishing + pints + dad = great time."
            imageUrl="/images/personas/suitors/gone-fishing.JPG"
            tags={["Fishing", "Dad", "Quality Time"]}
          />
          <NetflixCard
            title="Parents Visit"
            subtitle="Belfast tour"
            description="Mam and Dad's first time in Belfast!"
            imageUrl="/images/personas/suitors/parents-first-trip-to-belfast.JPG"
            tags={["Parents", "Belfast", "Family"]}
          />
        </NavSection>

        {/* Music & Social */}
        <NavSection title="Music & Nightlife">
          <NetflixCard
            title="Oasis Fan"
            subtitle="Unhealthily obsessed"
            description="I love Oasis so much I am so unhealthily obsessed I've been in the top 0.01% of worldwide listeners for the past 4 years."
            imageUrl="/images/personas/suitors/me-at-oasis.JPG"
            tags={["Oasis", "Music", "Obsessed"]}
          />
          <NetflixCard
            title="At Oasis Gig"
            subtitle="Best night ever"
            description="Seeing Oasis irl was the best night of my life - a dream come true."
            imageUrl="/images/personas/curious/at_oasis_gig.JPG"
            tags={["Oasis", "Concert", "Dream"]}
            imagePosition={5}
          />
          <NetflixCard
            title="Post-Oasis Pint"
            subtitle="First time I felt cool"
            description="Cool photo of me and my friend David drinking Guinness after going to see Oasis in Croke Park, 2025. One of the best nights of my life, a dream come true. Oasis are my favourite band."
            imageUrl="/images/personas/fans/drinking-guinness.jpg"
            tags={["Oasis", "Guinness", "Cool"]}
            imagePosition={5}
          />
          <NetflixCard
            title="Guinness Post-Oasis"
            subtitle="Feeling cool"
            description="Probably the first time I ever felt cool - drinking Guinness after Oasis."
            imageUrl="/images/personas/curious/cool_drinking_guinness_at_oasis.JPG"
            tags={["Guinness", "Cool", "Oasis"]}
            imagePosition={5}
          />
          <NetflixCard
            title="Ball with Kate"
            subtitle="Olympic friend"
            description="Glad to see one of my fans doing well for herself (Kate O'Connor, Olympian, World Silver medalist)."
            imageUrl="/images/personas/suitors/me-at-a-ball-with-kateoconnor.JPG"
            tags={["Kate O'Connor", "Olympian", "Friends"]}
            imagePosition={8}
          />
          <NetflixCard
            title="Olympics Rugby"
            subtitle="COYBIG"
            description="Come on you girls in green - supporting Ireland at the Olympics rugby game."
            imageUrl="/images/personas/curious/at-olympic-rugby-game-with-irish-ireland-flag.JPG"
            tags={["Olympics", "Rugby", "Ireland"]}
            imagePosition={5}
          />
          <NetflixCard
            title="Digital Camera Selfie"
            subtitle="The boys"
            description="Taking my digital camera for a spin with the boys."
            imageUrl="/images/TheBoysDigitalSelfie.JPG"
            tags={["Digital Camera", "Boys", "Nightlife"]}
          />
        </NavSection>

        {/* Friends & Social */}
        <NavSection title="Friends & Family">
          <NetflixCard
            title="Best Friend"
            subtitle="More than half our lives"
            description="Best Friends for more than half of our lives. Here's to the rest of it."
            imageUrl="/images/personas/suitors/fav-photo-of-me-and-luke.jpg"
            tags={["Luke", "Best Friend", "Forever"]}
            imagePosition={8}
          />
          <NetflixCard
            title="2018 Throwback"
            subtitle="Before we got fat"
            description="Back before we got fat - me and Luke in 2018."
            imageUrl="/images/personas/suitors/me-and-luke-2018.JPG"
            tags={["Throwback", "2018", "Friends"]}
            imagePosition={8}
          />
          <NetflixCard
            title="Third Wheeling"
            subtitle="Favorite pastime"
            description="One of my favourite past times is 3rd wheeling my best mate and his girlfriend."
            imageUrl="/images/personas/suitors/selfie-with-luke-and-may.jpg"
            tags={["Friends", "Loyal", "Fun"]}
          />
          <NetflixCard
            title="Mam and Dad"
            subtitle="Adrienne and Tony"
            description="Adrienne and Tony - my wonderful parents."
            imageUrl="/images/personas/suitors/mam-and-dad.JPG"
            tags={["Parents", "Family", "Love"]}
          />
          <NetflixCard
            title="Digital Dad"
            subtitle="Through my lens"
            description="My dad through my digital camera - captured moments."
            imageUrl="/images/DigitalDad.jpg"
            tags={["Dad", "Digital Camera", "Family"]}
            imagePosition={7}
          />
          <NetflixCard
            title="Digital Mam"
            subtitle="Through my lens"
            description="My mam through my digital camera - captured memories."
            imageUrl="/images/DigitalMam.jpg"
            tags={["Mam", "Digital Camera", "Family"]}
            imagePosition={7}
          />
          <NetflixCard
            title="Cousin Alfie"
            subtitle="Crazy cousin"
            description="This is my crazy cousin Alfie - always making us laugh."
            imageUrl="/images/ALFIE.jpg"
            tags={["Cousin", "Alfie", "Family"]}
          />
          <NetflixCard
            title="Alfie Again"
            subtitle="The character"
            description="This is my crazy cousin Alfie - the family entertainer."
            imageUrl="/images/ALFIE2.jpg"
            tags={["Cousin", "Alfie", "Fun"]}
            imagePosition={7}
          />
          <NetflixCard
            title="Belfast Roommates"
            subtitle="Fruit bowl terror"
            description="Fruit bowls HATE to see us coming."
            imageUrl="/images/personas/suitors/belfast-roommates.JPG"
            tags={["Roommates", "Belfast", "Fun"]}
          />
          <NetflixCard
            title="Dogpatch Girlies"
            subtitle="My crew"
            description="My Dogpatch girlies - amazing friends from the startup community."
            imageUrl="/images/DogpatchGirls.jpg"
            tags={["Friends", "Dogpatch", "Community"]}
            imagePosition={7}
          />
          <NetflixCard
            title="Sinead & Adam"
            subtitle="Talented friends"
            description="My incredibly talented friends Sinead and Adam."
            imageUrl="/images/GavxSineadxAdam.JPG"
            tags={["Friends", "Talented", "Creative"]}
            imagePosition={8}
          />
          <NetflixCard
            title="Sophie"
            subtitle="Gorgeous friend"
            description="MY GORGEOUS FRIEND SOPHIE - she's the best."
            imageUrl="/images/bophiebort.JPG"
            tags={["Sophie", "Friend", "Gorgeous"]}
          />
          <NetflixCard
            title="Hot Pot Squad"
            subtitle="Chinese food"
            description="Teaching the Chinese about Chinese food - hot pot adventures."
            imageUrl="/images/HotPotSquad.jpeg"
            tags={["Hot Pot", "Food", "Friends"]}
            imagePosition={6}
          />
          <NetflixCard
            title="Sad Boys"
            subtitle="The mood"
            description="The sad boys - embracing all the emotions."
            imageUrl="/images/personas/suitors/sad-boys.jpg"
            tags={["Sad Boys", "Mood", "Real"]}
            imagePosition={8}
          />
          <NetflixCard
            title="Paris Squad"
            subtitle="Olympics crew"
            description="D'Olympics Squad! - Paris adventures with the crew."
            imageUrl="/images/bigparisgroup.JPG"
            tags={["Paris", "Olympics", "Squad"]}
          />
          <NetflixCard
            title="Bless Up"
            subtitle="Good vibes"
            description="BLESSUP - spreading positive energy."
            imageUrl="/images/blessup.JPG"
            tags={["Bless Up", "Vibes", "Positive"]}
          />
        </NavSection>

        {/* Fun & Personality */}
        <NavSection title="Fun Side">
          <NetflixCard
            title="Goofy Scream"
            subtitle="Don't take life too seriously"
            description="Goofy ah scream - life's too short to be serious."
            imageUrl="/images/personas/suitors/me-funny-screaming.JPG"
            tags={["Goofy", "Fun", "Personality"]}
          />
          <NetflixCard
            title="Driving Van"
            subtitle="Road trip ready"
            description="One of my favourite things to do in life is drive my dads van."
            imageUrl="/images/personas/suitors/me-driving-a-van.JPG"
            tags={["Driving", "Van", "Freedom"]}
            imagePosition={7}
          />
          <NetflixCard
            title="Oh Donuts"
            subtitle="Random moment"
            description="Hey man do you like oh! donuts man??"
            imageUrl="/images/personas/suitors/oh!-donuts-guy.PNG"
            tags={["Donuts", "Random", "Fun"]}
            imagePosition={8}
          />
          <NetflixCard
            title="He's a Shooter"
            subtitle="SHOOTAAAA"
            description="HE'S A SHOOTAAAA"
            imageUrl="/images/personas/suitors/shoota.JPG"
            tags={["Shooter", "Basketball", "Energy"]}
          />
          <NetflixCard
            title="Don't Smoke"
            subtitle="But feel cool"
            description="I dont smoke but I feel cool af - just for the aesthetics."
            imageUrl="/images/I_dont_smoke.JPG"
            tags={["Cool", "Aesthetic", "Fun"]}
            imagePosition={8}
          />
          <NetflixCard
            title="Got That DAWG"
            subtitle="WOOF WOOF"
            description="WOOF WOOF - got that dawg in me energy."
            imageUrl="/images/GotThatDAWGinMe.jpg"
            tags={["DAWG", "Energy", "Personality"]}
          />
          <NetflixCard
            title="Tea Time"
            subtitle="Simple pleasures"
            description="Tea - sometimes simple is best."
            imageUrl="/images/personas/suitors/tea.jpg"
            tags={["Tea", "Relax", "Simple"]}
          />
          <NetflixCard
            title="Hella Fruit"
            subtitle="Healthy eating"
            description="The fruit bowl that HATES to see me coming."
            imageUrl="/images/personas/suitors/hella-fruit.JPG"
            tags={["Fruit", "Healthy", "Lifestyle"]}
          />
          <NetflixCard
            title="Mug Collection"
            subtitle="Collector"
            description="This is my mug collection."
            imageUrl="/images/personas/suitors/mug-collection.JPG"
            tags={["Mugs", "Collection", "Home"]}
          />
          <NetflixCard
            title="Miami Vice"
            subtitle="Didn't get the part"
            description="Miami Vice Audition (didn't get the part)."
            imageUrl="/images/personas/suitors/miami-vice-audition.JPG"
            tags={["Miami Vice", "Audition", "Style"]}
            imagePosition={8}
          />
          <NetflixCard
            title="Mattress Mick"
            subtitle="Legend spotted"
            description="Posing getting a nice picture just so we could get a snap of MATTRESS MICK!"
            imageUrl="/images/personas/suitors/mattress-mick-wedding.JPG"
            tags={["Mattress Mick", "Legend", "Wedding"]}
          />
          <NetflixCard
            title="The Homers"
            subtitle="Best gift ever"
            description="It's because of the Homers isn't it (Best gift I've ever recieved)."
            imageUrl="/images/TheHomers.jpeg"
            tags={["Homers", "Gift", "Fun"]}
          />
          <NetflixCard
            title="Brat Era"
            subtitle="In my brat era"
            description="In my BRAT era - embracing the vibes."
            imageUrl="/images/brat.JPEG"
            tags={["Brat", "Era", "Personality"]}
          />
          <NetflixCard
            title="BRAT Summer"
            subtitle="Living it"
            description="In my BRAT era - summer edition."
            imageUrl="/images/personas/fans/supporting-ireland-at-olympics.JPG"
            tags={["BRAT", "Summer", "Vibes"]}
          />
          <NetflixCard
            title="Bohs Maxxing"
            subtitle="Mon the Bohs"
            description="Mon the Bohs - supporting the local team."
            imageUrl="/images/BohsMaxxing.jpg"
            tags={["Bohs", "Football", "Dublin"]}
            imagePosition={7}
          />
          <NetflixCard
            title="Darts Obsession"
            subtitle="New hobby"
            description="New Obsession - Darts. Can't stop, won't stop."
            imageUrl="/images/Darts.jpg"
            tags={["Darts", "Hobby", "New"]}
            imagePosition={7}
          />
        </NavSection>

        {/* Fitness & Gym */}
        <NavSection title="Fitness Journey">
          <NetflixCard
            title="Olympic Weightlifting"
            subtitle="Heavy things"
            description="I like lifting heavy things and putting them back down again."
            imageUrl="/images/personas/suitors/gav-olympic-weightlifting.jpg"
            tags={["Weightlifting", "Olympic", "Strong"]}
          />
          <NetflixCard
            title="Home Gym"
            subtitle="My setup"
            description="Home gym - built during COVID for dedicated training."
            imageUrl="/images/personas/suitors/my-home-gym.JPG"
            tags={["Home Gym", "Dedicated", "Training"]}
            imagePosition={7}
          />
          <NetflixCard
            title="Leg Day"
            subtitle="Never skip"
            description="Arm day... just kidding, it's always leg day."
            imageUrl="/images/personas/suitors/gav-in-gym-legs.jpg"
            tags={["Leg Day", "Gym", "Strong"]}
            imagePosition={8}
          />
          <NetflixCard
            title="Mirror Gains"
            subtitle="Check it out"
            description="Man I love this mirror - tracking progress."
            imageUrl="/images/personas/suitors/gav-mirror-pic.jpg"
            tags={["Mirror", "Gains", "Progress"]}
            imagePosition={8}
          />
          <NetflixCard
            title="Mirror Check 2"
            subtitle="Still fresh"
            description="Man I love this mirror x2 - keeping consistent."
            imageUrl="/images/personas/suitors/gav-mirror-pic2.jpg"
            tags={["Mirror", "Consistent", "Dedicated"]}
            imagePosition={8}
          />
          <NetflixCard
            title="Big Arms"
            subtitle="Looking good"
            description="My arms look good here that is all."
            imageUrl="/images/bballbigarms.jpg"
            tags={["Arms", "Basketball", "Strong"]}
            imagePosition={8}
          />
          <NetflixCard
            title="Hyrox Complete"
            subtitle="Barcelona"
            description="Me and my best friend Ciaran after completing our first Hyrox together in Barcelona! It was brutal. I thought it would be easy so I didn't do any training as I thought I'd be fine. I'm not much of a runner so we didn't do as well as expected! But still fun."
            imageUrl="/images/personas/fans/completing-a-hyrox.jpg"
            tags={["Hyrox", "Barcelona", "Challenge"]}
            imagePosition={6}
          />
          <NetflixCard
            title="Half Marathon Pre"
            subtitle="Ready to go"
            description="PreHalfMarathon - feeling confident before the race."
            imageUrl="/images/PreHalfMarathon.jpeg"
            tags={["Half Marathon", "Running", "Ready"]}
          />
          <NetflixCard
            title="Half Marathon Post"
            subtitle="Completed"
            description="PostHalfMarathon - exhausted but accomplished!"
            imageUrl="/images/PostHalfMarathon.jpeg"
            tags={["Half Marathon", "Finished", "Achievement"]}
          />
          <NetflixCard
            title="Spaghetti Arms"
            subtitle="Post workout"
            description="The final Spaghetti Arms - after a tough session."
            imageUrl="/images/personas/suitors/last-spaghetti-arms.JPG"
            tags={["Workout", "Arms", "Training"]}
          />
        </NavSection>

        {/* Get In Touch */}
        <NavSection title="If You've Read This Far...">
          <NetflixCard
            title="Email Me"
            subtitle="Direct line"
            description="Drop me a message - whether it's about coffee recommendations, Dublin's best spots, or just to say hello!"
            imageUrl="/images/personas/suitors/gav-mirror-pic.jpg"
            tags={["Email", "Personal", "Chat"]}
            href="mailto:doyle.d.gavin@gmail.com"
            imagePosition={8}
          />
          <NetflixCard
            title="Instagram"
            subtitle="@gavinthecraic"
            description="Follow for behind-the-scenes content, Dublin adventures, basketball, coffee culture, and the craic."
            imageUrl="/images/personas/suitors/gav-with-art.JPG"
            tags={["Instagram", "Dublin", "Adventures"]}
            href="https://instagram.com/gavinthecraic"
          />
        </NavSection>
      </div>
    </NavigationProvider>
  );
}
