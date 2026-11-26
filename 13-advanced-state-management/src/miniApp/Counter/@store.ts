import {create} from 'zustand';

type Store = {
  count:number;
  increment: ()=>void;
  decrement: ()=>void;
    step:number,
  max:number;
  min:number;
    reset: () => void;
      setStep: (newStep:number) => void;
}

export const useCountStore = create<Store>()((set, _get, store)=> {

    const setStep = (newStep: number) => {
      set({ step: newStep });
    };

  const reset = () => set(store.getInitialState());

  const increment = () => {
    set(({count, step, max})=>{
      let nextCount = count + step;
      if(nextCount >= max) nextCount = max;
      return { count: nextCount }
    })
  }
 
  const decrement = () =>
    set(({ count, step, min }) => {
      let nextCount = count - step;
      if (nextCount <= min) nextCount = min;
      return { count: nextCount };
    });
 
  return {
    count:0,
    step:1,
    min:0,
    max:10,
    increment,
    decrement,
     reset,
     setStep
  }
})