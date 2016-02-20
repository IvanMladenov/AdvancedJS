function processTrainingCenterCommands(commands) {

    'use strict';

    if (!Object.create) {
        Object.create = function (proto) {
            function F() {
            }

            F.prototype = proto;
            return new F();
        };
    }

    Function.prototype.extends = function (parent) {
        this.prototype = Object.create(parent.prototype);
        this.prototype.constructor = this;
    };

    var trainingcenter = (function () {

        var TrainingCenterEngine = (function () {

            var _trainers;
            var _uniqueTrainerUsernames;
            var _trainings;

            function initialize() {
                _trainers = [];
                _uniqueTrainerUsernames = {};
                _trainings = [];
            }

            function executeCommand(command) {
                var cmdParts = command.split(' ');
                var cmdName = cmdParts[0];
                var cmdArgs = cmdParts.splice(1);
                switch (cmdName) {
                    case 'create':
                        return executeCreateCommand(cmdArgs);
                    case 'list':
                        return executeListCommand();
                    case 'delete':
                        return executeDeleteCommand(cmdArgs);
                    default:
                        throw new Error('Unknown command: ' + cmdName);
                }
            }

            function executeCreateCommand(cmdArgs) {
                var objectType = cmdArgs[0];
                var createArgs = cmdArgs.splice(1).join(' ');
                var objectData = JSON.parse(createArgs);
                var trainer;
                switch (objectType) {
                    case 'Trainer':
                        trainer = new trainingcenter.Trainer(objectData.username, objectData.firstName,
                            objectData.lastName, objectData.email);
                        addTrainer(trainer);
                        break;
                    case 'Course':
                        trainer = findTrainerByUsername(objectData.trainer);
                        var course = new trainingcenter.Course(objectData.name, objectData.description, trainer,
                            parseDate(objectData.startDate), objectData.duration);
                        addTraining(course);
                        break;
                    case 'Seminar':
                        trainer = findTrainerByUsername(objectData.trainer);
                        var seminar = new trainingcenter.Seminar(objectData.name, objectData.description,
                            trainer, parseDate(objectData.date));
                        addTraining(seminar);
                        break;
                    case 'RemoteCourse':
                        trainer = findTrainerByUsername(objectData.trainer);
                        var remoteCourse = new trainingcenter.RemoteCourse(objectData.name, objectData.description,
                            trainer, parseDate(objectData.startDate), objectData.duration, objectData.location);
                        addTraining(remoteCourse);
                        break;
                    default:
                        throw new Error('Unknown object to create: ' + objectType);
                }
                return objectType + ' created.';
            }

            function findTrainerByUsername(username) {
                if (!username) {
                    return undefined;
                }
                for (var i = 0; i < _trainers.length; i++) {
                    if (_trainers[i].getUsername() == username) {
                        return _trainers[i];
                    }
                }
                throw new Error("Trainer not found: " + username);
            }

            function addTrainer(trainer) {
                if (_uniqueTrainerUsernames[trainer.getUsername()]) {
                    throw new Error('Duplicated trainer: ' + trainer.getUsername());
                }
                _uniqueTrainerUsernames[trainer.getUsername()] = true;
                _trainers.push(trainer);
            }

            function addTraining(training) {
                _trainings.push(training);
            }

            function executeListCommand() {
                var result = '', i;
                if (_trainers.length > 0) {
                    result += 'Trainers:\n' + ' * ' + _trainers.join('\n * ') + '\n';
                } else {
                    result += 'No trainers\n';
                }

                if (_trainings.length > 0) {
                    result += 'Trainings:\n' + ' * ' + _trainings.join('\n * ') + '\n';
                } else {
                    result += 'No trainings\n';
                }

                return result.trim();
            }

            function executeDeleteCommand(cmdArgs) {
                var objectType = cmdArgs[0];
                var deleteArgs = cmdArgs.splice(1).join(' ');
                switch (objectType) {
                    case 'Trainer':
                        // TODO: implement "delete Trainer" command
                        throw new Error('Command "delete Trainer" not implemented.');
                        break;
                    default:
                        throw new Error('Unknown object to delete: ' + objectType);
                }
                return objectType + ' deleted.';
            }

            var trainingCenterEngine = {
                initialize: initialize,
                executeCommand: executeCommand
            };
            return trainingCenterEngine;
        }());


        var Validator = (function () {
            function validateIsStringEmpty(str) {
                if (typeof str != 'string' || !str) {
                    throw new Error('empty sting is forbiden');
                }
            }

            function isNullOrUndefined(str) {
                return str === null || str === undefined;
            }

            function checkForValidEmail(email) {
                if (email.indexOf('@') === -1) {
                    throw new Error('Invalid email');
                }
            }

            function validateObjectIsNotEmpty(obj) {
                if (Object.keys(obj).length === 0) {
                    throw new Error('Object should not be empty');
                }
            }

            function validateDurationRange(duration) {
                duration = Number(duration);
                if (!(duration < 100 && duration > 0)) {
                    throw new Error('Invalid duration range');
                }
            }

            function validateDateRange(date) {
                if (typeof (date) != 'object' || !(date instanceof Date)) {
                    throw new Error('should be a Date object');
                }
                if (isNaN(date.getTime())) {
                    throw new Error('should be a valid date.');
                }
            }


            return {
                validateIsStringEmpty: validateIsStringEmpty,
                isNullOrUndefined: isNullOrUndefined,
                checkForValidEmail: checkForValidEmail,
                validateObjectIsNotEmpty: validateObjectIsNotEmpty,
                validateDurationRange: validateDurationRange,
                validateDateRange : validateDateRange
            }
        })();
        // TODO: implement Trainer class
        var Trainer = (function () {
            function Trainer(username, firstName, lastName, email) {
                this.setUsername(username);
                this.setFirstName(firstName);
                this.setLastName(lastName);
                this.setEmail(email);
            }

            Trainer.prototype.setUsername = function setUsername(username) {
                Validator.validateIsStringEmpty(username);
                return this._username = username;
            };

            Trainer.prototype.getUsername = function getUsername() {
                return this._username;
            };

            Trainer.prototype.setFirstName = function setFirstName(firstName) {
                if (!Validator.isNullOrUndefined(firstName)) {
                    Validator.validateIsStringEmpty(firstName);
                }

                this._firstName = firstName;
            };

            Trainer.prototype.getFirstName = function getFirstName() {
                return this._firstName;
            };

            Trainer.prototype.setLastName = function setLastName(lastName) {
                Validator.validateIsStringEmpty(lastName);
                this._lastName = lastName;
            };

            Trainer.prototype.getLastName = function getLastName() {
                return this._lastName;
            };

            Trainer.prototype.setEmail = function setEmail(email) {
                if (!Validator.isNullOrUndefined(email)) {
                    Validator.checkForValidEmail(email);
                }

                this._email = email;
            };

            Trainer.prototype.getEmail = function getEmail() {
                return this._email;
            };

            Trainer.prototype.toString = function () {
                var emailText = this.getEmail() ? ";email=" + this.getEmail() : '';
                var firstNameText = this.getFirstName() ? ";first-name=" + this.getFirstName() : '';
                return "Trainer[username=" + this.getUsername() +
                    firstNameText +
                    ";last-name=" + this.getLastName() +
                    emailText + "]";
            };

            return Trainer;
        })();


        // TODO: implement Training class
        var Training = (function () {
            function Training(name, description, trainer, startDate, duration) {
                if (this.constructor.name === Training) {
                    throw new Error('Cannot instantiate abstract class');
                }

                this.setName(name);
                this.setDescription(description);
                this.setTrainer(trainer);
                this.setStartDate(startDate);
                this.setDuration(duration);
            }

            Training.prototype.setName = function setName(name) {
                Validator.validateIsStringEmpty(name);
                this._name = name;
            };

            Training.prototype.getName = function getName() {
                return this._name;
            };

            Training.prototype.setDescription = function setDescription(description) {
                if (!Validator.isNullOrUndefined(description)) {
                    Validator.validateIsStringEmpty(description);
                }

                this._description = description;
            };

            Training.prototype.getDescription = function getDescription() {
                return this._description;
            };

            Training.prototype.setTrainer = function setTrainer(trainer) {
                if (!Validator.isNullOrUndefined(trainer)) {
                    Validator.validateObjectIsNotEmpty(trainer);
                }

                this._trainer = trainer;
            };

            Training.prototype.getTrainer = function getTrainer() {
                return this._trainer;
            };

            Training.prototype.setStartDate = function setStartDate(date) {
                Validator.validateDateRange(date);
                this._startDate = date;
            };

            Training.prototype.getStartDate = function getStartDate() {
                return this._startDate;
            };

            Training.prototype.setDuration = function setDuration(duration) {
                if (duration || duration == 0) {
                    Validator.validateDurationRange(duration);
                }

                this._duration = duration;
            };

            Training.prototype.getDuration = function getDuration() {
                return this._duration;
            };

            Training.prototype.toString = function toString() {
                var name = this.constructor.name;
                var description = this.getDescription() ? 'description=' + this.getDescription() + ';' : '';
                var trainer = this.getTrainer() ? 'trainer=' + this.getTrainer().toString() + ';' : '';
                var date = getFormatedDate(this.getStartDate());
                var duration = this.getDuration() ? ';duration=' + this.getDuration() : '';
                var start = name === 'Seminar' ? 'date=' : 'start-date=';
                var final = name === 'RemoteCourse' ? ';' : ']';

                var output = name + '[' +
                    'name=' + this.getName() + ';' +
                    description +
                    trainer +
                    start +
                    date +
                    (name === 'Seminar' ? '' : duration) +
                    final;

                return output;
            };

            function getFormatedDate(date) {
                var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

                return date.getDate() + '-' + months[date.getMonth()] + '-' + date.getFullYear();
            }

            return Training;

        })();


        // TODO: implement Course class
        var Course = (function () {
            function Course(name, description, trainer, startDate, duration) {
                Training.call(this, name, description, trainer, startDate, duration);
            }

            Course.extends(Training);

            return Course;
        })();


        // TODO: implement Seminar class
        var Seminar = (function () {
            var defaultDuration = 1;

            function Seminar(name, description, trainer, startDate) {
                Training.call(this, name, description, trainer, startDate, defaultDuration)
            }

            Seminar.extends(Training);

            return Seminar;
        })();


        // TODO: implement RemoteCourse class
        var RemoteCourse = (function () {
            function RemoteCourse(name, description, trainer, startDate, duration, location) {
                Course.call(this, name, description, trainer, startDate, duration)
                this.setLocation(location);
            }

            RemoteCourse.extends(Course);

            RemoteCourse.prototype.setLocation = function setLocation(location) {
                if (Validator.isNullOrUndefined(location)){
                    location = '';
                }
                Validator.validateIsStringEmpty(location);

                this._location = location;
            };

            RemoteCourse.prototype.getLocation = function getLocation() {
                return this._location;
            };

            RemoteCourse.prototype.toString = function toString() {
                return Training.prototype.toString.call(this) + 'location=' + this.getLocation() + ']';
            };

            return RemoteCourse;
        })();


        var trainingcenter = {
            Trainer: Trainer,
            Course: Course,
            Seminar: Seminar,
            RemoteCourse: RemoteCourse,
            engine: {
                TrainingCenterEngine: TrainingCenterEngine
            }
        };

        return trainingcenter;
    })();


    var parseDate = function (dateStr) {
        if (!dateStr) {
            return undefined;
        }
        var date = new Date(Date.parse(dateStr.replace(/-/g, ' ')));
        var dateFormatted = formatDate(date);
        if (dateStr != dateFormatted) {
            throw new Error("Invalid date: " + dateStr);
        }
        return date;
    }


    var formatDate = function (date) {
        var day = date.getDate();
        var monthName = date.toString().split(' ')[1];
        var year = date.getFullYear();
        return day + '-' + monthName + '-' + year;
    }


    // Process the input commands and return the results
    var results = '';
    trainingcenter.engine.TrainingCenterEngine.initialize();
    commands.forEach(function (cmd) {
        if (cmd != '') {
            try {
                var cmdResult = trainingcenter.engine.TrainingCenterEngine.executeCommand(cmd);
                results += cmdResult + '\n';
            } catch (err) {
                //console.log(err.stack);
                results += 'Invalid command.\n';
            }
        }
    });
    return results.trim();
}


// ------------------------------------------------------------
// Read the input from the console as array and process it
// Remove all below code before submitting to the judge system!
// ------------------------------------------------------------
//
//(function () {
//    var arr = [];
//    if (typeof (require) == 'function') {
//        // We are in node.js --> read the console input and process it
//        require('readline').createInterface({
//            input: process.stdin,
//            output: process.stdout
//        }).on('line', function (line) {
//            arr.push(line);
//        }).on('close', function () {
//            console.log(processTrainingCenterCommands(arr));
//        });
//    }
//})();
