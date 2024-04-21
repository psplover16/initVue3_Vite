

export const img = (app) => {
  return app.directive(`img`,
    (el, binding, vnode, prevNode) => {
      const imgUrl = `../${binding.value}`;
      el.src = new URL(imgUrl, import.meta.url).href;
      // mounted(el, binding, vnode, prevNode) {
      //   // console.log(el);
      //   // console.log(binding);
      //   // console.log(vnode);
      //   // console.log(prevNode);
      //   // console.log(import.meta.url);

      // },
      // updated(el, binding) {
      //   const imgUrl = `../${binding.value}`;
      //   el.src = new URL(imgUrl, import.meta.url).href;
      // },
    }
  );
  // 指令选项
};
