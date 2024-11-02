import { ref, computed, toRef } from 'vue';

export const useCycleList = (list = []) => {
  const _list = toRef(list);
  const index = ref(0);
  const state = computed({
    get() {
      return _list.value[index.value];
    },
    set(value) {
      const findIndex = _list.value.find((item) => item == value);
      if (findIndex) {
        const newIndex = _list.value.indexOf(findIndex);
        index.value = newIndex;
      } else {
        throw new Error('Item not fount');
      }
    },
  });

  function next() {
    if (index.value == _list.value.length - 1) {
      index.value = 0;
    } else {
      index.value++;
    }
  }
  function prev() {
    if (index.value == 0) {
      index.value = _list.value.length - 1;
    } else {
      index.value--;
    }
  }
  function go(i) {
    if (i <= _list.value.length - 1 || i < 0) {
      index.value = i;
    } else {
      throw new Error('invalid index');
    }
  }

  return {
    state,
    next,
    prev,
    go,
  };
};
