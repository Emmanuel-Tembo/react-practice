// using javascript in markup to render specific funstions
const today = new Date();

function FormatDate(date) {
    return new Intl.DateTimeFormat(
        'en-Us',
        {weekday: 'long'}
    ).format(date)
}

export default function TodoList (){
    return (
        <h1>Today is {FormatDate(today)}</h1>
    )
}