import { useCallback } from "react";
import { debounce } from "lodash";
import { useAppDispatch } from "../redux/hooks";
import { updateMyList } from "../redux/reducers/my-list-reducer";
import { IMovie } from "../apis/type";

export const useCarousel = () => {
  const dispatch = useAppDispatch();

  const addToList = (data: IMovie) => {
    dispatch(updateMyList(data));
  };
  const debounceAddToList = debounce(addToList, 500, {
    leading: true,
    trailing: false,
    maxWait: 500,
  });
  const handleOnAddToList = useCallback(debounceAddToList, [debounceAddToList]);

  return { handleOnAddToList };
};
