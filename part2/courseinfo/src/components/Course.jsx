const Header = (props) => {
  console.log('Header props', props)
  return <h1>{props.course}</h1>
}

const Part = (props) => {
  console.log('Part props', props)
  return (
    <p>{props.name} {props.exercises}</p>
  )
}

const Parts = (props) => {
  console.log('Parts props', props)
  return (
    <div>
      {props.parts.map(part => 
        <Part key={part.id} name={part.name} exercises={part.exercises} />
      )}
    </div>
  )
}

const Total = (props) => {
  console.log('Total props', props)
  return (
    <div>
      <p><b>Total of {props.parts.reduce((sum, part) => sum + part.exercises, 0)} exercises</b></p>
    </div>
  )
}

const Course = (props) => {
  console.log('Course props', props)
  return (
    <div>
      <Header course={props.course.name} />
      <Parts parts={props.course.parts} />
      <Total parts={props.course.parts} />
    </div>
  )
}

export default Course
