import { getBooks } from './listBook';
import {  } from './OneBook';

export const TaskList = () => {

    const tasks = getTasks();

    return (<>
        <h2> All Tasks </h2>
        <ul style={{listStyleType: 'none'}}>
            {/* הצורה להראות מערך של אוביקטים - דרך שימוש בפונקציה map */}
            {/* הפונקציה map מקבלת אלמנט מהמערך */}
            {/* ומחזירה את הקומפוננטה שצריך להציג */}
            {/* כאשר מציגים רשימה צריך להוסיף מאפיין key */}
            {/* לכל אלמנט במערך, שאמור לקבל ערך ייחודי לכל אלמנט במערך */}
            {/* אין!! לשים את האינדקס של המערך */}
            { tasks.map(t => <Task key={t.id} task={t} /> ) }
        </ul>
    </>);
}