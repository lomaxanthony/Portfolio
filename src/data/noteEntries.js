/*  Entry Template

    {
        date:"",
        title:"",
        content: 
        `        
        `
    }


    newline:  \n

*/

const noteEntries = [
  {
    date: "06/17/2025",
    title: "First Post",
    content: `Testing my first blog post for the portfolio site. Using basic JS data structures to display the content with React props. There is definitely a better way to do this, but for right now I want to get something on the page.
    I have allowed too many 'I don't know the most optimal way to do this' issues to delay me getting this Developer Portfolio/Blog live.`,
  },
  {
    date: "06/27/2025",
    title: "test",
    content: "test",
  },
  {
    date: "06/28/2025",
    title: "Focus",
    content: `I need need need to only focus on one change at a time while I am doing development. I start to make a change, notice something that I don’t like, stop what I am doing to fix that—then continue to implement the new feature. It’s so silly. I just add so many variables to potentially debug when things don’t function properly. I know better after the fact, and I need to work on stopping the habit now while the code bases that I am working on are small (and mine).        
        `,
  },
  {
    date: "06/22/2025",
    title: "Weekend Thoughts",
    content: `Weekends are different—in terms of productivity at least. I spent 2 years spending my Saturday grinding projects.  Now I don’t want to do shit. But I wasn’t lazy?
    <br><br>
    I am finding it hard to keep a singular focus to direct my actions during my weekends off. I should be using this time to continue to build and work on projects. I am trying something now where I just dupe my dopamine receptors—fooling mt lizard content consumption habit with CS videos. What am I actually fooling? Am I actually slacking off? I am avoiding any real work but I am trying to osmosis my way into learning more about software development. I think it is working? I am trying to hack my way into being a ‘productive’ person. Technically I was productive this weekend. But I can feel myself slipping. Constantly I am tempted by the siren call of my phone. If I can trick myself into thinking that my actions are positive I can justify my laziness. But is that really what is happening? Which brain is actually in control? The lizard? The adult? Or am I just a kid trying to find my purpose?  
    <br><br>
    This has been one hell of a scattered brain dump. And it’s been a weird few days. I (hope) that I overcame my brief low point in my post graduation malaise. Motivation is no longer fleeting. Everyday, I can tell that my confidence is returning, and I recognize the market’s inefficiency is more to blame for my stalling than my skills as a developer. With that said, I can’t give myself a pass for my utter abandonment of coding the last few months. I just stopped trying to grow. I stopped grinding my axe. I stopped trying. (So dramatic, I know).        
    `,
  },
  {
    date: "07/02/2025",
    title: "Dev Notes Formatting",
    content: `I have a rather simple setup right now for my ‘data’ in my portfolio site. It’s just JavaScript arrays that I map over. This made learning React much easier in the beginning because I didn’t have to struggle with how frontend and backend talked to each other, I just had data. And in a attempt to keep this portfolio site simple, I have kept this JS array style of data storage as I’ve continued to expand the features of my app. 
    <br><br>
    This simplicity has been an asset during the early stages of development, but with simplicity comes downsides. In this case: formatting. From my very limited research, I believe a lot of devs that create a ‘bloggy’ section of their portfolio have text that can be formatted in a more traditional sense—like markdown language for example. 
    <br><br>
    My ‘Dev Notes’ are just a long string under the content prop that React displays as one <p> tag. I took many English classes in my first degree, and I am a huge fan of spacing in writing. I think everyone should. Writing without proper spacing and punctuation lacks flow, readability, and comprehension. And as someone who can—at times—be a little long winded with my writing, I knew I needed to find a way to get some damn paragraph breaks in there. Monolithic blocks of my babbling is not good for anyone’s user experience.
    <br><br>
    So I tried a few things. Hitting enter twice in the string doesn’t work. Newline characters and <br> tag don’t work either. I was kinda stuck. Off to google dot com. Well, actually to Copilot first, but it listed something so silly I thought: <i>there’s no way this is a thing</i>. (Also, side note, Copilot—specifically Claude Sonnet 4 told me the line break would work. Stupid AI!)
    <br><br>
    Behold: <code>dangerouslySetInnerHTML</code>  which is, shockingly, a real thing. And named so because it is, in fact, dangerous. I read this <a href="https://blog.logrocket.com/using-dangerouslysetinnerhtml-react-application/" target="_blank">blog</a> on the origins of the property, its vulnerabilities, and its implementation. For my use case though, <code>dangerouslySetInnerHTML</code> is the perfect solution as it renders HTML elements inside the strings that I am passing as my data. Now I can just format my dev note content with HTML tags, allowing for full and specific control of formatting for each specific note. 
    <br><br>
    At some point, I would like to implement a cleverer way to handle text formatting, but for now, I’m feeling dangerous.`,
  },
  {
    date: "07/06/2025",
    title: "Removing 'LightMode'",
    content: `Getting rid of Light Mode for now. Added an atmospheric gradient—only really works and looks good with a dark background. No need to have both I think. I get how to add the button and use the setDarkMode hook to change the background color, but I never got it fully working in the first place. (I have admittedly have been relying on Copilot for a lot of CSS). 
    <br></br>
    And this is another example of taking the quick AI shortcut to get “full functionality” that ends up being clunky in execution. Even worse, I wouldn’t say that I fully learned conditional light/dark rendering. I've watched a few videos of developers implementing it into their site, but I obviously didn't fully grasp the important steps to make sure both light and dark work together with Tailwind. Might be a feature to re-implement at a future date.         
    `,
  },
  {
    date: "07/07/2025",
    title: "Hamburger for Mobile",
    content: `I texted the link to my site to a friend today. Realizing that I haven’t seen how it looks on mobile, I opened the link on my phone. I realized something: I need a hamburger!  Hamburger Menu that is. I can’t see my nav bar on small screens, which I knew would be a potential issue, but I’ve only been developing on a full desktop browser. 
    <br></br>
    I’ve watched a few videos of people building portfolio sites with react and seen how they have handled the hamburger menu. I followed along with my original iteration of my portfolio site and had a working hamburger menu. But as with many aspects of the early implementation of my portfolio site, I was just trying to implement features I knew that I needed without fully understanding how they’re built.
    <br></br>
    Turns out that the best way to do this is always begin formatting your CSS with mobile screens in mind and then use the Tailwind breakpoints to handle larger screens. I made the classic mistake of trying to learn two technologies at one time (React and Tailwind), which naturally led me to asking Copilot to handle much of the CSS.
    <br></br>
    Now I have to go back and re-do things the correct way (I hope). As always, there’s a good lesson here in taking shortcuts in order to get something working, and I know better. But I needed to <i>finally</i> get my portfolio hosted and live. Not only that, I also knew that I needed the site to look and feel professional. The irony of this is not lost on me: taking a shortcut without fully understanding how TailwindCSS works may have made my site appear more polished, but in reality just made it clunky and disorganized.
    <br></br>
    I think Vibe-Coding certain sections with the knowledge that at some point I will absolutely need to refactor is a slippery slope as the scope increases with this and other projects. Although this approach has allowed me to get a functional app live, and my thirst for tinkering and understanding is saving me from an endless tunnel of shallow understanding.`,
  },
  {
        date:"07/08/2025",
        title:"Overscroll",
        content: 
        `So apparently macOS has issues with overscrolling, which I didn’t know! I’ve been predominantly  developing on Windows for my Portfolio site using Firefox as my default browser. I have a post from yesterday where I discuss finally viewing my site from my iPhone’s Safari browser (I like to block ads, which can only be done with Safari 🙃). Digression aside, today I decided to do some development from my MacBook. I fixed the formatting of a button to match other buttons on my site. After completing that task, I was just bouncing around the website, checking that everything was working as I intended, when I noticed that scrolling all the way up or all the way down, showed some white space. It looked awful. I looked it up and this is known issue with some browsers and especially with MacOS’s trackpad behavior.
        <br></br>
        I’m gonna be honest, I never would have know this stuff unless I played around with different browsers and operating systems, an idea that school would have never taught me. There is no assignment that focuses on testing your app on different systems or architectures. The subject is slightly addressed, and I knew that it was a potential issue that developers had to consider when building a product. But seeing first hand how something that I built looks on various platforms, knowing when a feature or a page doesn’t look ‘right’, really opened my eyes. All the posts and videos telling un-hired devs to just build things to learn were right. School simulates design and gives you practice. Building a working project is a completely different beast, and I’ve learned so much about the design edge cases of building a simple static site.
        <br></br>
        Back to the overscoll…
        <br></br>
        I had copilot fix it for me, and here’s what it explained to me:
        <br></br>
        To prevent overscrolling from showing white space, you typically need to set the background color of the html and body elements to match your site's background.
        To prevent overscrolling from showing white space, you need to ensure that the html element also has the same background as your body. The issue is that when users overscroll (especially on mobile devices or with trackpads), the browser shows the html element's background, which defaults to white.
        Here's how to fix it by updating your CSS:
        
        <code> index.css+5-0 
        // Additionally, you can add some CSS properties to further prevent overscrolling behavior:
        index.css+6-0
        </code>
        <br></br>
        Here's what I've added to prevent overscrolling white space:
        HTML background: Set the html element to have the same dark gradient background as your site
        overscroll-behavior: none: This prevents the bouncing overscroll effect on both html and body
        overflow-x: hidden: This prevents horizontal overscrolling on mobile devices
        These changes will ensure that:
        When users overscroll vertically (bounce effect on mobile/trackpad), they'll see your dark background instead of white
        The overscroll bounce animation is disabled
        Horizontal overscrolling is prevented
        The key insight is that the html element is what shows during overscroll, so it needs to match your site's design. This is a common issue that many developers overlook!     
        `
    }

];

export default noteEntries;



