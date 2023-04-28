import { createContext, useContext, useReducer } from "react";
import { AuthContext } from "./AuthContext.jsx";

// Create a new context for the chat
export const ChatContext = createContext();

// Create a provider component for the chat context
export const ChatContextProvider = ({ children }) => {
  // Get the current user from the AuthContext
  const { currentUser } = useContext(AuthContext);

  // Define the initial state of the chat context
  const INITIAL_STATE = {
    chatId: "null",
    user: {},
  };

  // Define a reducer function to handle state changes
  const chatReducer = (state, action) => {
    switch (action.type) {
      case "CHANGE_USER":
        // If the action is to change the user, update the user and chat ID in the state
        return {
          user: action.payload,
          chatId:
            currentUser.uid > action.payload.uid
              ? currentUser.uid + action.payload.uid
              : action.payload.uid + currentUser.uid,
        };
      default:
        // If no action is specified, return the current state
        return state;
    }
  };

  // Use the useReducer hook to manage state changes using the chatReducer function and the initial state
  const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE);

  // Provide the ChatContext to child components and pass in the state and dispatch functions
  return (
    <ChatContext.Provider value={{ data: state, dispatch }}>
      {children}
    </ChatContext.Provider>
  );
};
