import React, { FC } from 'react';
import { RouteComponentProps } from '@reach/router';
import { Link } from '@reach/router';

// produces a copy of your react component
// bound to the props that we defined in 
// mapStateToProps and mapDispatchToProps
import { connect } from 'react-redux';

// typescript interface of our redux state
import { AuthorizationState } from '../redux/reducers/authentication';

// we define the props that our CONNECTED component
// will recieve (own props + redux props + route props)
interface LandingProps extends RouteComponentProps {
  amILoggedIn: boolean
}

// we must rename our component to keep
// the name of the exported component
// usable and short
const LandingComponent: FC<LandingProps> = (props: LandingProps) => {
  return (
    <>
      <h1>re-CoV-er: Infectiously Human</h1>

      <p>Beating SARS-CoV-2 (a.k.a Covid-19, Coronavirus) takes drastic measures - we need all the physical distancing we can get to avoid completely overwhelming our healthcare systems.</p>
      <p>And even if you’re in the comparatively comfortable situation that you can work from home, things look pretty scary.</p>
      <p>But now imagine how things look for all those people who cannot do their job remotely: performance artists of all kinds, teachers of things that cannot be done online (like dance), small entrepreneurs whose business is crushed, etc.</p>
      <p>Now, if we're all gonna end up under lockdown in one form or another, those of us who can still work will continue to earn almost as usual, while we won't be spending much at all.</p>
      <p>At the same time, those us us who cannot work have lots of time on their hands. Therefore...</p>

      <h2>The Idea</h2>
      <p>...is to provide a digital crowdsourcing platform for self-governing communities, where those who can work can pledge some portion of their income to those in their community who cannot, while those in turn may (optionally!) provide whatever services they want.</p>
      <ul>
        <li>The lockdowns are likely going to last 2-3 month, possibly more. A little donation here and there is not going to be enough to keep people afloat.</li>
        <li>Whether you’re able to work from home or not has nothing to do with what you’re providing to society - it’s a pretty random aspect to determine how hard you’re hit.</li>
        <li>Even if you can’t work, you can always do something: teach someone your favourite song, rhythm, instrument, dance move or recipe; or just listen to someone who needs it.</li>
      </ul>
      <p>So why not help each other out? These are unprecedented times in all of our lifetimes - do we really need more of a reason?</p>

      <Link to="/signup">{props.amILoggedIn ? "Wellcome back" : "Go to Signup"}</Link>

    </>
  )
}

type StateProps = {
  authentication: AuthorizationState
};

// redux state comes in
// whatever we want comes out
const mapStateToProps = (state: StateProps): { amILoggedIn: boolean } => ({
  amILoggedIn: state.authentication.loggedIn
});

// we generate a function that takes a component
// and returns a new component connected
// according to the mapping function
const GiveComponentThisProps = connect(mapStateToProps)

// we generate a new component and we make it public
export const Landing = GiveComponentThisProps(LandingComponent)
