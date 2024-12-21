import { reactive as s } from "vue";
let m = s({}), l = s({}), d = s({});
const h = () => ({ request: m, model: l, params: d }), M = () => l, b = async (e) => {
  var o, t;
  if (m = e.to.query, !((o = e.to.meta) != null && o.controller)) throw new Error("Controller not defined");
  if (!((t = e.to.meta) != null && t.controller.length)) throw new Error("Controller/Method not defined");
  e.to.params, d = a(e.to.params), l = new e.to.meta.controller[0]();
  const r = e.to.meta.controller[1];
  await l[r](d.id), console.log(l.model.comments);
};
function a(e) {
  return Object.keys(e).forEach((r) => {
    e[r] ? e[r] = Number(e[r]) : e[r] === "" && (e[r] = null);
  }), e;
}
const u = (e, r, o) => {
  const t = r[o];
  return t ? (...n) => {
    u(e, r, o + 1), t({ ...e });
  } : e.next;
}, w = (e, r, o) => {
  var t;
  if ((t = r.meta) != null && t.middleware) {
    const n = Array.isArray(r.meta.middleware) ? r.meta.middleware : [r.meta.middleware], c = {
      from: e,
      to: r,
      // next,
      router: o
    }, i = u(c, n, 1);
    return n[0]({ ...c, next: i });
  }
}, q = {
  install: (e, r) => {
    r.beforeEach((o, t) => {
      w(t, o, r);
    });
  }
};
export {
  q as MiddlewarePlugin,
  b as requestsInjection,
  h as useController,
  M as useModel
};
//# sourceMappingURL=vue-middleware-plugin.js.map
