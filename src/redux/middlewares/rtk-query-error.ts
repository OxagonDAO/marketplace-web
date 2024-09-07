// @ts-nocheck

import { isRejectedWithValue, isFulfilled } from "@reduxjs/toolkit";
import type { MiddlewareAPI, Middleware } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
/* import { toast } from 'your-cool-library'; */

export const rtkQueryErrorMiddleware: Middleware =
  (api: MiddlewareAPI) => (next) => (action) => {
    // RTK Query uses `createAsyncThunk` from redux-toolkit under the hood, so we're able to utilize these matchers!

    if (isRejectedWithValue(action)) {
      /* toast.error(`Error code ${action.payload.status}`); */
      const message = action.payload?.data?.message 
      message && toast.error(message);
      /* if (action.payload.status !== 200) */

      /* toast.warn({
        title: 'Async error!',
        message:
          'data' in action.error
            ? (action.error.data as { message: string }).message
            : action.error.message,
      }); */
    } else if (isFulfilled(action)) {
      if (action?.payload?.message) toast.success(action.payload.message);
    }

    return next(action);
  };
