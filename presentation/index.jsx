import React from 'react';
import preloader from 'spectacle/lib/utils/preloader';
import CodeSlide from 'spectacle-code-slide';
import {
  Appear,
  CodePane,
  Deck,
  Heading,
  Image,
  ListItem,
  List,
  Slide,
  Spectacle,
  Text
} from 'spectacle';

import theme, { reactBlue } from './theme.js';
import { Toggle } from './Toggle.jsx';
import { EventsHeading } from './EventsHeading.jsx';

require('normalize.css');
require('spectacle/lib/themes/default/index.css');

// Custom CSS
require('./index.css');

const red = '#ff4343';

const images = {
  fccLogo: require('../assets/fcc-puck-logo.png'),
  rwrLogo: require('../assets/rwr-logo-large.png'),
  rethink: require('../assets/rethink.png'),
  happyTrees: require('../assets/no-mistakes-just-happy-little-trees.jpg')
};

preloader(images);

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck
          controls={false}
          progress='bar'
          transition={['zoom', 'slide']}
          transitionDuration={500}
          >

          {
            /* Start actual slideshow */
          }

          <Slide
            bgColor='primary'
            transition={['zoom']}
            >
            <Heading
              fit={ true }
              lineHeight={1}
              size={1}
              textColor={reactBlue}
              >
              React.js
            </Heading>
            <Heading
              fit={ true }
              lineHeight={1.5}
              size={1}
              >
              A primer
            </Heading>
            <div style={{ margin: '0 0 20px' }}>
              --------
            </div>
            <a
              href='//BerkeleyTrue.github.io/nodeschoolsf-july'
              target='_blank'
              >
              <Text
                bold={ true }
                margin='20px 0px 0px'
                textColor='white'
                textSize='1.5em'
                >
                BerkeleyTrue.github.io/nodeschoolsf-july
              </Text>
            </a>
          </Slide>

          <Slide>
            <Heading
              caps={ true }
              lineHeight={1.5}
              size={4}
              textColor={reactBlue}
              >
              Who are you?
              <br />
              Why should I listen to you?
              <br />
              I want cookies.
            </Heading>
          </Slide>

          {
            /* logos */
          }

          <Slide
            bgColor='primary'
            notes={`
              * CTO of FreeCodeCamp
              * We’re an open source community that helps you learn to code.
              * self-paced coding challenges
              * build projects, and earn certificates
              * We also connect you with people in your city so you can code together.
              * Thousands of people have gotten jobs after joining our open source community.
            `.trim()
            }
            transition={[ 'zoom' ]}
            >
            <a
              href='https://www.freecodecamp.com'
              target='_blank'
              >
              <Image
                src={images.fccLogo}
                width={600}
              />
            </a>
          </Slide>

          <Slide
            bgColor='primary'
            notes={`
              * Partner and Teacher at RWR
              * Talks/workshops about React in real-world, production applications.
              * Meetups right here in the city
              * Workshops all over the world
            `.trim()
            }
            transition={['zoom']}
            >
            <a
              href='https://www.meetup.com/Real-World-React'
              target='_blank'
              >
              <Image
                src={images.rwrLogo}
                width={600}
              />
            </a>
          </Slide>

          <Slide
            notes={`
              * No questions yet, more to come
            `.trim()
            }
            >
            <Heading
              caps={ true }
              lineHeight={1.5}
              size={4}
              textColor={reactBlue}
              >
              A React Primer
            </Heading>
            <List textColor='white'>
              <Appear><ListItem>Why React</ListItem></Appear>
              <Appear><ListItem>JSX</ListItem></Appear>
              <Appear><ListItem>Components & composition</ListItem></Appear>
              <Appear><ListItem>Props</ListItem></Appear>
              <Appear><ListItem>State</ListItem></Appear>
              <Appear><ListItem>Events</ListItem></Appear>
              <Appear><ListItem>LearnYouReact</ListItem></Appear>
            </List>
          </Slide>

          <Slide
            notes={`
              * Declarative means you no longer have to write DOM plumbing
              * Server folks should get this since its how they normally render
              * XSS protection built in
              * You can drop react into any existing app
              * Its fun! This can not be stressed enough. This is good for morale and recruiting
            `.trim()}
            >
            <Heading
              caps={ true }
              lineHeight={1.5}
              size={1}
              >
              Why React
            </Heading>
            <List textColor='white'>
              <Appear>
                <ListItem>Declarative</ListItem>
              </Appear>
              <Appear>
                <ListItem>Painless Iteration Path</ListItem>
              </Appear>
              <Appear>
                <ListItem>Fun</ListItem>
              </Appear>
            </List>
          </Slide>

          <Slide
            notes={`
              * Markup syntax as apposed to it's own programming language.
              * Very similar to HTML
              * Tag Syntax (looks like HTML)
              * Javascript + XML (not the other way around)
            `.trim()}
            >
            <Heading
              caps={ true }
              lineHeight={1.5}
              size={1}
              >
              JSX
            </Heading>
            <Heading
              caps={ true }
              lineHeight={1.5}
              size={4}
              textColor='white'
              >
              A rich templating language
            </Heading>
            <List textColor='white'>
              <Appear>
                <ListItem>Markup Syntax</ListItem>
              </Appear>
              <Appear>
                <ListItem>JavaScript with XML</ListItem>
              </Appear>
              <Appear>
                <ListItem>Gotchas, not Dealbreakers</ListItem>
              </Appear>
            </List>
          </Slide>

          <CodeSlide
            code={require('raw!./jsx.example')}
            lang='jsx'
            margin='20px auto'
            ranges={[
              { loc: [0, 1], title: 'JSX' },
              { loc: [0, 5], note: 'Render to the DOM' },
              { loc: [6, 20] },
              { loc: [21, 39], title: 'Composition' },
              { loc: [26, 31], note: 'HorizontalNav' },
              { loc: [31, 37], note: 'DropdownMenu' },
              { loc: [21, 39] }
              // ...
            ]}
            transition={['zoom', 'fade']}
          />

          <CodeSlide
            bgColor='primary'
            code={require('raw!./jsx4.example')}
            lang='jsx'
            notes={`
              * This is all just js
            `.trim()}
            ranges={[
              {
                loc: [0, 14],
                title: 'First class JavaScript'
              },
              {
                loc: [0, 14],
                note: 'This is all just JavaScript'
              }
            ]}
            transition={['zoom', 'fade']}
          />

          <Slide
            bgColor='primary'
            notes={`
              * Note that there are ways around the if else issue
              * no if-else statements (expressions only)
              * expressions return values, statements control code flow
            `.trim()}
            transition={['zoom', 'fade']}
            >
            <Heading
              caps={ true }
              lineHeight={1.5}
              size={4}
              textColor='white'
              >
              JSX Gotchas
            </Heading>
            <List textColor='white'>
              <Appear>
                <ListItem>
                  <code>className</code>, <code>htmlFor</code>
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>No <code>if-else</code> statements </ListItem>
              </Appear>
              <Appear>
                <ListItem>Must Wrap Consecutive Tags</ListItem>
              </Appear>
              <Appear>
                <ListItem>All Tags Must Close or Self-Close</ListItem>
              </Appear>
            </List>
          </Slide>

          <Slide>
            <Heading
              caps={ true }
              fit={ true }
              lineHeight={1}
              size={1}
              textColor={reactBlue}
              >
              Components
            </Heading>
            <Heading
              fit={ true }
              lineHeight={1}
              size={4}
              textColor='white'
              >
              Groups of JSX and JavaScript
            </Heading>
          </Slide>

          <CodeSlide
            code={require('raw!./component.example')}
            lang='jsx'
            ranges={[
              { loc: [2, 12], title: 'A Component' }
            ]}
            transition={['zoom', 'fade']}
          />

          <Slide
            notes={`
              * For presentations we will use React.createClass syntax for simplicity
              * There will be exercises and of course you can use any syntax you prefer
            `.trim()}
            >
            <Heading
              caps={ true }
              lineHeight={1.5}
              size={4}
              textColor='white'
              >
              Creating Components
            </Heading>
            <List textColor='white'>
              <Appear>
                <ListItem>Legacy<code>React.createClass</code></ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  ES6 class syntax, i.e. extend <code>React.Component</code>
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>Functional (Read: Stateless)</ListItem>
              </Appear>
            </List>
          </Slide>

          <CodeSlide
            code={require('raw!./components.example')}
            lang='jsx'
            ranges={[
              { loc: [0, 100], title: 'Defining Components' },
              { loc: [2, 12], note: 'React.createClass' },
              { loc: [13, 23], note: 'class extends React.Component' },
              { loc: [24, 30], note: 'Functional (Stateless)' },
              { loc: [24, 30], note: 'The Future is functional!' }
              // ...
            ]}
            transition={[]}
          />

          <Slide>
            <Heading
              caps={ true }
              lineHeight={1.5}
              size={4}
              textColor={ reactBlue }
              >
              Benefits
            </Heading>
            <List textColor='white'>
              <Appear><ListItem>Encapsulation</ListItem></Appear>
              <Appear><ListItem>Composability</ListItem></Appear>
              <Appear><ListItem>Definable API Shape (Contract)</ListItem></Appear>
            </List>
          </Slide>

          <Slide
            notes={`
              * Encapsulation is a benefit, but it does tend to fly in the face of what many people used to think was best practices
              * View-related functionality is key here. Only the functionality necessary for our UI is encompassed by React
            `.trim()}
            >
            <Heading
              caps={ true }
              lineHeight={1.5}
              size={4}
              textColor='white'
              >
              Encapsulation
            </Heading>
            <Text textColor='white'>
              Markup & view-related functionality together at last
            </Text>
            <Appear>
              <List textColor='white'>
                <ListItem>HTML in the form of JSX</ListItem>
                <ListItem>Derived values</ListItem>
                <ListItem>Event handlers</ListItem>
                <ListItem>Modularized and testable</ListItem>
              </List>
            </Appear>
          </Slide>

          <Slide>
            <Image
              src={ images.rethink }
              width={900}
            />
          </Slide>

          <Slide
            notes={`
              * Someone likely already implemented something you need
              * Don't Repeat Yourself
            `.trim()}
            >
            <Heading
              caps={ true }
              lineHeight={1.5}
              size={4}
              textColor='white'
              >
              Composition
            </Heading>
            <Text textColor='white'>Combine and re-use components</Text>
            <Appear>
              <List textColor='white'>
                <ListItem><code>D.R.Y.</code>-er code</ListItem>
                <ListItem>Modularized, testable</ListItem>
                <ListItem>Large and vibrant ecosystem</ListItem>
              </List>
            </Appear>
          </Slide>

          <Slide
            notes={`
              * Components define their Contracts(API)
              * PropTypes tell developers what the component expects to find
            `.trim()}
            >
            <Heading
              caps={ true }
              lineHeight={1.5}
              size={4}
              textColor='white'
              >
              API Shape (Contract)
            </Heading>
            <Text textColor='white'>
              Components tell developers what they expect
            </Text>
            <Appear>
              <List textColor='white'>
                <ListItem>PropTypes define data types</ListItem>
                <ListItem>Gives developer warnings and errors</ListItem>
                <ListItem>Excellent developer experience</ListItem>
              </List>
            </Appear>
          </Slide>

          <Slide
            notes={`
              * none
            `.trim()}
            >
            <Heading
              caps={ true }
              lineHeight={1.5}
              size={4}
              textColor='white'
              >
              Rendering to the DOM
            </Heading>
            <Appear>
              <CodePane
                lang='jsx'
                margin='20px auto'
                source={require('raw!./render.example')}
              />
            </Appear>
          </Slide>

          <Slide
            note={`
            * Let's talk about data
            * data => markup is a great way to think about react components
            * what is the least amount of data needed to create markup
            `.trim()}
            >
            <Heading
              caps={ true }
              fit={ true }
              lineHeight={1}
              size={1}
              textColor={ reactBlue }
              >
              Data
            </Heading>
            <Heading
              fit={ true }
              lineHeight={1}
              size={4}
              textColor='white'
              >
              (data) => markup
            </Heading>
          </Slide>

          <Slide
            notes={`
              * none yet
            `.trim()}
            >
            <Heading
              caps={ true }
              lineHeight={1.5}
              size={4}
              textColor='white'
              >
              Props
            </Heading>
            <List textColor='white'>
              <Appear>
                <ListItem>Component do not care where they come from</ListItem>
              </Appear>
              <Appear>
                <ListItem>Important when integrating with frameworks</ListItem>
              </Appear>
            </List>
          </Slide>

          <CodeSlide
            code={require('raw!./props.example')}
            lang='jsx'
            ranges={[
              { loc: [0, 100], title: 'Passing Props' },
              { loc: [3, 16], note: 'Define a component' },
              { loc: [11, 12], note: 'Access this.props' },
              { loc: [17, 20], note: 'Defined this components API shape' },
              { loc: [21, 25] },
              { loc: [22, 23], note: 'Pass props in as you would HTML attributes' }
              // ...
            ]}
            transition={[]}
          />

          <Slide>
            <Heading
              caps={ true }
              fit={ true }
              lineHeight={1}
              size={1}
              textColor={reactBlue}
              >
              State
            </Heading>
            <Appear>
              <Heading
                fit={ true }
                lineHeight={1}
                size={4}
                textColor='white'
                >
                😈💩🙊😧
              </Heading>
            </Appear>
          </Slide>

          <Slide
            notes={`
              * State is used to model interactivity and change over time
              * State should be as small as possible
              * State should be JSON serializable
            `.trim()}
            >
            <Heading
              caps={ true }
              lineHeight={1.5}
              size={4}
              textColor='white'
              >
              State
            </Heading>
            <List textColor='white'>
              <Appear><ListItem>Interactivity</ListItem></Appear>
              <Appear><ListItem>Change over time</ListItem></Appear>
            </List>
            <Appear>
              <Heading
                caps={ true }
                lineHeight={1.5}
                size={4}
                textColor='white'
                >
                Examples
              </Heading>
            </Appear>
            <Appear>
              <List textColor='white'>
                <Appear>
                  <ListItem>Value of a <code>{'<input />'}</code> tag</ListItem>
                </Appear>
                <Appear>
                  <ListItem>UI loading state</ListItem>
                </Appear>
                <Appear>
                  <ListItem>Unread message count</ListItem>
                </Appear>
              </List>
            </Appear>
          </Slide>

          <Slide>
            <Toggle />
          </Slide>

          <CodeSlide
            code={require('raw!./state.example')}
            lang='jsx'
            ranges={[
              { loc: [0, 100], title: 'Stateful Components' },
              { loc: [5, 8], note: 'Define the initial state' },
              { loc: [16, 29] },
              { loc: [17, 18], note: 'Access state' },
              { loc: [21, 25], note: 'Set attributes based on state' },
              { loc: [20, 21], note: 'Set up an event handler to update state' },
              { loc: [11, 15], note: 'Set up an event handler to update state' },
              { loc: [8, 9], note: 'bind event handler to component instance' }
              // ...
            ]}
            transition={[]}
          />

          <Slide>
            <Heading
              caps={ true }
              fit={ true }
              lineHeight={1}
              size={4}
              textColor='white'
              >
              Rule of thumb
            </Heading>
            <Appear>
              <Heading
                caps={ true }
                fit={ true }
                lineHeight={1}
                size={1}
                textColor={reactBlue}
                >
                Use props...
              </Heading>
            </Appear>
            <Appear>
              <Heading
                caps={ true }
                fit={ true }
                lineHeight={1}
                size={4}
                textColor='white'
                >
                ...until you <span style={{ color: red }}>need</span> state
              </Heading>
            </Appear>
          </Slide>

          <Slide>
            <EventsHeading />
          </Slide>

          <Slide
            notes={`
              * synthetic (not actual dom events)
              * Recycled by React to be reused
              * don't worry about IE8
            `.trim()}
            >
            <Heading
              caps={ true }
              lineHeight={1.5}
              size={1}
              textColor='white'
              >
              Events
            </Heading>
            <List textColor='white'>
              <Appear>
                <ListItem>
                  Attached directly to components
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>Aggregated by React (performant)</ListItem>
              </Appear>
              <Appear>
                <ListItem>Standardized across all browsers</ListItem>
              </Appear>
            </List>
          </Slide>

          <CodeSlide
            code={require('raw!./events-object.example')}
            lang='jsx'
            margin='20px auto'
            notes={`
              * none
            `.trim()}
            ranges={[
              { loc: [0, 18] },
              { loc: [14, 20] },
              { loc: [8, 11], note: 'Similar shape to DOM event objects' },
              { loc: [8, 11], note: 'preventDefault, target, etc' }
            ]}
            transition={[]}
          />

          <Slide
            notes={`
              * none
            `.trim()}
            >
            <a
              href='https://github.com/kohei-takata/learnyoureact'
              style={{ textDecoration: 'none' }}
              target='_blank'
              >
              <Heading
                caps={ true }
                lineHeight={1.5}
                size={1}
                textColor={ reactBlue }
                >
                LearnYouReact
              </Heading>
              <div style={{ color: 'white', margin: '0 0 20px' }}>
                --------
              </div>
              <Text
                bold={ true }
                margin='20px 0px 0px'
                textColor='white'
                textSize='1.5em'
                >
                Beware, Here Be Dragons
              </Text>
            </a>
          </Slide>
          <Slide
            notes={`
              * If array is re-arranged the individual components are not
              * destroyed
            `.trim()}
            >
            <a
              href='https://facebook.github.io/react/docs/multiple-components.html#dynamic-children'
              style={{ textDecoration: 'none' }}
              target='_blank'
              >
              <Heading
                caps={ true }
                lineHeight={1.5}
                size={1}
                textColor='white'
                >
                Special Prop: <code>key</code>
              </Heading>
              <List textColor='white'>
                <Appear>
                  <ListItem>
                    Dynamic Children (Array of elements)
                  </ListItem>
                </Appear>
                <Appear>
                  <ListItem>
                    Performant re-arrangement
                  </ListItem>
                </Appear>
                <Appear>
                  <ListItem>
                    ID's for React
                  </ListItem>
                </Appear>
              </List>
            </a>
          </Slide>

          <CodeSlide
            code={require('raw!./key.example')}
            lang='jsx'
            margin='20px auto'
            notes={`
              * Key is unique to each element
              * do not use array index
              *
            `.trim()}
            ranges={[
              { loc: [3, 10], title: 'Dynamic Elements' },
              { loc: [3, 15] },
              { loc: [16, 24], note: '' },
              { loc: [5, 6] },
              { loc: [6, 7], note: '' },
              { loc: [7, 12], note: '' },
              { loc: [9, 10], note: 'Special' }
            ]}
            transition={[]}
          />

          <Slide transition={['spin', 'slide']}>
            <Heading
              caps={ true }
              fit={ true }
              lineHeight={1.5}
              size={1}
              >
              Questions?
            </Heading>
          </Slide>
          <Slide transition={['spin', 'slide']}>
            <Image
              src={ images.happyTrees }
              width={500}
            />
          </Slide>

        </Deck>
      </Spectacle>
    );
  }
}
