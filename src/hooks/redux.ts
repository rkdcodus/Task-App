import { TypedUseSelectorHook } from "react-redux";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { useDispatch } from "react-redux";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useTypedDispatch = () => useDispatch<AppDispatch>();

// const logger = useSelector((state: RootState) => state.logger);
// useSelector 대신 useTypedSelector를 사용하면 state에 RootState 타입을 매번 쓸 필요 없어짐.

//TypedUseSelectorHook는 아래에서 Obj<T>와 같은 역할을 함
/**
 * interface Obj<T> {
 *   name: T;
 * }
 *
 * interface State {
 *   state: {
 *     data: string;
 *   }
 * }
 *
 * const obj: Obj<State> = {
 *   name: {
 *     state: {
 *       data: '1234',
 *     }
 *   }
 * }
 *
 * obj 객체의 타입을 그냥 State로 줄 경우 name 구조때문에 에러가 남.
 *
 */
