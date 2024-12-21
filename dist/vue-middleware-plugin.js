import { reactive as s } from "vue";
let c = s({}), l = s({}), d = s({});
const f = () => ({ request: c, model: l, params: d }), h = () => l, M = async (e) => {
  if (c = e.to.query, !e.to.meta.controller) throw new Error("Controller not defined");
  if (!e.to.meta.controller.length) throw new Error("Controller/Method not defined");
  e.to.params, d = i(e.to.params), l = new e.to.meta.controller[0]();
  const r = e.to.meta.controller[1];
  await l[r](d.id), console.log(l.model.comments);
};
function i(e) {
  return Object.keys(e).forEach((r) => {
    e[r] ? e[r] = Number(e[r]) : e[r] === "" && (e[r] = null);
  }), e;
}
const m = (e, r, o) => {
  const t = r[o];
  return t ? (...n) => {
    m(e, r, o + 1), t({ ...e });
  } : e.next;
}, a = (e, r, o) => {
  if (r.meta.middleware) {
    const t = Array.isArray(r.meta.middleware) ? r.meta.middleware : [r.meta.middleware], n = {
      from: e,
      to: r,
      // next,
      router: o
    }, u = m(n, t, 1);
    return t[0]({ ...n, next: u });
  }
}, b = {
  install: (e, r) => {
    r.beforeEach((o, t) => {
      a(t, o, r);
    });
  }
};
export {
  b as MiddlewarePlugin,
  M as requestsInjection,
  f as useController,
  h as useModel
};
//# sourceMappingURL=vue-middleware-plugin.js.map
