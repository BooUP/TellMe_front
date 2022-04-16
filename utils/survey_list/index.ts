import { PROGRESS_STATUS } from "../../constants/survey_list";

export const progressText = (status: number) => {
  const { DONE, NOT_STARTED, IN_PROGRESS } = PROGRESS_STATUS;

  if (status === 100) return DONE;
  if (status === 0) return NOT_STARTED;
  return IN_PROGRESS;
};
