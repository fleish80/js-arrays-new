// Import stylesheets
import './style.css';

withFunc();
sortFunc();
reverseFunc();
spliceFunc();

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
  const newPeopleSortedBefore = [...peopleSortedBefore].sort();

  console.log({ peopleSortedBefore }, { newPeopleSortedBefore });

   //after
  const peopleToSortedAfter = ['Sally', 'Kyle', 'John'];
  const newPeopleToSortedAfter = peopleToSortedAfter.toSorted();

  console.log({ peopleToSortedAfter }, { newPeopleToSortedAfter });
}

function reverseFunc() {
  const peopleReversed = ['Sally', 'Kyle', 'John'];
  const newPeopleReversed = peopleReversed.reverse();

  console.log({ peopleReversed }, { newPeopleReversed });

  //before
  const peopleReversedBefore = ['Sally', 'Kyle', 'John'];
  const newPeopleReversedBefore = [...peopleReversedBefore].reverse();

  console.log({ peopleReversedBefore }, { newPeopleReversedBefore });

  //after
  const peopleToReversedAfter = ['Sally', 'Kyle', 'John'];
  const newPeopleToReversedAfter = peopleToReversedAfter.toReversed();

  console.log({ peopleToReversedAfter }, { newPeopleToReversedAfter });
}

function spliceFunc() {
  const peopleSpliced = ['Sally', 'Kyle', 'John'];
  const newPeopleSpliced = peopleSpliced.splice(0, 2, 'New');

  console.log({ peopleSpliced }, { newPeopleSpliced });

  //before
  const peopleSplicedBefore = ['Sally', 'Kyle', 'John'];
  const newPeopleSplicedBefore = [...peopleSplicedBefore].splice(0, 2, 'New');

  console.log({ peopleSplicedBefore }, { newPeopleSplicedBefore });

   //after
  const peopleToSplicedAfter = ['Sally', 'Kyle', 'John'];
  const newPeopleToSplicedAfter = peopleToSplicedAfter.toSpliced(0, 2, 'New');

  console.log({ peopleToSplicedAfter }, { newPeopleToSplicedAfter });
}
