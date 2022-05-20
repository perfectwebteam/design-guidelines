# Design guidelines
Designing for the web is not the same as designing for print media. Following are some guidelines to design usability and accessibility friendly web designs. When these guidelines are implemented properly, the website will score better on search engines as well.

## A note upfront
The information below might be a bit overkill. It gives a grasp of how we think a proper website should work code-wise. We understand if not everything is clear, or if you simply disagree. In that case we'd love to sit together to discuss the best way to merge our design-systems. 

## General
For easier communication between teams; it's a good practice to define and name everything. From color names and font-sizes to entire elements. We can put all this info in an online styleguide accessible to everybody. This makes designing new pages a breeze, even after a year when a new member joins the team.

## Fonts

### Pick a maximum of 4 fonts
Every weight in a font is a webfont. So Helvetica regular, regular-italic, light en bold are actually 4 fonts, which would complete the websites font list. Too many fonts make a website heavy (and thus slow, scoring lower on search engines).

#### Sizes
Pick a default font-size for mobile and one for desktop (they could be the same). Both should be at least 16px. All the following "scaling" in the website will depend on this/these "root" font-size(s)

#### Headings
We usually work with heading:xxs up to heading:xl, but other names are good as well. These font-styles will define font-family, weight, font-size, line-height and letter-spacing for both mobile up to desktop. Color (and other) modifiers will be defined elsewhere.

#### Fonts sizes
We usually work with font-size:xs up to font-size:xl (where font-size:m is the "root" page font-size, for example 16px), but other names are good as well. These will define font-size and line-height for both mobile and desktop. Other modifiers (like color, alignment, font-weight, etc.) will be defined elsewhere.

#### Font modifiers
We usually work with modifiers like font-weight:bold, text-align:center, but other names are good as well.

## Color

### Names
Define an X amount of colors and name them. Shades of colors and alpha transparent values of colors should have their own name as well. This way we can keep colors manageable. Each color should have a "type" color as well. This "type" color is the text color whenever the (non-type) color is used as a background color. Keep contrast in mind (see contrast below).

We usually create both backgrounds, as well as colors modifiers for all available colors such as "color:black", "background:white". etc. which can be used as classes in the markup.

### Contrast
Make sure all important elements, such as forms, warnings, labels, buttons etc. have [efficient color contrast](https://webaim.org/resources/contrastchecker/). This is not only for people whose sight is not optimal, but also for viewing the website on a mobile phone in the middle of the summer when the brightness of your screen can't get bright enough due to the brightness of the sun.

## Mobile first

### Content mobile-first
Start thinking about what needs to be displayed on a small mobile phone (320 x 568 is still a good start). If a particular piece of content (text, image, video, interactive) is not needed on mobile to convey the message, it's also not needed on desktop sized viewports. Two news-items on mobile to save space? Then two items on desktop it is as well. This is especially helpful when users switch devices (mobile on the way home during a train ride vs continuing on the couch on a tablet). 

### From 320 to 2560
What happens when the max-width of a design is reached (for example 1980px wide)? Does the website keep growing? Center the design with colored areas left and right? Add a shadow behind the main design? Think about a proper maximum width for the design, but also what happens when a user spans their browser on a 2560px wide (er wider) screen.

### Order of elements
In general; what's on top on mobile is on the left on desktop. Technically everything is possible, but extra code results in slower pages. Also keep in mind that users navigating with a keyboard expect items to focus in the order that they visually see it as well.

## Layout

Our layout system is based on [every-layout](https://every-layout.dev/). They explain the rudiments quite good. I suggest at least scanning the rudiment pages and read the parts that grab your attention. 

### Responsive "units"
We work with a [modular scale system](https://every-layout.dev/rudiments/modular-scale/). I suggest reading this entire article since our whole layout system is based on this principle. This means that the websites we build shrink and grow depending on the users browser settings. People with bad sight might have their devices set to a standard bigger font size, when working with pixels, these settings are ignored.

As a second layer we like to make "sizes" grow with the browser by setting mininum and maximum values and scale between these values using the browser with. An example; a heading on mobile might have a font-size of 24px, on desktop it might be 32px. In our code we basically tell the browser that our heading should have a font-size of 24px up until a certain point (for example 37,5 "units" which will translate to 600px when both the browser and main website are set to 16px), then grow in size depending on the viewport size up until another point (60 units for example) and then stay 32px. To further demonstrate this I added a video below.

### Names for layout elements
When building pages we love to work with a set of "layout-building-blocks" (see [every-layout](https://every-layout.dev/)). We're using the "stack", "center", "cluster", "sidebar", "switcher" and the "grid" and we added our own ["flag-object"](https://csswizardry.com/2013/05/the-flag-object/) and some options like "max" (span a maximum with based on the site with) and "shift" (when used with "max" you can shift elements to left or right). 

All these layout elements do not care where they are or how wide your browser window is. Everything is calculated on the element width itself (using CSS, not JS). This make it "impossible" to design something "specific" for mobile/tablet/desktop since we never know where an element is being used and how it behaves on a certain width. Still need a button only on mobile? (there are use cases, like opening filters on mobile that are displayed in the sidebar on desktop for example) We can rebuild certain elements to make them dependent on the viewport instead of the element itself. These are less versatile but can be used whenever we exactly know where an element is being used.

#### Layout modifiers
With a stack element you can space elements vertically from each other, with a cluster you space items both horizontally and vertically. But not each element should be spaced the same. therefor we've got modifiers. Modifiers will make layout elements behave differently. Spacing is an example, grid item widths is another example. Preferably we work with the modular scale in here as well. As an example we can have a modifier called `stack--ms:2` which uses the modular scale 2 value to space items apart.

## Forms

### Labels
Each form element needs a label. Do not add the label inside the field itself since it will disappear when filling in the form. Always put the label [in front or above the field](https://www.uxmatters.com/mt/archives/2006/07/label-placement-in-forms.php).

## This is a bit too much for me
The above information is, in a nutshell how we like to work with layouts to create the best websites for everybody. I understand that this is a lot to take in and fully understand, especially the "layout" section.

As demonstrated, the designs will never be pixel-perfect since they are depending on a lot of factors. So the make the designing phase a bit easier, here's a list of units you can use to design / size / space different elements:

| Element              | Calculated pixel size   |
|----------------------|-------------------------|
| Maximum site width   | 1184px                  |
| Content width        | 776px                   |
| Narrow width         | 572px                   |
| Wider width          | 980px                   |
| Full width           | entire browser viewport |
| Mobile gutter width  | 24px                    |
| Desktop gutter width | 40px                    |
| Modular Scale (MS) 0 | 16px                    |
| MS -1                | 11px                    |
| MS -2                | 7px                     |
| MS -3                | 5px                     |
| MS -4                | 3px                     |
| MS 1                 | 24px                    |
| MS 2                 | 36px                    |
| MS 3                 | 54px                    |
| MS 4                 | 80px                    |
| Default grid item    | 266px                   |
| Sidebar width        | 266px                   |
| font-size-m          | 16px                    |
| font-size-s          | 15px                    |
| font-size-xs         | 14px                    |
| font-size-l          | 18px                    |
| font-size-xl         | 20px                    |
| heading-size-m       | 24px <> 32px            |
| heading-size-s       | 20px <> 24px            |
| heading-size-xs      | 18px <> 20px            |
| heading-size-xxs     | 16px <> 18px            |
| heading-size-l       | 32px <> 38px            |
| heading-size-xl      | 38px <> 40px            |

The list above can easily be adjusted and extended. Just make sure everything fits in a design system :-)

## An example please?
Understanding something by just reading it is quite hard ;)

Below you can find a "general" styleguide where you can click around, adjust your screen size, read the accompanying information and get a better understanding of the different building blocks.

