const Course = ({course, total}) => {
    return (
    <div>
        <h1 key={course.id}>{course.name}</h1>
        {course.parts.map(c1 => <p key={c1.id}>{c1.name} {c1.exercises}</p>)}
        <p>Total : {total}</p>
    </div>
    )
}

export default Course