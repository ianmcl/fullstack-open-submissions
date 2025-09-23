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

const Courses = (props) => {
  console.log('Courses props', props)
  return (
    <div>
      {props.course.map(course => 
        <Course key={course.id} course={course} />
      )}
    </div>
  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return <Courses course={courses} />
}

export default App
