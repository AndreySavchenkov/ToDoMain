import React from "react";
import {Provider} from "react-redux";
import {store} from "../store/store";

export const ReduxStorieProviderDecorator = (storyFn: () => React.ReactNode) => {
    return <Provider store={store}>{storyFn()}</Provider>
}