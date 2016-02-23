define(['hall', 'employee', 'trainer', 'course', 'lecture', 'party'], 
    function(Hall, Employee, Trainer, Course, Lecture, Party){
        return (function() {
            var halls = [];

            var openSource = Object.create(Hall).init('Open Source', 110);
            var inspiration = Object.create(Hall).init('Inspiration', 220);

            var mariya = Object.create(Employee).init('Mariya', 40);
            var pesho = Object.create(Trainer).init('Pesho', 20);
            var gosho = Object.create(Trainer).init('Gosho', 40);

            var feedback = 'I love gosho';
            var feedback2 = 'Best lecturer but still has to work on his diction';
            var feedback3 = 'Holy moly';
            gosho.addFeedback(feedback);
            gosho.addFeedback(feedback2);
            pesho.addFeedback(feedback3);

            var advancedJs = Object.create(Course).init('Advanced JS', 12);
            var jsFrameworks = Object.create(Course).init('JS Frameworks', 13);
            pesho.addCourse(advancedJs);
            pesho.addCourse(jsFrameworks);
            gosho.addCourse(jsFrameworks);

            var examPractice = Object.create(Lecture).init({
                title: 'Advanced JS Exam Practice',
                type: 'lecture',
                duration: 4,
                date: new Date(2016, 1, 17, 18, 0),
                course: advancedJs,
                trainer: pesho});
            var advancedJSExam = Object.create(Lecture).init({
                title: 'Advanced JS Exam',
                type: 'lecture',
                duration: 6,
                date: new Date(2016, 1, 21, 9, 0),
                course: advancedJs,
                trainer: pesho});
            var courseIntro = Object.create(Lecture).init({
                title: 'Course Introduction',
                type: 'lecture',
                duration: 2,
                date: new Date(2016, 1, 22, 18, 0),
                course: jsFrameworks,
                trainer: gosho});
            var saintValParty = Object.create(Party).init({
                title: 'Saint Valentines',
                type: 'party',
                duration: 6,
                date: new Date(2016, 1, 14, 19, 0),
                isBirthday: false,
                isCatered: false,
                organiser: mariya});
            var trifonParty = Object.create(Party).init({
                title: 'Trifon Zarezan',
                type: 'party',
                duration: 4,
                date: new Date(2016, 1, 14, 19, 0),
                isBirthday: false,
                isCatered: true,
                organiser: mariya});

            openSource.addEvent(examPractice);
            openSource.addEvent(courseIntro);
            inspiration.addEvent(advancedJSExam);
            inspiration.addEvent(saintValParty);
            inspiration.addEvent(trifonParty);
            halls.push(openSource);
            halls.push(inspiration);

            return halls;
        }());
});