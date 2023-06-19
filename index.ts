// Import stylesheets
import './style.css';

withFunc();
sortFunc();
reverseFunc();

// Write TypeScript code!
function withFunc() {
  const peopleWith = ['Sally', 'Kyle', 'John'];
  const newPeopleWith = peopleWith.with(1, 'New');

  console.log({ peopleWith }, { newPeopleWith });
}

function sortFunc() {
  const peopleSorted = ['Sally', 'Kyle', 'John'];
  const newPeopleSorted = peopleSorted.sort();

  console.log({ peopleSorted }, { newPeopleSorted });

  //before
  const peopleSortedBefore = ['Sally', 'Kyle', 'John'];
  const newPeopleSortedBefore = [...peopleSorted].sort();

  console.log({ peopleSortedBefore }, { newPeopleSortedBefore });

  const peopleToSortedAfter = ['Sally', 'Kyle', 'John'];
  const newPeopleToSortedAfter = peopleSorted.toSorted();

  console.log({ peopleToSortedAfter }, { newPeopleToSortedAfter });
}

function reverseFunc() {
  const peopleReversed = ['Sally', 'Kyle', 'John'];
  const newPeopleReversed = peopleReversed.reverse();

  console.log({ peopleReversed }, { newPeopleReversed });

  //before
  const peopleReversedBefore = ['Sally', 'Kyle', 'John'];
  const newPeopleReversedBefore = [...peopleReversed].reverse();

  console.log({ peopleReversedBefore }, { newPeopleReversedBefore });

  const peopleToReversedAfter = ['Sally', 'Kyle', 'John'];
  const newPeopleToReversedAfter = peopleReversed.toReversed();

  console.log({ peopleToReversedAfter }, { newPeopleToReversedAfter });
}
