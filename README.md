# React Context Starter

Feel free to use this starter to work through the [React Context Example](https://github.com/jdrichards-pursuit/react-context-starter) if you'd like to get your hands dirty!

## Videos

- [React Context Part 1 - React Context Provider](https://drive.google.com/file/d/1wpP9oCQMLUIZzwhtvdH2DNlnLvxRcAWi/view?usp=sharing)
- [React Context Part 2 - React Context Consumer](https://drive.google.com/file/d/1rh3RYQQqmYFd9EtQ0NtMH9SSycHTFJlp/view?usp=sharing)
- [React Context Part 3 - How to Use Multiple Context Providers](https://drive.google.com/file/d/15H_F1xAzJWsLtu9G1xcTClR6m5cODmrf/view?usp=sharing)

### Steps to Create Context:

1. Create a `context` directory and a file for the context, custom hook etc.
1. Create the context using `createContext` from `react`
1. Create a custom hook for the consumer using `useContext` and the name of the context you created
1. Create a custom wrapper Provider component using the .Provider method on the created context where you will house your data, state, functions whatever you choose to allow to be consumed
1. Wrap your whole application `<App />` using the wrapper Provider component
1. Use your custom hook to consume the data in whichever component you choose.

Good Luck!

## Application Component Tree

![Tree](/public/assets/tree.png)
