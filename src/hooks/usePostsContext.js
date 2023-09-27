import { PostsContext } from "../context/PostsContext";

import { useContext } from "react";

export const usePostsContext = () => {
    const context = useContext( PostsContext )

    if (!context) {
        throw Error ('usePostContext must be used inside a WorkoutContextProvider ')
    }

    return context
}