import { useCallback } from "react";
import { debounce } from "lodash";
import { useAppDispatch } from "../redux/hooks";
import { updateMyList } from "../redux/reducers/my-list-reducer";
import { IMovie } from "../apis/type";

export const useCarousel = () => {
  const dispatch = useAppDispatch();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleOnAddToList = useCallback(
    debounce(
      (data: IMovie) => {
        dispatch(updateMyList(data));
      },
      500,
      { leading: true, trailing: false, maxWait: 500 }
    ),
    []
  );

  return { handleOnAddToList };
};
