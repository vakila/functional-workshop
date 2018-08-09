# Pure functions

A pure function has two characteristics:
- It has no effect on the program or the world besides outputting its return value (no side effects)
- Given the same input values, it will always return the same output (deterministic), because its return value depends only on its input parameters, and not on any other information (e.g. global program state)

## Exercises

### Pure or Not?
  - [ ] With your partner/group, read through the functions in `pureOrNot.js` and classify each as pure or impure
  - [ ] Discuss with the larger group. Were there any surprises?

### From impure to pure (`impureToPure.js`)
  - [ ] Spend ~5 minutes looking over code from a project you've been working on recently, and identify an impure function
  - [ ] Show the function to your partner/group, and walk them through what it does
  - [ ] Swap functions with your partner/group, and rewrite their impure function to make it pure
  - [ ] Review the pure version with your partner/group, walking them through the changes you made to their function, and giving them a code review of the changes they made to yours
  - [ ] [challenge] Write test(s) for the pure version, and write analogous test(s) for the impure version (or copy tests you already have). Do you notice any differences?
